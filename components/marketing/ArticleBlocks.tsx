import { Check } from "lucide-react";

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

interface ArticleBlocksProps {
  blocks: ArticleBlock[];
}

export function ArticleBlocks({ blocks }: ArticleBlocksProps) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="mt-4 text-[21px] font-semibold leading-[1.25] tracking-tight text-dark first:mt-0 sm:text-[24px]"
              >
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={i} className="mt-2 text-[16px] font-bold text-dark sm:text-[17px]">
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="text-[15px] leading-relaxed text-grey sm:text-[15.5px]">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-dark/85">
                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-verify-green" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
