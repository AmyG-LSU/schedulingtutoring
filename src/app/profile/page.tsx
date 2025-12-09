"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState("Dillon Summers");
  const [email, setEmail] = useState("dsumm11@lsu.edu");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState("Senior");

  // Sessions state
  const [mySessions, setMySessions] = useState([
    {
      course: "CS 1400",
      tutor: username,
      location: "Patrick Taylor Hall",
      day: "Mon/Wed",
      time: "4:00 PM",
      tags: ["beginner", "programming"],
    },
    {
      course: "Math 1550",
      tutor: username,
      location: "LSU Library",
      day: "Tue/Thu",
      time: "2:30 PM",
      tags: ["calculus", "freshman"],
    },
  ]);

  const [newSession, setNewSession] = useState({
    course: "",
    tutor: username,
    location: "",
    day: "",
    time: "",
    tags: [] as string[],
  });

  // Dropdown options for the form
  const courseOptions = ["CS 1400", "Math 1550", "CS 4402", "IE 2000", "IE 2001"];
  const locationOptions = [
    "Patrick Taylor Hall",
    "LSU Library",
    "Middleton Library",
    "Student Union",
  ];
  const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeOptions = ["9:00 AM", "2:30 PM", "4:00 PM", "7:00 PM"];
  const tagOptions = ["beginner", "programming", "calculus", "freshman", "exam prep"];

  // For collapsing/expanding the two containers
  const [showYourOfferings, setShowYourOfferings] = useState(true);
  const [showAddOfferings, setShowAddOfferings] = useState(true);

  return (
    <>
      {/* GLOBAL STYLES */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

        .about-me__info--container {
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 15px;
          margin-top: -10px;
          font-family: "Lato", sans-serif;
        }

        .about-me__picture--mask {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0px auto 20px auto;
          display: flex;
          background: #222;
        }

        button#editProfileBtn {
          background-color: #00aeff;
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          margin-bottom: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        #editProfileBtn:hover {
          background-color: #008fcc;
        }

        .offerings-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 40px;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 40px;
        }

        .container1,
        .container2 {
          flex: 1 1 400px;
          max-width: 500px;
        }

        .course-details-container {
          background: beige;
          border: 2px solid black;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
          padding: 2rem;
          color: #333;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .course-details-container:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          transform: translateY(-3px);
        }
      `}</style>

      {/* PROFILE CONTENT */}
      <div className="profile-page" style={{ paddingTop: "120px" }}>
        <section className="about-me__info text-center">
          <div className="about-me__info--container">
            <figure className="about-me__picture--mask">
              <img
                src="/assets/Screenshot.png"
                alt="Picture of Dillon"
                className="about-me__picture"
              />
            </figure>

            <h1>Profile Info</h1>

            <button
              id="editProfileBtn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>

            {isEditing ? (
              <div className="contact-form">
                <p>
                  <strong>Username: </strong>
                  <input
                    className="border p-2 w-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </p>

                <p>
                  <strong>Email: </strong>
                  <input
                    className="border p-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </p>

                <p>
                  <strong>Major: </strong>
                  <input
                    className="border p-2 w-full"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                  />
                </p>

                <p>
                  <strong>Year: </strong>
                  <input
                    className="border p-2 w-full"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </p>

                <button
                  style={{
                    backgroundColor: "#00aeff",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "50px",
                    marginTop: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsEditing(false)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="contact-form">
                <p>
                  <strong>Username:</strong> {username}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Major:</strong> {major}
                </p>
                <p>
                  <strong>Year:</strong> {year}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* OFFERINGS */}
        <section className="offerings-wrapper">
          {/* YOUR OFFERINGS (dropdown) */}
          <div className="container1">
            <section className="course-details-container">
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setShowYourOfferings((prev) => !prev)}
              >
                <span>Your Offerings</span>
                <span>{showYourOfferings ? "▲" : "▼"}</span>
              </h2>

              {showYourOfferings &&
                mySessions.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "white",
                      border: "1px solid #ccc",
                      borderRadius: "12px",
                      padding: "15px",
                      marginTop: "20px",
                      textAlign: "left",
                    }}
                  >
                    <h3>{s.course}</h3>
                    <p>
                      <strong>Tutor:</strong> {s.tutor}
                    </p>
                    <p>
                      <strong>Location:</strong> {s.location}
                    </p>
                    <p>
                      <strong>Day:</strong> {s.day}
                    </p>
                    <p>
                      <strong>Time:</strong> {s.time}
                    </p>
                    <p>
                      <strong>Tags:</strong> {s.tags.join(", ")}
                    </p>
                  </div>
                ))}
            </section>
          </div>

          {/* ADD OFFERINGS (dropdown + form) */}
          <div className="container2">
            <section className="course-details-container">
              <h2
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => setShowAddOfferings((prev) => !prev)}
              >
                <span>Add Offerings</span>
                <span>{showAddOfferings ? "▲" : "▼"}</span>
              </h2>

              {showAddOfferings && (
                <>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid #ccc",
                      borderRadius: "12px",
                      padding: "15px",
                      marginTop: "20px",
                      textAlign: "left",
                    }}
                  >
                    {/* COURSE */}
                    <p>
                      <strong>Course:</strong>
                    </p>
                    <select
                      className="border p-2 w-full"
                      value={newSession.course}
                      onChange={(e) =>
                        setNewSession({
                          ...newSession,
                          course: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Course</option>
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>

                    {/* LOCATION */}
                    <p className="mt-3">
                      <strong>Location:</strong>
                    </p>
                    <select
                      className="border p-2 w-full"
                      value={newSession.location}
                      onChange={(e) =>
                        setNewSession({
                          ...newSession,
                          location: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Location</option>
                      {locationOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>

                    {/* DAY */}
                    <p className="mt-3">
                      <strong>Day:</strong>
                    </p>
                    <select
                      className="border p-2 w-full"
                      value={newSession.day}
                      onChange={(e) =>
                        setNewSession({
                          ...newSession,
                          day: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Day</option>
                      {dayOptions.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>

                    {/* TIME */}
                    <p className="mt-3">
                      <strong>Time:</strong>
                    </p>
                    <select
                      className="border p-2 w-full"
                      value={newSession.time}
                      onChange={(e) =>
                        setNewSession({
                          ...newSession,
                          time: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Time</option>
                      {timeOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>

                    {/* TAGS */}
                    <p className="mt-3">
                      <strong>Tags:</strong>
                    </p>
                    <select
                      multiple
                      className="border p-2 w-full"
                      onChange={(e) =>
                        setNewSession({
                          ...newSession,
                          tags: Array.from(
                            e.target.selectedOptions,
                            (o) => o.value
                          ),
                        })
                      }
                    >
                      {tagOptions.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#00aeff",
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "50px",
                      marginTop: "20px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (
                        !newSession.course ||
                        !newSession.location ||
                        !newSession.day ||
                        !newSession.time
                      ) {
                        alert("Please fill every required field.");
                        return;
                      }

                      setMySessions([...mySessions, newSession]);

                      // reset form
                      setNewSession({
                        course: "",
                        tutor: username,
                        location: "",
                        day: "",
                        time: "",
                        tags: [],
                      });
                    }}
                  >
                    Add New Session
                  </button>
                </>
              )}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
