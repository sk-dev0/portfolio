export default function About() {
    return (
        <section id="about" className="py-16 px-8">
            <div className="flex flex-col gap-6 max-w-2xl leading-relaxed">
                <p className="text-green-800 text-xl font-medium">
                    About
                </p>
                <div className="w-8 h-px bg-green-800 -mt-4" />
                <p className="px-4 text-gray-800">
                    友人に勧められたUdemyの講座でWebの基礎を学んだことがきっかけで、Web開発に興味を持ちました。
                    現在はNext.jsやRuby on Railsを学びながら、アプリ開発の幅を広げています。
                </p>
                <p className="px-4 text-gray-800">
                    情報工学科でネットワークやアルゴリズムなど幅広く学んでおり、講義外でも自発的に学習を続けています。
                </p>
                <p className="px-4 text-gray-800">
                    趣味はランニングと読書で、技術書のほかに興味の赴くままにいろんな本を読んでいます。
                </p>
            </div>
        </section>
    );
}