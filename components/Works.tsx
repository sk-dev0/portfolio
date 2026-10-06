import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

export default function Works() {
    return (
        <section id="works" className="py-16 px-8 bg-[#e6efe8]">
            <Container>
                <div>
                    <SectionTitle title="Works" onTint/>
                </div>

                <div className="flex flex-col gap-6">
                    <WorkCard
                        slug="rethink"
                        title="rethink"
                        description="ハッカソンにてチームで開発した。AIを用いて人間の議論をサポートするツール。参加者は議題に関してAIと個別でチャットを行い、そのユーザーの意見やその根拠を抽出してエージェントを作成する。参加者の数だけ生成されたエージェントたちが議論を行い、妥協点やマインドマップを出力する。"
                        tags={["Node.js", "Express", "JavaScript"]}
                        isTeam={true}
                    />
                    <WorkCard
                        slug="wake-app"
                        title="wake-app"
                        description="物理的制約を伴い起きられるようにする目覚ましアプリ。設定した時刻になるとアラームが鳴り、あらかじめ用意していたQRコードのうち指定されたものを読み込み、その後数学の問題を2問解くまでアラームが止まらない。心身ともに目が覚める手伝いをするアプリである。"
                        tags={["React Native（Expo）", "TypeScript"]}
                        isTeam={false}
                    />
                    <WorkCard
                        slug="dish-cover"
                        title="dish-cover"
                        description="レシピを検索したり投稿したりできるアプリ。ユーザー登録をしてログインをすることによってレシピの投稿ができ、お気に入り機能が使える。これによりユーザーは気に入ったレシピを再度検索することなく見つけることができる。またレシピに対するレビューも書けるようになっている。"
                        tags={["Next.js", "React", "TypeScript"]}
                        isTeam={false}
                    />
                    <WorkCard
                        slug="mattari"
                        title="まったり掲示板"
                        description="ユーザーが好きなことを投稿できる掲示板アプリ。各スレッドにはタグが付けられており、関連する内容のスレッドを探すことができる。"
                        tags={["Node.js", "Express", "JavaScript"]}
                        isTeam={false}
                    />
                </div>
            </Container>
        </section>
    );
}