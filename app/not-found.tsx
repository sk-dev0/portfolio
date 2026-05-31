import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#14532d] px-6 py-20">
            <div className="border border-[#d4af37]/55 px-12 py-16 text-center max-w-md w-full">
                <p className="text-xs text-[#d4af37] tracking-widest">404 NOT FOUND</p>
                <p className="text-5xl font-bold text-white mt-4">ページが見つかりません</p>
                <div className="w-10 h-px bg-[#d4af37] mx-auto my-6" />
                <p className="text-sm text-white/80 leading-relaxed">
                    お探しのページは存在しないか、移動した可能性があります。
                </p>
                <Link
                    href="/"
                    className="inline-block mt-8 text-sm text-[#d4af37] border border-[#d4af37]/55 px-6 py-2 rounded-full transition-colors hover:bg-[#d4af37] hover:text-[#14532d]"
                >
                    ホームに戻る
                </Link>
            </div>
        </main>
    );
}