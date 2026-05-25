import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "서버에 GEMINI_API_KEY가 설정되지 않았습니다. .env.local 확인 필요." },
        { status: 500 }
      );
    }

    const { question } = (await req.json()) as { question?: string };
    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return NextResponse.json({ error: "질문 내용이 비어있습니다." }, { status: 400 });
    }
    if (question.length > 2000) {
      return NextResponse.json({ error: "질문이 너무 깁니다 (최대 2000자)." }, { status: 400 });
    }

    const prompt = `${question}\n\n** 교육용 AI 선생님으로서 아주 쉽고 크고 간단한 한국어로 답변해주세요. 어르신들이 이해하기 쉽게 해주세요.**`;

    const upstream = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 1500, temperature: 0.7 },
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => "");
      console.error("Gemini upstream error:", upstream.status, errText);
      return NextResponse.json(
        { error: `Gemini API 요청 실패 (${upstream.status})` },
        { status: 502 }
      );
    }

    const data = await upstream.json();
    const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json({
      answer: text || "죄송합니다. 답변을 만들지 못했습니다.",
    });
  } catch (err) {
    console.error("Route /api/gemini error:", err);
    return NextResponse.json(
      { error: "서버 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
