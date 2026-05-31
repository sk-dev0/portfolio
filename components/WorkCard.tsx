import Link from "next/link";

export type Card = {
    slug: string,
    title: string,
    description: string,
    tags: string[],
    isTeam: boolean,
}

export default function WorkCard({ slug, title, description, tags, isTeam }: Omit<Card, 'image'>) {
    return (
        <Link href={`/works/main/${slug}`} className="block">
            <div className="
            rounded-xl border border-[#d4af37]/45 bg-white
            overflow-hidden
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
            cursor-pointer
        ">
                <div className="
                bg-[#14532d]
                border-b border-[#d4af37]/55
                px-6 py-4
                flex justify-between items-center
            ">
                    <p className="font-medium text-white text-base">{title}</p>
                    <span className={`text-xs px-3 py-1 rounded-full border ${isTeam
                        ? "border-[#d4af37] text-[#d4af37]"
                        : "border-white/40 text-white/80"
                        }`}>
                        {isTeam ? "チーム" : "個人"}
                    </span>
                </div>
                <div className="px-6 py-5 flex flex-col gap-4">
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#d4af37]/70 text-[#14532d]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 text-sm text-green-800 font-medium pt-3 border-t border-[#d4af37]/30">
                    </div>
                </div>
            </div>
        </Link>
    );
}