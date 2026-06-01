import { NextResponse } from "next/server";

export const runtime = "nodejs";
// 토큰은 10분 유효하므로 캐싱하지 않고 매 요청마다 새로 발급.
export const dynamic = "force-dynamic";

/**
 * Azure Speech 단기 인증 토큰 발급 프록시.
 *
 * 구독 키(AZURE_SPEECH_KEY)는 절대 클라이언트로 내려보내지 않는다.
 * 대신 issueToken 엔드포인트에서 10분짜리 authorization token을 받아
 * { token, region } 만 반환한다. 클라이언트는 이 토큰으로 Speech SDK를 초기화한다.
 */
export async function GET() {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;

  if (!key || !region) {
    return NextResponse.json(
      {
        error:
          "서버에 AZURE_SPEECH_KEY / AZURE_SPEECH_REGION 이 설정되지 않았습니다. .env.local(또는 Vercel 환경변수)을 확인하세요.",
      },
      { status: 500 }
    );
  }

  try {
    const tokenUrl = `https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`;
    const upstream = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "0",
      },
      cache: "no-store",
    });

    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("Azure issueToken error:", upstream.status, detail);
      return NextResponse.json(
        { error: `음성 토큰 발급 실패 (${upstream.status})`, detail: detail.slice(0, 300) },
        { status: 502 }
      );
    }

    const token = await upstream.text();
    return NextResponse.json(
      { token, region },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("Route /api/speech-token error:", err);
    return NextResponse.json(
      { error: "음성 토큰 발급 중 서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
