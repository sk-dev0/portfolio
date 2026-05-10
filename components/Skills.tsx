import Container from "./Container";
import SectionTitle from "./SectionTitle";

type Badge = {
    label: string;
}

const qualifications: Badge[] = [
    { label: "ITパスポート" },
    { label: "情報セキュリティマネジメント" },
    { label: "基本情報技術者" },
    { label: "応用情報技術者" },
    { label: "TOEIC Reading & Listening Test 915点" },
    { label: "AWS Certified Cloud Practitioner" },
];

const languages: Badge[] = [
    { label: "TypeScript" },
    { label: "JavaScript" },
    { label: "Python" },
    { label: "C言語" },
    { label: "JAVA" },
    { label: "Ruby" },
];

const frameworks: Badge[] = [
    { label: "Next.js" },
    { label: "React" },
    { label: "Node.js" },
    { label: "Express" },
    { label: "Ruby on Rails" },
];

type SkillRow = {
    label: string;
    items: Badge[];
};

const skillRows: SkillRow[] = [
    { label: "資格", items: qualifications },
    { label: "言語", items: languages },
    { label: "フレームワーク", items: frameworks },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-green-50">
    <Container>
        <SectionTitle title="skills" />

        <div className="py-2">
            {skillRows.map((row, index) => (
                <div
                    key={row.label}
                    className={`flex items-start gap-8 py-6 ${index !== skillRows.length - 1 ? "border-b border-green-200" : ""}`}
                >
                    <p className="text-green-800 text-base font-medium min-w-36">
                        {row.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {row.items.map((item) => (
                            <span
                                key={item.label}
                                className="px-4 py-1.5 text-sm ring-1 ring-green-800 text-green-800 rounded-full bg-white"
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Container>
</section>
    );
}