"use client";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import { sessions } from "@/data/sessions";

export default function SessionsPage() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleSelect = (tags: string[]) => {
        setSelectedTags(tags);
    };

    // Filter sessions by all selected tags
    const filteredSessions =
        selectedTags.length === 0
            ? sessions
            : sessions.filter((session) =>
                selectedTags.some((tag) => session.tags.includes(tag))
            );

    return (
        <div className="p-6">
            {/* Dropdown */}
            <div className="mb-6 flex justify-center">
                <Dropdown
                    Type="Filter by Subject"
                    option={[
                        "Math",
                        "Physics",
                        "Chemistry",
                        "English",
                        "Computer Science",
                        "Economics",
                        "History",
                        "Business",
                        "Engineering",
                        "General",
                    ]}
                    onSelect={handleSelect}
                />
            </div>

            {/* Tutoring sessions */}
            <div className="max-h-[80vh] overflow-y-auto space-y-4">
                {filteredSessions.length > 0 ? (
                    filteredSessions.map((session) => (
                        <div
                            key={session.id}
                            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-semibold text-lg text-gray-800">
                                {session.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {session.tutor} · {session.time}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-2 mt-2 mb-2">
                                {session.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm text-center">
                                {session.description}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-10">
                        No sessions match the selected filters.
                    </p>
                )}
            </div>
        </div>
    );
}
