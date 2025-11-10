"use client";

import { useState } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
    children?: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    const [expanded, setExpanded] = useState(true);

    if (!expanded) {
        // Show only the floating toggle button when collapsed
        return (
            <button
                onClick={() => setExpanded(true)}
                className="fixed top-22 left-4 z-50 p-2 rounded-lg bg-white shadow-md hover:bg-gray-200 w-15 h-16"
            >
                <Image src="/daily-schedule-icon.png" alt="profile" width={0}height={0} sizes="100vw" className="h-3/4 w-auto object-contain"/>
            </button>
        );
    }

    return (
        <aside className="fixed top-20 left-0 h-screen w-80 bg-white border-r shadow-sm flex flex-col z-40 transition-all duration-300">
            <div className="p-4 pb-2 flex justify-between items-center">
                <p></p>
                <button
                    onClick={() => setExpanded(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-200"
                >
                    <ChevronFirst />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">{children}</div>
        </aside>
    );
}
