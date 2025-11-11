"use client";
import React, { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("Dillon Summers");
  const [email, setEmail] = useState("dsumm11@lsu.edu");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState("Senior");

  const handleEditClick = () => {
    if (editing) {
      console.log("Profile saved:", { username, email, major, year });
    }
    setEditing(!editing);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, major, year });
  };

  return (
      <div className="profile-page p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Profile Info</h1>

        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          <img
              src="/public/image.png"
              alt="Picture of Dillon"
              className="w-48 h-48 rounded-full object-cover shadow-md"
          />

          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold">Username:</label>
              <input
                  type="text"
                  value={username}
                  disabled={!editing}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="font-semibold">E-mail:</label>
              <input
                  type="email"
                  value={email}
                  disabled={!editing}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="font-semibold">Major:</label>
              <input
                  type="text"
                  value={major}
                  disabled={!editing}
                  onChange={(e) => setMajor(e.target.value)}
                  className="w-full border rounded-md p-2"
              />
            </div>
            <div>
              <label className="font-semibold">Year:</label>
              <input
                  type="text"
                  value={year}
                  disabled={!editing}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full border rounded-md p-2"
              />
            </div>
            <button
                type="button"
                onClick={handleEditClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {editing ? "Save Profile" : "Edit Profile"}
            </button>
          </form>
        </div>
      </div>
  );
}