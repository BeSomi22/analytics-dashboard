import Sidebar from '@/components/Sidebar';
import Navbar from "@/components/Navbar"


type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900">
            <Sidebar />
            <div className='flex flex-col flex-1'>
                <Navbar />
                <main className='p-6 overflow-y-auto min-h-screen mt-17 ml-15'>{children}</main>
                <footer className="bg-white shadow py-4 text-center ml-15 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
                </footer>
            </div>
        </div>
    )
}

export default DashboardLayout;