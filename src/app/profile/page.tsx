"use client";

import { useState } from "react";

export default function ProfilePage() {
  // LOCAL PROFILE STATE
  const [profile, setProfile] = useState({
    name: "Dillon Summers",
    email: "dsumm11@lsu.edu",
    major: "Computer Science",
    year: "Senior",
  });

  const [isEditing, setIsEditing] = useState(false);

  // OFFERINGS CREATED BY USER
  const [mySessions, setMySessions] = useState([
    {
      name: "Intro to Java Help",
      course: "CS 1400",
      tutor: "Dillon Summers",
      location: "Patrick Taylor Hall",
      day: "Mon/Wed",
      time: "4:00 PM",
      tags: ["beginner", "programming"],
    },
    {
      name: "Calculus Exam Prep",
      course: "Math 1550",
      tutor: "Dillon Summers",
      location: "LSU Library",
      day: "Tue/Thu",
      time: "2:30 PM",
      tags: ["calculus", "freshman"],
    },
  ]);

  // NEW OFFERING FORM
  const [newSession, setNewSession] = useState({
    name: "",
    course: "",
    tutor: profile.name,
    location: "",
    day: "",
    time: "",
    tags: [] as string[],
  });

  // Dropdown lists
  const courseOptions = ["1550 Math", "2001 Comm.", "1253 CS", "2733 Physics", "2060 Math"];
  const locationOptions = [
    "Patrick Taylor Hall",
    "LSU Library",
    "Middleton Library",
    "Student Union",
  ];
  const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
      <div className="px-6 pt-28 pb-10 max-w-6xl mx-auto">
        {/* -------------------- PROFILE SECTION -------------------- */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* PROFILE IMAGE */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
            <img
                src="/assets/Screenshot.png"
                alt="Profile"
                className="object-cover w-full h-full"
            />
          </div>

          {/* PROFILE INFO */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Profile Info</h1>

            {/* VIEW MODE */}
            {!isEditing && (
                <div className="text-lg space-y-1 mb-4">
                  <p><strong>Name:</strong> {profile.name}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                  <p><strong>Major:</strong> {profile.major}</p>
                  <p><strong>Year:</strong> {profile.year}</p>
                </div>
            )}

            {/* EDIT MODE */}
            {isEditing && (
                <div className="space-y-3 mb-4">
                  <p>
                    <strong>Name:</strong>
                    <input
                        className="border p-2 w-full"
                        value={profile.name}
                        onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                        }
                    />
                  </p>

                  <p>
                    <strong>Email:</strong>
                    <input
                        className="border p-2 w-full"
                        value={profile.email}
                        onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                        }
                    />
                  </p>

                  <p>
                    <strong>Major:</strong>
                    <input
                        className="border p-2 w-full"
                        value={profile.major}
                        onChange={(e) =>
                            setProfile({ ...profile, major: e.target.value })
                        }
                    />
                  </p>

                  <p>
                    <strong>Year:</strong>
                    <input
                        className="border p-2 w-full"
                        value={profile.year}
                        onChange={(e) =>
                            setProfile({ ...profile, year: e.target.value })
                        }
                    />
                  </p>
                </div>
            )}

            {/* BUTTON ROW */}
            <div className="flex gap-3 mt-2">
              {!isEditing && (
                  <button
                      onClick={() => setIsEditing(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
                  >
                    Edit Profile
                  </button>
              )}

              {isEditing && (
                  <>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-full"
                    >
                      Cancel
                    </button>

                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-blue-800 text-white px-4 py-2 rounded-full"
                    >
                      Save
                    </button>
                  </>
              )}
            </div>
          </div>
        </div>

        {/* -------------------- OFFERINGS SECTIONS -------------------- */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* YOUR OFFERINGS */}
          <section className="bg-blue-50 border-gray-400 rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Offerings</h2>

            {mySessions.map((s, idx) => (
                <div
                    key={idx}
                    className="bg-white border rounded-xl p-4 mb-4 shadow-sm"
                >
                  <h3 className="text-xl font-bold">{s.name}</h3>

                  <p><strong>Course:</strong> {s.course}</p>
                  <p><strong>Tutor:</strong> {s.tutor}</p>
                  <p><strong>Location:</strong> {s.location}</p>
                  <p><strong>Day:</strong> {s.day}</p>
                  <p><strong>Time:</strong> {s.time}</p>
                  <p><strong>Tags:</strong> {s.tags.join(", ")}</p>
                </div>
            ))}
          </section>

          {/* ADD OFFERINGS */}
          <section className="bg-blue-50 border-gray-400 rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Add Offerings</h2>

            <div className="bg-white border rounded-xl p-4 shadow space-y-4">

              {/* SESSION NAME */}
              <div>
                <strong>Session Name:</strong>
                <input
                    type="text"
                    placeholder="e.g., Calculus Help Session"
                    className="border p-2 w-full"
                    value={newSession.name}
                    onChange={(e) =>
                        setNewSession({ ...newSession, name: e.target.value })
                    }
                />
              </div>

              {/* COURSE */}
              <div>
                <strong>Course:</strong>
                <select
                    className="border p-2 w-full"
                    value={newSession.course}
                    onChange={(e) =>
                        setNewSession({ ...newSession, course: e.target.value })
                    }
                >
                  <option value="">Select Course</option>
                  {courseOptions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* LOCATION */}
              <div>
                <strong>Location:</strong>
                <select
                    className="border p-2 w-full"
                    value={newSession.location}
                    onChange={(e) =>
                        setNewSession({ ...newSession, location: e.target.value })
                    }
                >
                  <option value="">Select Location</option>
                  {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* DAY */}
              <div>
                <strong>Day:</strong>
                <select
                    className="border p-2 w-full"
                    value={newSession.day}
                    onChange={(e) =>
                        setNewSession({ ...newSession, day: e.target.value })
                    }
                >
                  <option value="">Select Day</option>
                  {dayOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* TIME */}
              <div>
                <strong>Time:</strong>
                <input
                    type="text"
                    placeholder="Enter time (e.g., 4:30 PM)"
                    className="border p-2 w-full"
                    value={newSession.time}
                    onChange={(e) =>
                        setNewSession({ ...newSession, time: e.target.value })
                    }
                />
              </div>

              {/* TAGS — TYPE AND ADD */}
              <div>
                <strong>Tags:</strong>

                <input
                    type="text"
                    placeholder="Type a tag and press Enter"
                    className="border p-2 w-full mb-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const value = (e.target as HTMLInputElement).value.trim();
                        if (value && !newSession.tags.includes(value)) {
                          setNewSession({
                            ...newSession,
                            tags: [...newSession.tags, value],
                          });
                        }
                        (e.target as HTMLInputElement).value = "";
                      }
                    }}
                />

                <div className="flex flex-wrap gap-2 mt-2">
                  {newSession.tags.map((t, i) => (
                      <span
                          key={i}
                          className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full flex items-center gap-2"
                      >
                    {t}
                        <button
                            className="text-red-600 font-bold"
                            onClick={() =>
                                setNewSession({
                                  ...newSession,
                                  tags: newSession.tags.filter((tag) => tag !== t),
                                })
                            }
                        >
                      ×
                    </button>
                  </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ADD BUTTON */}
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full mt-4"
                onClick={() => {
                  if (!newSession.name || !newSession.course || !newSession.location || !newSession.day || !newSession.time) {
                    alert("Please fill all fields!");
                    return;
                  }

                  setMySessions([...mySessions, newSession]);

                  setNewSession({
                    name: "",
                    course: "",
                    tutor: profile.name,
                    location: "",
                    day: "",
                    time: "",
                    tags: [],
                  });
                }}
            >
              Add New Session
            </button>
          </section>
        </div>
      </div>
  );
}
