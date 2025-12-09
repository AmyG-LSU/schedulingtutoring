"use client";

import React, { useRef, useEffect, useState } from "react";


interface FilterSelectProps {
    label: string;
    options: string[];
    selected: string[];                        // ⭐ controlled from parent
    onChange: (selected: string[]) => void;
}

export default function FilterSelect({ label, options, selected, onChange }: FilterSelectProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);


    // Auto-close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleOption = (option: string) => {
        let updated;

        if (selected.includes(option)) {
            updated = selected.filter((o) => o !== option);
        } else {
            updated = [...selected, option];
        }

        onChange(updated); // send to parent
    };

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="bg-blue-400 text-white px-3 py-1 rounded shadow hover:bg-blue-600"
            >
                {label}
            </button>

            {open && (
                <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    {options.map((option) => {
                        const active = selected.includes(option);

                        return (
                            <button
                                key={option}
                                onClick={() => toggleOption(option)}
                                className={`block w-full text-left px-4 py-2 ${
                                    active
                                        ? "bg-blue-500 text-white font-semibold"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
