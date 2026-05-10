import WorkCard from "./WorkCard";

export default function Works() {
    return (
        <section id="works" className="py-16 px-8">
            <div>
                <p className="text-green-800 text-xl font-medium">
                    Works
                </p>
                <div className="w-8 h-px bg-green-800 mt-2" />
            </div>

            <WorkCard 
                title="rethink"
                description="ハッカソンにてチームで開発した。AIを用いて人間の議論をサポートするツール。参加者は議題に関してAIと個別でチャットを行い、そのユーザーの意見やその根拠を抽出してエージェントを作成する。参加者の数だけ生成されたエージェントたちが議論を行い、妥協点やマインドマップを出力する。"
                tags={["Node.js", "Express", "Javascript"]}
                github="example/github"
                image="/example.jpeg"
                isTeam={true}
            />
            <WorkCard 
                title="dish-cover"
                description="レシピを検索したり投稿したりできるアプリ。ユーザー登録をしてログインをすることによってレシピの投稿ができ、お気に入り機能が使える。これによりユーザーは気に入ったレシピを再度検索することなく見つけることができる。またレシピに対するレビューも書けるようになっている。"
                tags={["Next.js", "React", "Typescript"]}
                github="example/github"
                image="/example.jpeg"
                isTeam={false}
            />
            <WorkCard 
                title="まったり掲示板"
                description="ユーザーが好きなことを投稿できる掲示板アプリ。各スレッドにはタグが付けられており、関連する内容のスレッドを探すことができる。"
                tags={["Node.js", "Express", "Javascript"]}
                github="example/github"
                image="/example.jpeg"
                isTeam={false}
            />
        </section>
    );
}