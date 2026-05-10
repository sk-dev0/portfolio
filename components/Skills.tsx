import { Chocolate_Classical_Sans } from "next/font/google";

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
]

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-8">
            <div className="flex flex-col gap-8 max-w-2xl">
                <div>
                    <p className="text-green-800 text-xl font-medium">
                        Skills
                    </p>
                    <div className="w-8 h-px bg-green-800 mt-2" />
                </div>
                
                
                <div className="flex flex-col gap-4">
                    <p className="px-4 text-green-800 text-xl font-medium">
                        資格
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {qualifications.map((item) => (
                            <span
                                key={item.label}
                                className="px-4 py-1 text-sm ring-1 ring-green-800 text-green-800 rounded-full"
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="px-4 text-green-800 text-xl font-medium">
                        扱ったことのある言語
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((item) => (
                            <span
                                key={item.label}
                                className="px-4 py-1 text-sm ring-1 ring-green-800 text-green-800 rounded-full"
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="px-4 text-green-800 text-xl font-medium">
                        扱ったことのあるフレームワーク
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {frameworks.map((item) => (
                            <span
                                key={item.label}
                                className="px-4 py-1 text-sm ring-1 ring-green-800 text-green-800 rounded-full"
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}