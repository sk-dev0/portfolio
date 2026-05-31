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
    return (
        <header className="sticky top-0 z-50 bg-green-900 px-8 py-4 flex items-center justify-between">
            <span className="text-white tracking-widest text-sm font-medium">
                Kihara Shota
            </span>

            <nav className="flex gap-8">
                {navItems.map((item) => (
                <a
                    key={ item.href }
                    href={item.href}
                    className="text-green-200 text-sm hover:text-white transition-colors"
                >
                    {item.label}
                </a>
                ))}
            </nav>
        </header>
    );
};