import Link from "next/link";

const CATEGORY_STYLE: Record<string, string> = {
    講義: "bg-[#eef2f7] text-[#3b6ea5] border border-[#cdddee]",
    学習: "bg-[#fbecec] text-[#b4453c] border border-[#f1cfcd]",
};

export type OtherWorkCard = {
    title: string,
    description: string,
    tags: string[],
    href: string,
    category: string,
}

export default function OtherWorkCard({ title, description, tags, href, category }: OtherWorkCard) {
    return (
        <Link href={href} className="
            rounded-xl border border-[#d4af37]/45 bg-white
            overflow-hidden relative
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
            block
        ">
            <div className="h-[3px] bg-[#14532d]" />
            <div className="px-4 py-3.5 flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-[#14532d] text-sm">{title}</p>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full ${CATEGORY_STYLE[category] ?? CATEGORY_STYLE["講義"]}`}>
                        {category}
                    </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-[#d4af37]/70 text-[#14532d]">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-[11px] text-[#14532d] font-medium text-right relative z-10">
                    詳細を見る →
                </p>
            </div>
            <div className="absolute -bottom-9 -right-2.5 w-32 h-32 rounded-full bg-[rgba(20,83,45,0.06)] z-0" />
        </Link>
    );
}