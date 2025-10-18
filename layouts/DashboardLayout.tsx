import Sidebar from '@/components/Sidebar';
import Navbar from "@/components/Navbar"


type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex h-screen bg-gray-50 text-gray-900">
            <Sidebar />
            <div className='flex flex-col flex-1'>
                <Navbar />
                <main className='p-6 overflow-y-auto min-h-screen mt-20 ml-20'>{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout;