import Image from "next/image";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[8rem_1fr]">
      <dt className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </dt>
      <dd className="text-[15px] leading-relaxed text-ink">{children}</dd>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-paper px-4 py-16 sm:py-24">
      <main className="relative w-full max-w-xl">
        <p className="mb-4 text-center font-display text-[11px] font-medium uppercase tracking-[0.3em] text-ink-soft">
          Food Safety Declaration
        </p>

        <div className="relative rounded-xs border border-line bg-card px-8 py-9 shadow-[0_1px_0_rgba(32,27,18,0.05)] sm:px-11 sm:py-11">
          {/* corner ticks — packaging print-registration marks */}
          <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-ink/25" />
          <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-ink/25" />
          <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-ink/25" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ink/25" />

          <header>
            <p className="font-display text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              Manufactured By
            </p>
            <h1 className="mt-2 font-display text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-[30px]">
              Euro India Fresh Foods Limited
            </h1>
            <p className="mt-1 text-sm font-medium text-turmeric">
              (J. R. Group)
            </p>
          </header>

          <div className="mt-8 divide-y divide-line border-y border-line">
            <Field label="Address">
              A-29/1, Ichchhapore GIDC, Hazira-Magdalla Road,
              Surat &ndash; 394510, Gujarat, INDIA.
            </Field>

            <Field label="FSSAI Lic. No.">
              <span className="inline-flex items-center gap-3">
                <Image
                  src="/fssai.svg"
                  alt="FSSAI"
                  width={72}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
                <span className="font-mono text-[15px] tracking-wide text-ink">
                  10013021000759
                </span>
              </span>
            </Field>

            <Field label="Queries">
              For any queries, please call or email (including batch no.
              &amp; mfd.) to Customer Care Division, Toll Free No.{" "}
              <a
                href="tel:18002330091"
                className="font-mono text-[14px] tracking-wide text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-seal-green"
              >
                1800&ndash;233&ndash;0091
              </a>
              .
            </Field>

            <Field label="Email">
              <a
                href="mailto:customercare@euroindiafoods.com"
                className="underline decoration-line underline-offset-4 transition-colors hover:decoration-seal-green"
              >
                customercare@euroindiafoods.com
              </a>
            </Field>

            <Field label="Website">
              <a
                href="https://www.euroindiafoods.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:decoration-seal-green"
              >
                www.euroindiafoods.com
              </a>
            </Field>
          </div>
        </div>
      </main>
    </div>
  );
}
