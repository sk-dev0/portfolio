import Link from "next/link";

type ContentBlock =
    | { type: "image"; src: string }
    | { type: "video"; src: string }
    | { type: "text"; body: string };

type WorkDetail = {
    title: string;
    label: string;
    description: string;
    tags: string[];
    points: string;
    learnings: string;
    issues: string,
    content: ContentBlock[];
}

const works: Record<string, WorkDetail> = {
    "toilet-paper": {
        title: "トイレットペーパー自動巻き出し装置",
        label: "講義制作",
        description: "RaspberryPiとセンサーをPythonで制御して作成したトイレットペーパーを自動でちょうどいい長さまで引き出してくれる装置",
        tags: ["Python"],
        points: `超音波センサー(HY-SRF05)を用いて距離を測定し、30cm以上を検出すれば、モーター(FS90R)を回転する。30cm以下を検出すればモーターは停止する。
            (トイレットペーパーが出てきていれば、センサーからの距離が30cmに収まる。)
            
            トイレットペーパーを回すためにその芯を自作し、自作した芯にモーターを取り付けることで回転をできるようにした。
            この際にモーターのトルクが問題になり、固定が弱いとモーターが空回りしてしまったため、針金できつく固定することで空回りを防止した。`,
        learnings: `GPIOピンの制御を通じてハードウェアとソフトウェアの連携の仕組みを理解した。
            センサーの値を使ってどのように現実にフィードバックを行うかの一例を理解した。
            `,
        issues: `配線などにセンサーが反応してペーパーが巻かれすぎることがある。
            手でペーパーをちぎる際にもセンサーが反応し、手でちぎる際中にペーパーが巻かれてしまう。
            電源供給や配線が必要で実際にトイレに置くことが難しい。
            新しいぺーパーの取り換えができるようにはしたものの、既存のものよりはるかに面倒である。`,
        content: [
            { type: "text", body: "デモ動画" },
            { type: "video", src: "/works/toilet-paper/toilet-paper-demo.mp4" },
            { type: "text", body: "ブレッドボードで作成した回路図" },
            { type: "image", src: "/works/toilet-paper/toilet-paper-circuit.JPG" },
        ],
    },
    "raylib-game": {
        title: "raylibミニゲーム",
        label: "講義制作",
        description: "raylibを用いて作成したミニゲーム。矢印キーとスペースキーで操作し、障害物をよけながらゴールを目指す",
        tags: ["C言語"],
        points: `通常のステージ攻略ゲームの要素に加えて重力を反転できる操作を追加した。
            ユーザーは好きなタイミングで重力を反転させてステージを進むことができる。
            これによってステージのクリア方法が様々に生まれることを期待した。

            また、C言語ではあるがオブジェクト指向に倣ってある程度機能ごとに責務を分離することにした。
            `,
        learnings: `raylibというライブラリでグラフィックを伴ったミニゲームが作成できる。
            壁や床をすり抜けないためには毎フレーム当たり判定を計算する必要がある。
            構造体や列挙体を用いて状態管理を行うとコードが書きやすく便利だった。`,
        issues: `講義課題であるため作成時間が十分に確保できず保守性の低いコードとなっている。
            具体的にはグローバル変数を局所的に用いたり、一つの関数に膨大な量の仕事を任せたり、マジックナンバーを多用していたりである。
            また敵がいないと当たり判定ロジックが回らなかったり、うまく着地ができないことがあったりもする。
            堅牢で正しく動くゲームを開発するとなると問題になる点であると考えた。
            加えて単純にステージ数が5つと少なく、ユーザーが満足できる体験を提供するにはさらなるステージやギミックの追加が必要と考える。`,
        content: [
            { type: "text", body: "デモ動画" },
            { type: "video", src: "/works/raylib/demo1.mp4" },
            { type: "text", body: "デモ動画(最終ステージ)" },
            { type: "video", src: "/works/raylib/demo2.mp4" },
        ],
    },
    "digit-recognition": {
        title: "数字認識モデル",
        label: "講義制作",
        description: "Neural Network Consoleというソフトウェアを用いて機械学習を行いモデルを作成し、spresenseというハードのカメラに映して数字の認識を行う",
        tags: [],
        points: `畳み込み層とプーリング層をいくつか追加し、過学習を防止するためにバッチ正規化やドロップアウトを導入した。
            ネットワークを工夫してパラメータ数を増加させすぎないようにした。
            クリップサイズ内での位置ずれを起こした画像や光によって欠損を起こした文字の画像をデータセットに追加することで実環境での認識性能を高めた。`,
        learnings: `計算リソースの限られたハードの場合、モデルが大きすぎると動作しなくなる。
            数値上で得られる精度と実環境における認識性能は異なる。
            データセットが実際の認識において大きく影響しうる。`,
        issues: `モデルが少し大きくなり、カメラがカクついてしまう。
            数字1文字しか認識することができない。
            粗雑な文字を認識するのが難しい。`,
        content: [
            { type: "text", body: "使用したspresenseというハードウェア" },
            { type: "image", src: "/works/edgeAI/spresense.PNG" },
            { type: "text", body: "デモ画像" },
            { type: "image", src: "/works/edgeAI/edgeAI-standard.PNG" },
            { type: "text", body: "位置ずれを起こした文字認識(モデル改良前)" },
            { type: "image", src: "/works/edgeAI/edgeAI-shift-NG.PNG" },
            { type: "text", body: "モデル改良後" },
            { type: "image", src: "/works/edgeAI/edgeAI-shift.PNG" },
            { type: "text", body: "欠損を起こした文字認識(モデル改良前)" },
            { type: "image", src: "/works/edgeAI/edgeAI-light-NG.PNG" },
            { type: "text", body: "モデル改良前" },
            { type: "image", src: "/works/edgeAI/edgeAI-light.PNG" },
        ],
    },
    "karaoke-sensor": {
        title: "喉締まり検知システム",
        label: "講義制作",
        description: "カラオケにおいて喉が締まっているかどうかをリアルタイムで通知する。",
        tags: ["node.js", "express"],
        points: `Arduinoに送られてくるセンサーの値をnode.jsで受けとり、WebSocketでブラウザに送信する。
            歌っている最中にフィードバックするため、リアルタイムに表示できるようにした。`,
        learnings: `計測する内容に対して適切なセンサーを選択する必要がある。
            センシングを行う位置によって結果が大きく変わるため、どのようにセンサーを用いるのかを事前に考えておく必要がある。
            センサーによって普段感覚でとらえているものが視覚化できる。`,
        issues: `圧力センサーを手で固定したためノイズが生じる可能性がある。
            喉が締まっているかの閾値は私個人で設定しているが、これは人によって異なる。
            そもそも筋肉の動きで計測するのは医学的に正しいのか分からない。
            リアルタイムでフィードバックされてもユーザーはすぐに対応できるようになるわけではない。`,
        content: [
            { type: "text", body: "圧力センサー使用の様子" },
            { type: "image", src: "/works/RS/how-to-use.png" },
            { type: "text", body: "デモ動画" },
            { type: "video", src: "/works/RS/demo.mp4" },
        ],
    },
};

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = works[slug];

    if (!work) {
        return <p>作品が見つかりません</p>;
    }

    return (
        <main className="max-w-2xl mx-auto">
            <div className="px-7 pt-8 pb-6">
                <p className="text-sm text-gray-500 tracking-widest mb-2">{work.label}</p>
                <h1 className="text-3xl text-green-900 font-medium mb-2">{work.title}</h1>
                <p className="text-sm text-gray-900 leading-relaxed">{work.description}</p>
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

                <hr className="border-gray-200" />

                <div>
                    <p className="text-base font-medium text-gray-900 tracking-wide mb-2">工夫した点</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {(work.points || "（後で記載）").split("\n").map((line, i) => (
                            <span key={i}>
                                {i > 0 && <br />}
                                {line}
                            </span>
                        ))}
                    </p>
                </div>

                <div>
                    <p className="text-base font-medium text-gray-900 tracking-wide mb-2">学んだこと</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {(work.learnings || "（後で記載）").split("\n").map((line, i) => (
                            <span key={i}>
                                {i > 0 && <br />}
                                {line}
                            </span>
                        ))}
                    </p>
                </div>

                <div>
                    <p className="text-base font-medium text-gray-900 tracking-wide mb-2">問題点・課題</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {(work.issues || "（後で記載）").split("\n").map((line, i) => (
                            <span key={i}>
                                {i > 0 && <br />}
                                {line}
                            </span>
                        ))}
                    </p>
                </div>


                <hr className="border-gray-200" />

                <Link href="/#works" className="text-xl text-green-800 font-medium hover:text-green-600 transition-colors">
                    ← Worksに戻る
                </Link>
            </div>
        </main >
    )
}