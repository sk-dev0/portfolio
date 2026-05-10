export default function Contact() {
    return (
        <section id="Contact" className="px-8 py-16">
            <div>
                <p className="text-green-800 text-xl font-medium">
                    Contact
                </p>
                <div className="w-8 h-px bg-green-800 mt-2" />

                <div className="flex flex-col gap-4">
                    <p className="px-4 mt-4 text-green-800 text-xl font-medium">
                        メールアドレス
                    </p>
                    <p className="px-4 text-gray-800">
                        shota.k01@au.com
                    </p>

                    <a href="https://github.com/sk-dev0" className="px-4 text-green-800 text-xl font-medium underline hover:text-green-600 transition-colors">
                        GitHub
                    </a>
                    <p className="px-4 text-gray-800">
                        https://github.com/sk-dev0
                    </p>
                </div>
            </div>
        </section>
    );
}