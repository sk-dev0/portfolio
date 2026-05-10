export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className="relative mb-8">
            <p className="text-7xl font-bold text-green-100 select-none">{title}</p>
            <p className="text-xl font-medium text-green-800 absolute bottom-2 left-0">{title}</p>
            <div className="w-8 h-0.5 bg-green-800 mt-2" />
        </div>
    );
}