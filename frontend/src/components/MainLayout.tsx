"use client";
import { type ReactNode } from "react";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="pt-2 min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;