import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";

const Settings = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        name: "Somia Bella",
        email: "somia@example.com",
        password: "",
        notifications: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <LoadingScreen />;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = () => {
        // API call to save settings
        console.log("Settings saved", user);
    };

    return (
        <DashboardLayout>
            <div className="min-h-screen  flex flex-col gap-8">
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Profile Settings */}
                    <motion.div initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-6 text-gray-700">Profile</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label className="text-gray-500 text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#429ebd]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-500 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#429ebd]"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-500 text-sm mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#429ebd]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Preferences */}
                    <motion.div initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-6 text-gray-700">Preferences</h2>
                        <div className="flex flex-col gap-4">
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="notifications"
                                    checked={user.notifications}
                                    onChange={handleChange}
                                    className="accent-[#429ebd] w-5 h-5"
                                />
                                <span className="text-gray-600">Enable Notifications</span>
                            </label>
                            {/* Add more preferences here */}
                        </div>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} className="mt-4">
                    <button
                        onClick={handleSave}
                        className="bg-[#429ebd] text-white px-6 py-3 rounded-lg hover:bg-[#053f5c] transition-all duration-300 font-semibold"
                    >
                        Save Changes
                    </button>
                </motion.div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;
