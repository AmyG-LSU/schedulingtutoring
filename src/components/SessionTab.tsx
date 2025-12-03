"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Session } from "@/data/sessions"; // adjust if needed

interface SessionTabProps {
    sessions: Session[];   // ⭐ the sessions YOU pass in
    filters: {
        courses: string[];
        subject: string[];
        time: string[];
        location: string[];
    };
}

export default function SessionTab({ sessions, filters }: SessionTabProps) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const { courses, subject, time, location } = filters;

    // ⭐ Apply filters to *the passed-in session list*
    const filteredSessions = sessions.filter((session) => {
        const courseMatch =
            courses.length === 0 ||
            courses.some((c) =>
                session.course.toUpperCase().includes(c.toUpperCase())
            );

        const subjectMatch =
            subject.length === 0 ||
            subject.some((s) =>
                session.subject.toUpperCase().includes(s.toUpperCase())
            );

        const timeMatch =
            time.length === 0 ||
            time.some(
                (t) =>
                    session.startTime.toUpperCase().includes(t.toUpperCase()) ||
                    session.endTime.toUpperCase().includes(t.toUpperCase())
            );

        const locationMatch =
            location.length === 0 ||
            location.some((l) =>
                session.location.toUpperCase().includes(l.toUpperCase())
            );

        return courseMatch && subjectMatch && timeMatch && locationMatch;
    });

    return (
        <div className="overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredSessions.length > 0 ? (
                filteredSessions.map((session) => {
                    const isExpanded = expandedId === session.id;
                    return (
                        <div
                            key={session.id}
                            className="bg-amber-100 border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer p-6"
                            onClick={() => setExpandedId(isExpanded ? null : session.id)}
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center px-5 py-4">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {session.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {session.tutor} · {session.weekDay} {session.startTime} ·{" "}
                                        {session.location}
                                    </p>
                                </div>
                                {isExpanded ? (
                                    <ChevronUp className="text-gray-400" />
                                ) : (
                                    <ChevronDown className="text-gray-400" />
                                )}
                            </div>

                            {/* Expanded Section */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    isExpanded ? "max-h-40 p-4" : "max-h-0 p-0"
                                }`}
                            >
                                <div className="flex flex-wrap justify-center gap-2 mb-3">
                                    {session.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 text-blue-700 text-sm font-semibold px-2 py-1 rounded-full"
                                        >
                                        {tag}
                                    </span>
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm text-center">
                                    {session.description}
                                </p>

                                <div className="flex justify-center gap-4 mt-3">
                                    <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 shadow-sm">
                                        Favorite
                                    </button>
                                    <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 shadow-sm">
                                        Schedule
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="text-center text-gray-500">No sessions match your filters.</p>
            )}
        </div>
    );

}
