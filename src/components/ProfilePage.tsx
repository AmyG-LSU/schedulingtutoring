"use client";
import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("Dillon Summers");
  const [email, setEmail] = useState("dsumm11@lsu.edu");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState("Senior");

  const handleEditClick = () => {
    if (editing) {
      // Save profile logic, e.g., send to server
      console.log("Profile saved:", { username, email, major, year });
    }
    setEditing(!editing);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, major, year });
  };

  return (
    <div className="profile-page">
      <nav>
        <div className="personal__logo">Logo</div>
        <ul className="nav__link--list">
          <li>
            <a
              href="#"
              className="nav__link-anchor link__hover-effect link__hover-effect--black"
            >
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="nav__link-anchor nav__link-anchor-primary">
              Notifications
            </a>
          </li>
        </ul>
      </nav>

      <section id="about-me" className="about-me__info">
        <div className="container about-me__info--container">
          <div className="row about-me__info">
            {/* Profile Image */}
            <div className="col-12 col-md-4">
              <figure className="about-me__picture--mask">
                <img
                  src="assets/Screenshot 2025-11-10 144437.png"
                  alt="Picture of Dillon"
                  className="about-me__picture"
                />
              </figure>
            </div>

            {/* Profile Info */}
            <div className="col-12 col-md-8">
              <h1 className="about-me__info--title">Profile Info</h1>
              <div className="about-me__profile--editor">
                <button type="button" onClick={handleEditClick}>
                  {editing ? "Save Profile" : "Edit Profile"}
                </button>
              </div>

              {/* Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label>
                    Username:{" "}
                    <input
                      type="text"
                      value={username}
                      disabled={!editing}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        backgroundColor: editing ? "#fff" : "#f8f9fa",
                      }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    E-mail:{" "}
                    <input
                      type="email"
                      value={email}
                      disabled={!editing}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        backgroundColor: editing ? "#fff" : "#f8f9fa",
                      }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Major:{" "}
                    <input
                      type="text"
                      value={major}
                      disabled={!editing}
                      onChange={(e) => setMajor(e.target.value)}
                      style={{
                        backgroundColor: editing ? "#fff" : "#f8f9fa",
                      }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Year:{" "}
                    <input
                      type="text"
                      value={year}
                      disabled={!editing}
                      onChange={(e) => setYear(e.target.value)}
                      style={{
                        backgroundColor: editing ? "#fff" : "#f8f9fa",
                      }}
                    />
                  </label>
                </div>
              </form>

              {/* Social Links */}
              <div className="about-me__links">
                <a href="#" target="_blank" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" aria-label="Microsoft Outlook Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-wrapper">
        {/* Left section */}
        <div className="container1">
          <section className="course-details-container">
            <h2>Your Offerings</h2>
            <h4>Subject:</h4>
            <h4>Time:</h4>
            <h4>Location:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="submit">Your Offering</button>
          </section>
        </div>

        {/* Right section */}
        <div className="container2">
          <section className="course-details-container">
            <h2>Add Offerings</h2>
            <h4>Course/Sub:</h4>
            <h4>Time:</h4>
            <h4>Location:</h4>
            <p>Tags:</p>
            <button type="submit">Add Offering</button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;