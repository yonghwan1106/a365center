import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type HeroAction = {
  href: string;
  label: string;
  tone?: "red" | "navy";
};

export function SubpageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  actions = [],
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  imageAlt: string;
  actions?: HeroAction[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-bg pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="min-w-0">
          <span className="mb-5 inline-block rounded-md bg-yellow px-4 py-[7px] text-sm font-extrabold text-[#92400E]">
            {eyebrow}
          </span>
          <h1 className="break-keep text-[34px] font-black leading-[1.18] tracking-tight text-text md:text-[48px]">
            {title}
            {accent && (
              <>
                <br />
                <span className="text-red">{accent}</span>
              </>
            )}
          </h1>
          <p className="mt-5 max-w-2xl break-keep text-[17px] leading-[1.8] text-text-mute">
            {description}
          </p>
          {actions.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-extrabold text-white shadow-card-md transition-all hover:-translate-y-[2px] ${
                    action.tone === "navy" ? "bg-navy hover:bg-navy-deep" : "bg-red hover:bg-red-dark"
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
          {children}
        </div>

        <div className="min-w-0 overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-card-lg">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-bg-soft">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      {eyebrow && <div className="mb-2 text-sm font-extrabold tracking-wide text-yellow-strong">{eyebrow}</div>}
      <h2 className="break-keep text-[28px] font-extrabold leading-[1.25] tracking-tight text-text md:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 break-keep text-[15.5px] leading-[1.75] text-text-mute">{description}</p>}
    </div>
  );
}

export function InfoCard({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card-sm">
      {icon && <div className="mb-4 text-[34px] leading-none">{icon}</div>}
      <h3 className="mb-3 break-keep text-xl font-extrabold tracking-tight text-text">{title}</h3>
      <div className="break-keep text-sm leading-[1.8] text-text-mute">{children}</div>
    </div>
  );
}

export function CTASection({
  title,
  description,
  href = "tel:010-9867-3121",
  label = "010-9867-3121 전화 상담",
}: {
  title: string;
  description: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-yellow py-12 md:py-14">
      <div className="wrap flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <h2 className="break-keep text-[26px] font-black leading-[1.25] text-text md:text-3xl">{title}</h2>
          <p className="mt-2 break-keep text-sm leading-[1.75] text-[#7C2D12]">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-red px-7 py-4 text-base font-extrabold text-white shadow-[0_8px_22px_rgba(229,57,53,0.28)] transition-all hover:-translate-y-[2px] hover:bg-red-dark"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
