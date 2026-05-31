import Container from "./Container";
import SectionTitle from "./SectionTitle";

type HistoryItem = {
    year: string;
    month: string;
    title: string;
    description?: string;
}

const historyItems: HistoryItem[] = [
    { year: "2024", month: "04", title: "慶応義塾大学理工学部に入学" },
    { year: "2024", month: "12", title: "ITパスポート試験合格", description: "自主学習の足掛かりとして学習を開始した" },
    { year: "2025", month: "03", title: "基本情報技術者試験合格" },
    { year: "2025", month: "03", title: "情報セキュリティマネジメント試験合格" },
    { year: "2025", month: "04", title: "情報工学科に進学" },
    { year: "2025", month: "08", title: "AWS Certified Cloud Practitioner取得" },
    { year: "2025", month: "09", title: "Udemyを用いたプログラミング学習の開始", description: "友人に勧められたWebの講座をきっかけに独学を始める" },
    { year: "2025", month: "10", title: "TOEIC 915点取得" },
    { year: "2025", month: "12", title: "応用情報技術者試験合格" },
    { year: "2026", month: "03", title: "ハッカソンに参加", description: "チームでAIを活用したWebアプリを開発" },
];

export default function History() {
    return (
        <section id="history" className="py-16 bg-[#e6efe8]">
            <Container>
                <SectionTitle title="History" onTint/>
                <div className="relative">
                    <div className="absolute left-24 top-0 bottom-0 w-px bg-green-200" />
                    <div className="flex flex-col gap-8">
                        {historyItems.map((item, index) => (
                            <div key={index} className="flex gap-8 items-start">
                                <div className="w-24 flex-shrink-0 text-right">
                                    <p className="text-xs text-green-800 font-medium">{item.year}</p>
                                    <p className="text-xs text-green-600">{item.month}月</p>
                                </div>
                                <div className="relative flex-shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-green-800 mt-1 relative z-10" />
                                </div>
                                <div className="flex flex-col gap-1 pb-2">
                                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                                    {item.description && (
                                        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}