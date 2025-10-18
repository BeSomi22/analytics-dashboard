import { Bell } from "lucide-react";

const Navbar = () => {

    return (
        <header className=" fixed top-0 left-0 right-0 z-50 bg-[#053f5c]  text-white shadow p-4 flex justify-between items-center">
            {/* Left: Page Title / Search */}
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-white">Dashboard Overview</h2>

            </div>

            {/* Right: User Info / Notifications */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
                    <Bell size={20} className="text-[#f7ad19]" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
