"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Session } from "@/data/sessions";
import PopUpCard from "@/components/PopUpCard";

interface SessionTabProps {
    sessions: Session[];
    filters: {
        courses: string[];
        subject: string[];
        time: string[];
        location: string[];
    };
}

export default function SessionTab({ sessions, filters }: SessionTabProps) {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [activePopup, setActivePopup] = useState<string | null>(null);
    const openFavoritePopup = () => setActivePopup("favorite");
    const openSchedulePopup = () => setActivePopup("schedule");

    const closePopup = () => setActivePopup(null);
    const [selectedSession, setSelectedSession] = useState<Session | null>(null);

    const { courses, subject, time, location } = filters;

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
        <>
            <div className="overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {filteredSessions.length > 0 ? (
                    filteredSessions.map((session) => {
                        const isExpanded = expandedId === session.id;

                        return (
                            <div
                                key={session.id}
                                className="bg-amber-100 border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer p-6 self-start"
                                onClick={() =>
                                    setExpandedId(isExpanded ? null : session.id)
                                }
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center px-5 py-4">
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800">
                                            {session.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {session.tutor} · {session.weekDay}{" "}
                                            {session.startTime} ·{" "}
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

                                    {/* Buttons */}
                                    <div className="flex justify-center gap-4 mt-3">
                                        <button
                                            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 shadow-sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedSession(session);// prevent collapsing
                                                openFavoritePopup();
                                            }}
                                        >
                                            Favorite
                                        </button>

                                        <button
                                            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 shadow-sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedSession(session);
                                                openSchedulePopup();
                                            }}
                                        >
                                            Schedule
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500">
                        No sessions match your filters.
                    </p>
                )}
            </div>

            {/* POPUP PORTAL */}
            <PopUpCard isOpen={activePopup === "favorite"} onClose={closePopup}>
                <h2 className="text-xl font-semibold mb-3 text-center">Added to favorites!</h2>
                {selectedSession ? (
                    <p className="text-gray-600 text-center">
                        You have added the tutor, {selectedSession.tutor}, and session, {selectedSession.name}, to your favorites.
                    </p>
                ):(
                    <p className="text-gray-600 text-center">
                        NO session jERRRROR
                    </p>
                )}
            </PopUpCard>

            <PopUpCard isOpen={activePopup === "schedule"} onClose={closePopup}>
                <h2 className="text-xl font-semibold mb-3 text-center">Session Scheduled</h2>
                {selectedSession ? (
                    <p className="text-gray-600 text-center">
                        You have scheduled with {selectedSession.tutor} to cover {selectedSession.name}
                    </p>
                ):(
                    <p className="text-gray-600 text-center">
                        NO session jERRRROR
                    </p>
                )}

            </PopUpCard>

        </>
    );
}
