import DashboardLayout from "@/layouts/DashboardLayout";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
    return (
        <DashboardLayout>
            <div className="fixed inset-0 flex flex-col items-center justify-center  mt-17 ml-20 z-50">
                <Loader2 className="w-14 h-14 animate-spin text-[#f7ad19]" />
            </div>
        </DashboardLayout>
    )
}