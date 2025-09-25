"use client";

import Link from "next/link";

const links =[
    {href: "/", label: "HOME"},
    {href: "/about", label: "ABOUT"},
    {href: "/contact", label: "CONTACT US"}
];
export default function Navbar(){
    return(
        <nav className={"h-10 md:h-full w-full mx-auto bg-gray-300 flex items-center justify-between px-6"}>
            <h1 style={{
                justifyContent:"center",
                alignItems: "center",
                font:"fira_San"}}>
                STUDENT TUTORS
            </h1>
            <ul className={"flex gap-5"}>
                <> {links.map( link=> (
                    <Link href={link.href} key={link.href}>
                        {link.label}
                    </Link>
                ))}</>
            </ul>


        </nav>);
}