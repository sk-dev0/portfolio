export type Card = {
    title: string,
    description: string,
    tags: string[],
    github: string,
    demo?: string,
    image: string,
    isTeam: boolean,
}

export default function WorkCard({ title, description, tags, github, demo, image, isTeam }: Card) {
    return (
        <div className="border-l-4 border-green-800 border-t border-r border-b border-gray-200 rounded-r-lg px-6 py-4 flex flex-col gap-3 mb-4">
            <img src={image} alt={title} className="w-full h-96 object-contain rounded" />
            <div className="flex justify-between items-start">
                <p className="font-bold text-xl">{title}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${isTeam ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`}>
                    {isTeam ? "チーム" : "個人"}
                </span>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full ring-1 ring-green-800 text-green-800">{tag}</span>
                ))}
            </div>
            <div className="flex gap-4 text-sm text-green-800">
                <a href={github}>GitHub</a>
                {demo && <a href={demo}>Demo</a>}
            </div>
        </div>
    );
}