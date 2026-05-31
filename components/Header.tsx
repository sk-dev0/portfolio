"use client";

import { useState } from "react";

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: "About", href: "/#about" },
    { label: "History", href: "/#history" },
    { label: "Skills", href: "/#skills" },
    { label: "Works", href: "/#works" },
    { label: "Contact", href: "/#contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#0f3d24]">
            <div className="px-8 py-4 flex items-center justify-between">
                <span className="text-[#d4af37] tracking-wide text-sm font-medium">
                    Kihara Shota
                </span>

                {/* PC用ナビ：sm以上で表示 */}
                <nav className="hidden sm:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-white/70 text-sm hover:text-[#d4af37] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* スマホ用ハンバーガー：sm未満で表示 */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="sm:hidden flex flex-col gap-1.5 p-1"
                    aria-label="メニュー"
                    aria-expanded={open}
                >
                    <span className={`block w-6 h-0.5 bg-[#d4af37] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#d4af37] transition-opacity ${open ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-[#d4af37] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            {/* スマホ用ドロップダウン：開いたときだけ */}
            {open && (
                <nav className="sm:hidden border-t border-[#d4af37]/30 px-8 py-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-white/70 text-sm hover:text-[#d4af37] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}