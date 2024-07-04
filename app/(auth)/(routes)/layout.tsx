
import { Logo } from "@/components/Logo";
import React from "react";

export default function LayoutAuth ({children}:{children:React.ReactNode}){
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <Logo />
            <h1 className="text-3xl my-2">Welcome to Viralify Dashboard</h1>
            <h2>Find our clients and projects</h2>
            {children}
        </div>

    )
}