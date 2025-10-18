import Link from "next/link";
import { useRouter } from "next/router";
import { Home, BarChart2, Settings, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    const { pathname } = useRouter();
    const [collapsed, setCollapsed] = useState(true);

    const links = [
        { href: "/", label: "Dashboard", icon: Home },
        { href: "/reports", label: "Reports", icon: BarChart2 },
        { href: "/settings", label: "Settings", icon: Settings },
    ];

    return (
        <aside
            className={`${collapsed ? "w-15" : "w-64"
                }  fixed top-0 left-0  z-50 bg-[#053f5c] text-[#429ebd] min-h-full flex flex-col transition-all duration-300`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {!collapsed && <h1 className="text-2xl font-bold">AnalyticsPro</h1>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 hover:bg-gray-800 rounded-md"
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col mt-4 gap-1">
                {links.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}

                            className={`flex items-center gap-3 p-3 rounded-lg mx-2 transition-colors ${isActive ? "bg-[#429ebd] text-white" : "hover:bg-[#429ebd]/20"
                                }`}


                        >
                            <Icon size={20} />
                            {!collapsed && <span className="font-medium">{label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Profile */}
            {!collapsed && (
                <div className="p-4 border-t border-gray-700 mt-auto flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-full" />
                    <div>
                        <p className="text-sm font-medium">Somia Bella</p>
                        <p className="text-xs text-gray-400">Admin</p>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
