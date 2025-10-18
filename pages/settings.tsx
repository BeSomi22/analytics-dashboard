import DashboardLayout from "@/layouts/DashboardLayout";
import { useState } from "react";

const Settings = () => {
    const [user, setUser] = useState({
        name: "Somia Bella",
        email: "somia@example.com",
        password: "",
        notifications: true,
    });

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
            <h1 className="text-2xl font-bold mb-6 text-gray-700">Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Settings */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700">Profile</h2>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="text-gray-500 text-sm">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="text-gray-500 text-sm">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="text-gray-500 text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700">Preferences</h2>
                    <div className="flex flex-col gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={user.notifications}
                                onChange={handleChange}
                                className="accent-[#429ebd]"
                            />
                            <span className="text-gray-500">Enable Notifications</span>
                        </label>
                        {/* Add more preferences here */}
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <button
                    onClick={handleSave}
                    className="bg-[#429ebd] text-white px-6 py-2 rounded hover:bg-[#053f5c] transition"
                >
                    Save Changes
                </button>
            </div>
        </DashboardLayout>
    );
};

export default Settings;
