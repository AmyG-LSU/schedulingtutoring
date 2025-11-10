"use client";
import React from 'react';
import Dropdown from "@/components/Dropdown";
import SessionTab from "@/components/SessionTab"
import { useState } from "react";

const Home = () => {

    const [filters, setFilters] = useState({
        courses: [] as string[],
        subject: [] as string[],
        time: [] as string[],
        location: [] as string[],
    });

    return (

        <div className="flex justify-center-safe gap-20">
            <div className="flex justify-center-safe ml-50">
                <SessionTab filters={filters}/>
            </div>
            <div className="flex flex-col gap-10">
                <button onClick={() =>
                    setFilters({
                        courses: [] as string[],
                        subject: [] as string[],
                        time: [] as string[],
                        location: [] as string[],
                    })
                }
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition rounded-xl"
                >
                    Clear Filters
                </button>
                <Dropdown
                    Type="Subject"
                    option={[
                        "Math",
                        "Physics",
                        "Computer Science",
                        "Chemistry",
                        "English",
                        "Economics",
                        "Engineering",
                        "Communication",
                        "Business",
                        "Psychology",
                        "Art",
                        "Environmental Science",
                    ]}
                    onSelect={(selected) => setFilters((p) => ({ ...p, subject: selected }))}
                />
            <Dropdown Type="Courses" option={[
                "1001", "1126", "1253", "1350", "1440", "1550", "1552", "2000",
                "2001", "2025", "2030", "2060", "2070", "2085", "2261", "2733",
                "2740", "3201", "3302", "4360", "4402"
            ]
            } onSelect={(selected) => setFilters((p) => ({ ...p, courses: selected }))}/>
            <Dropdown Type="Time" option={["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"]
            } onSelect={(selected) => setFilters((p) => ({ ...p, time: selected }))}/>
            <Dropdown Type="Location" option={[
                "Patrick F. Taylor Hall",
                "Nicholson Hall",
                "CEBA",
                "Chemistry Building",
                "Business Education Complex",
                "Howe-Russell Hall",
                "Main Library",
                "Coates Hall",
                "Design Building",
                "Energy Coast Building"
            ]
            } onSelect={(selected) => setFilters((p) => ({ ...p, location: selected }))}/>

            </div>

        </div>

    );
};
export default Home;
