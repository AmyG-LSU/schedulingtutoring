"use client";

import { useState } from "react";


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
    );
}
