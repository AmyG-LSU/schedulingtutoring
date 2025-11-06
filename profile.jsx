import React, { useState } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AboutMe() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  return (
    <div>
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
            <a
              href="#"
              className="nav__link-anchor link__hover-effect link__hover-effect--black"
            >
              Notification
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
                  src="assets/Screenshot 2025-10-01 164305.png"
                  alt="Picture of Dillon"
                  className="about-me__picture"
                />
              </figure>
            </div>

            {/* Profile Info */}
            <div className="col-12 col-md-8">
              <h1 className="about-me__info--title">Profile Info</h1>
              <div className="about-me__profile--editor">
                <button type="button" id="editProfileBtn" onClick={handleEditClick}>
                  Edit Profile
                </button>
              </div>

              {/* Contact Form */}
              <form
                className="contact-form"
                action="https://formspree.io/f/xblyyvae"
                method="POST"
              >
                <div>
                  <label>Username: </label>
                  <input type="text" name="username" required disabled={!isEditable} />
                </div>

                <div>
                  <label>E-mail: </label>
                  <input type="email" name="email" required disabled={!isEditable} />
                </div>

                <div>
                  <label>Major: </label>
                  <input type="text" name="major" required disabled={!isEditable} />
                </div>

              <div>
                  <label>Year: </label>
                  <input type="text" name="major" required disabled={!isEditable} />
                </div>
              </form>

              {/* Social Links */}
              <div className="about-me__links">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Microsoft Outlook Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
