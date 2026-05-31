import Container from "./Container";
import OtherWorkCard from "./OtherWorkCard";

export default function Works() {
    return (
        <section id="works" className="py-16 px-8 bg-[#e6efe8]">
            <Container>
                <div>
                    <p className="text-sm text-green-800 font-medium mb-4">その他の制作物</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <OtherWorkCard
                        title="トイレットペーパー自動巻き出し装置"
                        description="RasberryPiとセンサーをPythonで制御して作成したトイレットペーパーを自動でちょうどいい長さまで引き出してくれる装置"
                        tags={["Python"]}
                        href="/works/toilet-paper"
                        category="講義"
                    />
                    <OtherWorkCard
                        title="raylibミニゲーム"
                        description="raylibを用いて作成したミニゲーム。矢印キーとスペースキーで操作し、障害物をよけながらゴールを目指す"
                        tags={["C言語"]}
                        href="/works/raylib-game"
                        category="講義"
                    />
                    <OtherWorkCard
                        title="数字認識モデル"
                        description="Neural Network Consoleというソフトウェアを用いて学習を行いモデルを作成し、spresenseというハードに映して数字をカメラに移し、その数字の認識を行う"
                        tags={[]}
                        href="/works/digit-recognition"
                        category="講義"
                    />
                    <OtherWorkCard
                        title="カラオケ喉締まりセンサー"
                        description="圧力センサーとArduinoを用いて首元の筋肉の動きを圧力として検知することで喉が締まっているかどうかをリアルタイムで通知する。"
                        tags={["node.js", "express"]}
                        href="/works/karaoke-sensor"
                        category="講義"
                    />
                </div>
            </Container>
        </section>
    );
}