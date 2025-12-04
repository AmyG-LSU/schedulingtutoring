"use client";

<<<<<<< Updated upstream
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
=======
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {

    const [isEditing, setIsEditing] = useState(false);

    const [username, setUsername] = useState("Dillon Summers");
    const [email, setEmail] = useState("dsumm11@lsu.edu");
    const [major, setMajor] = useState("Computer Science");
    const [year, setYear] = useState("Senior");

    return (
        <>
            {/* GLOBAL STYLES */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                  font-family: 'Lato', sans-serif;
                }

                body {
                  background-color: white;
                  color: #333;
                  text-align: center;
                  text-decoration-color: #00aeff;
                }

                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 40px;
                    background-color: black;
                    height: 80px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .personal__logo {
                  font-size: 24px;
                  font-weight: bold;
                  color: #00aeff;
                }

                .nav__link--list {
                  display: flex;
                  gap: 24px;
                }

                .nav__link-anchor {
                  text-decoration: none;
                  color: white;
                  font-weight: 500;
                  padding: 0.5rem 1rem;
                  transition: color 0.3s ease, background-color 0.3s ease;
                  display: inline-block;
                  position: relative;
                }

                .nav__link-anchor:nth-child(1)::after,
                .nav__link-anchor:nth-child(2)::after {
                  content: '';
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  height: 2px;
                  width: 0;
                  background-color: #00aeff;
                  transition: width 0.4s ease;
                }

                .nav__link-anchor:nth-child(1):hover,
                .nav__link-anchor:nth-child(2):hover {
                  background-color: black;
                  color: #00aeff;
                }

                .nav__link-anchor:nth-child(1):hover::after,
                .nav__link-anchor:nth-child(2):hover::after {
                  width: 100%;
                }

                .nav__link-anchor-primary {
                  color: white;
                  padding: 8px 20px;
                  border-radius: 50px;
                  font-weight: 600;
                  transition: background-color 0.3s ease;
                }

                .nav__link-anchor-primary:hover {
                  background-color: #00aeff;
                }

                .about-me__info--container {
                  max-width: 800px;
                  margin: 0 auto;
                  margin-bottom: 15px;
                  margin-top: -10px;
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

                .container1, .container2 {
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

            {/* NAVBAR */}
            <nav>
                <div className="personal__logo">Logo</div>
                <ul className="nav__link--list">
                    <li>
                        <Link href="/profile" className="nav__link-anchor">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/notifications" className="nav__link-anchor nav__link-anchor-primary">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* PROFILE CONTENT */}
            <div className="profile-page" style={{ paddingTop: "120px" }}>
                <section className="about-me__info">
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
                                <p><strong>Username:</strong> {username}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Major:</strong> {major}</p>
                                <p><strong>Year:</strong> {year}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* OFFERINGS */}
                <section className="offerings-wrapper">

                    {/* YOUR OFFERINGS */}
                    <div className="container1">
                        <section className="course-details-container">
                            <h2 style={{ display: "flex", justifyContent: "center" }}>
                                Your Offerings ▼
                            </h2>

                            <div style={{
                                background: "white",
                                border: "1px solid #ccc",
                                borderRadius: "12px",
                                padding: "15px",
                                marginTop: "20px",
                                textAlign: "left"
                            }}>
                                <h3>CS 1400</h3>
                                <p><strong>Tutor:</strong> Dillon Summers</p>
                                <p><strong>Location:</strong> Patrick Taylor Hall</p>
                                <p><strong>Time:</strong> Mon/Wed — 4:00 PM</p>
                                <p><strong>Tags:</strong> beginner, programming</p>
                            </div>

                            <div style={{
                                background: "white",
                                border: "1px solid #ccc",
                                borderRadius: "12px",
                                padding: "15px",
                                marginTop: "20px",
                                textAlign: "left"
                            }}>
                                <h3>Math 1550</h3>
                                <p><strong>Tutor:</strong> Dillon Summers</p>
                                <p><strong>Location:</strong> LSU Library</p>
                                <p><strong>Time:</strong> Tue/Thu — 2:30 PM</p>
                                <p><strong>Tags:</strong> calculus, freshman</p>
                            </div>
                        </section>
                    </div>

                    {/* ADD OFFERINGS */}
                    <div className="container2">
                        <section className="course-details-container">
                            <h2 style={{ display: "flex", justifyContent: "center" }}>
                                Add Offerings ▼
                            </h2>

                            <div style={{
                                background: "white",
                                border: "1px solid #ccc",
                                borderRadius: "12px",
                                padding: "15px",
                                marginTop: "20px",
                                textAlign: "left"
                            }}>
                                <p><strong>Course/Sub:</strong> Example</p>
                                <p><strong>Time:</strong> Example</p>
                                <p><strong>Location:</strong> Example</p>
                                <p><strong>Tags:</strong> example, demo</p>
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
                                    cursor: "pointer"
                                }}
                            >
                                Add New Session
                            </button>

                        </section>
                    </div>

                </section>
            </div>
        </>
>>>>>>> Stashed changes
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
            <div className="font-semibold ml-6 text-4xl text-gray-800 ">
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
                    selected={filters.time}                              
                    onChange={(selectedCourses) =>
                        setFilters((prev) => ({...prev, courses: selectedCourses}))
                    }
                />
                <FilterSelect
                    label="Filter by Tags"
                    options={tags}
                    selected={filters.time}                            
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

