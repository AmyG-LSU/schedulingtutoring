"use client";

import React, { useState } from "react";
import FilterSelect from "@/components/FilterSelect";
import SessionTab from "@/components/SessionTab";
import { profileSessions } from "@/data/profilesData";
import { sessions } from "@/data/sessions";

const Home = () => {
    // dropdown options from their schedule
    const userCourses = profileSessions.courseNums;
    const userSubjects = profileSessions.subjects;

    // session prefiltered for all courses and subjects they are in
    const filteredCourses = sessions.filter((s) =>
        userCourses.includes(s.course)
    );

    const filteredSubjects = sessions.filter((s) =>
        userSubjects.includes(s.subject)
    );

    // combine & remove duplicates
    const combinedSessions = [
        ...filteredCourses,
        ...filteredSubjects,
    ].filter(
        (session, index, self) =>
            self.findIndex((s) => s.id === session.id) === index
    );

    const locations = [... new Set(sessions.map(s => s.location))];
    const tags = [... new Set(sessions.flatMap(s => s.tags))];
    const [filters, setFilters] = useState({
        courses: [],
        subject: [],
        time: [],
        location: [],
    });

    return (
        <div className="mt-9 p-6 space-y-3">

            {/* Pass filters into SessionTab */}
            <div className="font-semibold ml-6 text-4xl text-gray-800 flex justify-center-safe">
                Tutor Offerings At {profileSessions.school}
            </div>
            <div className=" flex gap-4 mt-5 justify-center-safe">

                <FilterSelect
                    label="Filter by Subject"
                    options={["Math", "Physics", "Chemistry", "English", "Computer Science"]}
                    selected={filters.subject}                             
                    onChange={(selectedSubjects) =>
                        setFilters((prev) => ({...prev, subject: selectedSubjects}))
                    }
                />

                <FilterSelect
                    label="Filter by Course"
                    options={["1550", "2001", "4402", "2070"]}
                    selected={filters.courses}                              
                    onChange={(selectedCourses) =>
                        setFilters((prev) => ({...prev, courses: selectedCourses}))
                    }
                />

                <FilterSelect
                    label="Filter by Day"
                    options={["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"]}
                    selected={filters.time}                              
                    onChange={(selectedCourses) =>
                        setFilters((prev) => ({...prev, courses: selectedCourses}))
                    }
                />
                <FilterSelect
                    label="Filter by Location"
                    options={locations}
                    selected={filters.location}
                    onChange={(selectedCourses) =>
                        setFilters((prev) => ({...prev, courses: selectedCourses}))
                    }
                />
                <FilterSelect
                    label="Filter by Tags"
                    options={tags}
                    selected={filters.tag}
                    onChange={(selectedCourses) =>
                        setFilters((prev) => ({...prev, courses: selectedCourses}))
                    }
                />
                <button
                    onClick={() =>
                        setFilters({
                            courses: [],
                            subject: [],
                            time: [],
                            location: [],
                        })
                    }
                    className="bg-amber-700 text-white px-3 py-1 rounded shadow hover:bg-amber-600"
                >
                    Clear Filters
                </button>
            </div>


            <SessionTab sessions={combinedSessions} filters={filters} />

        </div>
    );
};

export default Home;

