import Link from "next/link";

type ContentBlock =
    | { type: "image"; src: string }
    | { type: "video"; src: string }
    | { type: "text"; body: string };

type MainWorkDetail = {
    title: string;
    label: string;
    description: string;
    tags: string[];
    github?: string;
    liveUrl?: string;
    team?: string;
    points?: string;
    learnings?: string;
    issues?: string;
    content: ContentBlock[];
};

const works: Record<string, MainWorkDetail> = {
    "rethink": {
        title: "rethink",
        label: "チーム開発 / ハッカソン",
        description: "AIを用いて人間の議論をサポートするツール。参加者は議題に関してAIと個別にチャットを行い、そのユーザーの意見や根拠を抽出してエージェントを生成する。参加者の数だけ生成されたエージェントが議論を行い、妥協点やマインドマップを出力する。",
        tags: ["Node.js", "Express", "JavaScript"],
        github: "https://github.com/sk-dev0/rethink",
        team: `GDGoC Japan Hackathon 2026 にて4名のチームで開発した。
            議論ページを除く各画面（ルーム作成・ロビー・対話・対話終了待ち）の設計・実装を担当した。
            Express によるサーバ構築、対話パートと議論パートをつなぐデータ受け渡しの設計、Socket.IO を用いた複数タブでの同時進行機能の実装も行っている。
            （議論ロジック本体は他メンバーが担当している。）
            フォーク後は、アプリ全体のデザインを一貫性のあるものに統一する改修を個人で行った。`,
        points: `
            データベースには接続せずにメモリ上で動作するようにした。
            セッション管理はURLを用いることにし、招待用URLを作成することでゲストの参加が簡単に行えるようにした。
            対話部分に関してはユーザーの抽象的な解答に対しては具体的な体験を質問するなどして具体的な解答を得るようにした。
            またその深掘りによってもとの議題から大きくそれることがないように常に議題を意識したうえで質問するように指示を出した。
            ユーザーの意見を否定することは絶対にさせず、このような反対意見もあるがどう考えるか、とユーザーがほかの視点からも考えられるようディレクションするようにした。`,
        learnings: `チーム開発において、githubの使い方を学習した。特にブランチの操作のルールなどを取り決めておいたりプルリクエストを出したりは初めてのことであったため良い経験になった。
            特にチームで開発するならば誰がどのようなことができるのかを把握して、的確に指示を出す必要があるためそこが難しいと感じた。
            また全員が同時に同じように開発しているわけではなかったため、修正してほしい部分や、自身の作業のために必要な情報を教えてほしい時に相手からの返答が滞ると開発が進まないことがあると分かった。
            技術面では、googleのAPIを用いる方法について知ることができた。ここではVertexAIを用いている。
            またsocket.ioというライブラリを用いればサーバーと常時接続でき、複数のタブで同時に進行ができることが分かった。
            `,
        issues: `議論ロジックが複雑であり、1回の議論にかなりの時間を要する。
            議論の結果も量が多く、人間が全て確認しようとすると時間がかかる。もともとは人間が議論するための橋渡しとなるように妥協点などを出力する予定であったが、表示内容が肥大化してしまった。
            ユーザーが意図的に対話を放棄すれば中身の伴わないエージェントが生成されることになる。`,
        content: [
            { type: "text", body: "デモ動画1：（ルーム作成から対話パートまで）" },
            { type: "text", body: "socket.ioを用いて複数人が同時に進行できるようになっている。" },
            { type: "text", body: "このアプリでは2人から6人での議論を想定していて、1人のホストがルームを作成、議題の設定をし、ゲスト用のURLをコピーすることができる。ゲストはそのURLにアクセスすることでルームに入室できるようになる。" },
            { type: "text", body: "ホストが対話開始ボタンを押すと対話が開始される。" },
            { type: "video", src: "/works/rethink/session-dialog.mp4" },
            { type: "text", body: "デモ動画2：（対話パート）" },
            { type: "text", body: "ここでは議論参加者がAIと1対1で対話を行う。あらかじめ呈示された話題に対してどのような意見を持つか、その根拠や理由、その根拠を持つに至った原体験などを調査する。" },
            { type: "text", body: "AIは上のような情報をユーザーから聞き出すという指示をプロンプトとして与えており、AIが十分な情報が得られたと判断した場合に「インタビューを終了」と出力することで対話は終了する。" },
            { type: "text", body: "これによってユーザーの意見を反映したエージェントが作成される。" },
            { type: "video", src: "/works/rethink/dialog.mp4" },
            { type: "text", body: "デモ動画3：（対話パートから議論パートへ）" },
            { type: "text", body: "対話が終了すると待機ページに遷移する。ここでは全員の対話が終了するまで次に進むことができない。" },
            { type: "text", body: "全員の対話終了が確認されればホストが議論パートへ遷移するボタンが押せるようになる。" },
            { type: "text", body: "議論ページにおいて、ホストが議論開始ボタンを押すと作成されたエージェント同士が議論を開始する。この間はユーザーは何もすることができない。" },
            { type: "text", body: "議論はおおよそ10分から15分程度の時間を要している。" },
            { type: "video", src: "/works/rethink/dialog-debate.mp4" },
            { type: "text", body: "デモ動画4：（議論結果表示1）" },
            { type: "text", body: "議論が終了すると結果が表示される。この結果はホストもゲストも同じものが表示されるため、各ユーザーが自身のデバイスで確認ができる。この結果が出力された時点でこのサービスの基本動作は終了である。" },
            { type: "video", src: "/works/rethink/result1.mp4" },
            { type: "text", body: "デモ動画5：（議論結果表示2）" },
            { type: "text", body: "議論においてさまざまなロジックを用いている。その内容についてまとめたものが出力されており、目次から確認することができる。" },
            { type: "video", src: "/works/rethink/result2.mp4" },
        ],
    },
    "dish-cover": {
        title: "dish-cover",
        label: "個人開発",
        description: "レシピを検索・投稿・共有できる料理レシピ共有アプリ。ユーザー登録・ログインによりレシピの投稿やお気に入り登録ができ、レビューの投稿も可能。",
        tags: ["Next.js", "React", "TypeScript"],
        github: "https://github.com/sk-dev0/dish-cover",
        liveUrl: "https://dish-cover.sk-dev0.com/",
        points: `お気に入り機能を追加したことで、毎回検索をする必要をなくした。
            お気に入り順や高評価順などのソート方法を用意し、検索しやすいようにした。
            レシピ作成時に、後に編集する手間を減らすために同時にプレビューを見ながら作成できるようにした。
            レビュー欄がただの掲示板のようにならないように1つのレシピに対してユーザーは1回しかレビューできないようにした。`,
        learnings: `Next.jsとReactを用いたwebアプリの制作の流れが理解できた。
            tailwind.cssの基本的なクラスについて学習できた。
            resendを使って実際にパスワードをリセットすることができるようになった。そのためにドメインについて触れ、ある程度理解を深めることができた。`,
        issues: `画像を切り取って表示できるようにしたが、実際にレシピが追加された後に見ると少しずれて見える。
            画像は1枚しか掲載することができず、動画は投稿できない。
            レシピを作成するのが手間であるのか、知人にテストとして触ってもらったが、一件も追加はしてもらえていない。
            `,
        content: [
            { type: "text", body: "ホームページ(実際の動作はアプリにアクセスしてご確認ください。)" },
            { type: "image", src: "/works/dish-cover/home.jpeg" },
        ],
    },
    "mattari": {
        title: "まったり掲示板",
        label: "個人開発",
        description: "ユーザー登録制の匿名性掲示板アプリ。スレッドにタグをつけてカテゴリ分けができ、キーワードやタグで検索しながらさまざまな話題を語り合える。",
        tags: ["Node.js", "Express", "JavaScript"],
        github: "https://github.com/sk-dev0/forumApp",
        liveUrl: "https://mattari.sk-dev0.com/",
        points: `スレッドのタイトルを後から全く違うものに書き換えられないためにタイトルの編集は作成から5分のみ行えるようにした。
            完全に匿名化するか、ユーザー名を表示して個人情報まではいかない程度の匿名化を図るかを考え、完全な匿名化は荒れやすくなると考えて後者を採用した。
            軽量な掲示板を作成しようとしたが、CRUD操作の学習としてログイン状態でのみ作成や編集、削除を行えるようにした。`,
        learnings: `もともとはUdemyで学習した技術を用いて何かしらのアウトプットをすることが目的で作成した。
            したがってこのアプリの作成で新しいことはしていないが、bootstrapの読み込み、expressによるサーバの構築やルーティング制御、ejsを用いた表示、bcryptoを使ったパスワードのハッシュ化など、簡単なwebページを作成するにあたって必要な流れや基本的な知識について確認できた
            `,
        issues: `画像を掲載することができない。
            軽量な掲示板を目指してはいたが、ログインしないと書き込めない仕様が適切なのかどうか。`,
        content: [
            { type: "text", body: "ホームページ(実際の動作はアプリにアクセスしてご確認ください。)" },
            { type: "image", src: "/works/forumApp/home.jpeg" },
        ],
    },
};

