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
        tags: string[];   // ⭐ ADD THIS
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
            time.some((t) =>
                session.weekDay.toUpperCase().includes(t.toUpperCase())
            );


        const locationMatch =
            location.length === 0 ||
            location.some((l) =>
                session.location.toUpperCase().includes(l.toUpperCase())
            );
        const tagMatch =
            filters.tags.length === 0 ||
            filters.tags.some((tag) => session.tags.includes(tag));

        return (
            courseMatch &&
            subjectMatch &&
            timeMatch &&
            locationMatch &&
            tagMatch
        );


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
                                className="bg-blue-100 border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer p-6 self-start"
                                onClick={() =>
                                    setExpandedId(isExpanded ? null : session.id)
                                }
                            >
                                <div className="flex justify-between items-center px-5 py-4">
                                    <div>
                                        {/* SESSION NAME STAYS HERE */}
                                        <h3 className="font-semibold text-lg text-gray-800">
                                            {session.name}
                                        </h3>

                                        {/* Remove tutor name from the header */}
                                        <p className="text-sm text-gray-500">
                                            {session.course} {session.subject} · {session.location}
                                        </p>

                                        {/* TAGS NOW IN COMPACT VIEW */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {session.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-blue-300 text-white text-xs font-semibold px-2 py-1 rounded-full"
                                                >
                                            {tag}
                                        </span>
                                                                    ))}
                                                                </div>
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
                                        isExpanded ? "max-h-[500px] p-4" : "max-h-0 p-0"
                                    }`}
                                >
                                    {/* TUTOR NAME NOW MOVED HERE */}
                                    <h3 className="font-semibold text-lg text-center text-gray-800 mb-2">
                                        Tutor: {session.tutor}
                                    </h3>

                                    {/* TIME FIRST */}
                                    <p className="text-gray-600 text-sm text-center">
        <span className="font-semibold">
            Time: {session.weekDay} {session.startTime} – {session.endTime}
        </span>
                                        <br />
                                        {session.description}
                                    </p>



                                    {/* Buttons */}
                                    <div className="flex justify-center gap-4 mt-3">
                                        <button
                                            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-300 shadow-sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedSession(session);// prevent collapsing
                                                openFavoritePopup();
                                            }}
                                        >
                                            Favorite
                                        </button>

                                        <button
                                            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-300 shadow-sm"
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
