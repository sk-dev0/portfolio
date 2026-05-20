import Link from "next/link";

export type OtherWorkCard = {
    title: string,
    description: string,
    tags: string[],
    href: string;
}

export default function OtherWorkCard({ title, description, tags, href }: OtherWorkCard) {
    return (
        <Link href={href} className="
            rounded-xl border border-gray-200 bg-white
            overflow-hidden relative
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
            block
        ">
            <div className="h-[3px] bg-gradient-to-r from-green-900 to-green-400" />
            <div className="px-4 py-3.5 flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-green-900 text-sm">{title}</p>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        講義
                    </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full ring-1 ring-green-700 text-green-800 bg-green-50">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-[11px] text-green-800 font-medium text-right relative z-10">
                    詳細を見る →
                </p>
            </div>
            <div className="absolute -bottom-9 -right-2.5 w-32 h-32 rounded-full bg-gradient-to-br from-green-300 to-green-100 opacity-30" />
        </Link>
    );
}