export default async function MainWorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = works[slug];

    if (!work) {
        return <p>作品が見つかりません</p>;
    }

    const sections: { label: string; body?: string }[] = [
        { label: "工夫した点", body: work.points },
        { label: "学んだこと", body: work.learnings },
        { label: "問題点・課題", body: work.issues },
    ];

    return (
        <main className="max-w-2xl mx-auto">
            <div className="px-7 pt-8 pb-6">
                <p className="text-sm text-gray-500 tracking-widest mb-2">{work.label}</p>
                <h1 className="text-3xl text-green-900 font-medium mb-2">{work.title}</h1>
                <p className="text-sm text-gray-900 leading-relaxed">{work.description}</p>


                {(work.github || work.liveUrl) && (
                    <div className="flex gap-4 text-xl text-green-800 font-medium mt-3">
                        {work.liveUrl && (
                            <a href={work.liveUrl} className="hover:text-green-600 transition-colors">アプリを見る →</a>
                        )}
                        {work.github && (
                            <a href={work.github} className="hover:text-green-600 transition-colors">GitHub →</a>
                        )}
                    </div>
                )}
            </div>

            <div className="h-[3px] bg-gradient-to-r from-green-900 to-green-400" />

            <div className="px-7 py-7 flex flex-col gap-7">
                {work.content.length > 0 && (
                    <div className="flex flex-col gap-6">
                        {work.content.map((block, i) => {
                            if (block.type === "image") {
                                return <img key={i} src={block.src} alt="" className="w-full rounded-lg" />;
                            }
                            if (block.type === "video") {
                                return <video key={i} src={block.src} controls className="w-full rounded-lg" />;
                            }
                            return <p key={i} className="text-base font-medium text-gray-700 leading-relaxed">{block.body}</p>;
                        })}
                    </div>
                )}

                <hr className="border-gray-200" />

                <div>
                    <p className="text-base font-medium text-gray-900 tracking-wide mb-2">使用技術</p>
                    <div className="flex flex-wrap gap-1.5">
                        {work.tags.map((tag) => (
                            <span key={tag} className="text-base px-2.5 py-0.5 rounded-full ring-1 ring-green-700 text-green-800 bg-green-50">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {work.team && (
                    <>
                        <hr className="border-gray-200" />
                        <div>
                            <p className="text-base font-medium text-gray-900 tracking-wide mb-2">チーム開発</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {work.team.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {i > 0 && <br />}
                                        {line}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </>
                )}

                {sections.some((s) => s.body) && <hr className="border-gray-200" />}

                {sections.map((s) =>
                    s.body ? (
                        <div key={s.label}>
                            <p className="text-base font-medium text-gray-900 tracking-wide mb-2">{s.label}</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {s.body.split("\n").map((line, i) => (
                                    <span key={i}>
                                        {i > 0 && <br />}
                                        {line}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ) : null
                )}

                <hr className="border-gray-200" />

                <Link href="/#works" className="text-xl text-green-800 font-medium hover:text-green-600 transition-colors">
                    ← Worksに戻る
                </Link>
            </div>
        </main>
    );
}