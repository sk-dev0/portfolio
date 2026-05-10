export type Card = {
    title: string,
    description: string,
    tags: string[],
    github: string,
    demo?: string,
    image: string,
    isTeam: boolean,
}

export default function WorkCard({ title, description, tags, github, demo, isTeam }: Omit<Card, 'image'>) {
    return (
        <div className="
            rounded-xl border border-gray-200 bg-white
            overflow-hidden
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
            cursor-pointer
        ">
            <div className="
                bg-gradient-to-br from-green-900 via-green-700 to-green-400
                px-6 py-4
                flex justify-between items-center
            ">
                <p className="font-medium text-white text-base">{title}</p>
                <span className={`text-xs px-3 py-1 rounded-full border ${isTeam 
                    ? "bg-white/20 text-white border-white/40" 
                    : "bg-white/15 text-green-100 border-white/30"
                }`}>
                    {isTeam ? "チーム" : "個人"}
                </span>
            </div>
            <div className="px-6 py-5 flex flex-col gap-4">
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full ring-1 ring-green-700 text-green-800 bg-green-50">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 text-sm text-green-800 font-medium pt-3 border-t-2 border-gray-200">
                    <a href={github} className="hover:text-green-600 transition-colors">GitHub →</a>
                    {demo && <a href={demo} className="hover:text-green-600 transition-colors">Demo →</a>}
                </div>
            </div>
        </div>
    );
}