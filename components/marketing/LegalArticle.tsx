import { Breadcrumb } from "./Breadcrumb";

export type LegalBlock = { type: "paragraph"; text: string } | { type: "list"; items: string[] };

export interface LegalSection {
  number: number;
  title: string;
  blocks: LegalBlock[];
}

interface LegalArticleProps {
  breadcrumb: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalArticle({ breadcrumb, title, lastUpdated, sections }: LegalArticleProps) {
  return (
    <article className="w-full bg-off-white py-12 lg:py-16">
      <div className="mx-auto max-w-[760px] px-6 lg:px-10">
        <Breadcrumb label={breadcrumb} />

        <h1 className="mt-5 text-[30px] font-semibold tracking-tight text-dark sm:text-[36px]">{title}</h1>
        <span className="mt-2 block font-mono text-[12px] font-medium text-dark/40">
          Last updated: {lastUpdated}
        </span>

        <div className="mt-10 flex flex-col gap-9">
          {sections.map((section) => (
            <section key={section.number} id={`section-${section.number}`}>
              <h2 className="text-[17px] font-bold text-dark sm:text-[18px]">
                {section.number}. {section.title}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.blocks.map((block, i) =>
                  block.type === "paragraph" ? (
                    <p key={i} className="text-[14.5px] leading-relaxed text-grey">
                      {block.text}
                    </p>
                  ) : (
                    <ul key={i} className="flex flex-col gap-2 pl-1">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[14.5px] leading-relaxed text-grey">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dark/30" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
