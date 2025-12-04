import Link from "next/link";
import "./style.css";


export default function ProfilePage() {
    return (
        <>
            <nav>
                <div className="personal__logo">Logo</div>
                <ul className="nav__link--list">
                    <li>
                        <a className="nav__link-anchor link__hover-effect link__hover-effect--black">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a className="nav__link-anchor nav__link-anchor-primary">
                            Notifications
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="profile-page">
                <section className="about-me__info">
                    <div className="container about-me__info--container">
                        <div className="row about-me__info">
                            <div className="col-12 col-md-4">
                                <figure className="about-me__picture--mask">
                                    <img
                                        src="/assets/Screenshot.png"
                                        alt="Picture of Dillon"
                                        className="about-me__picture"
                                    />
                                </figure>
                            </div>

                            <div className="col-12 col-md-8">
                                <h1 className="about-me__info--title">Profile Info</h1>

                                <button id="editProfileBtn">Edit Profile</button>

                                <form className="contact-form">
                                    <label>Username: Dillon Summers</label>
                                    <label>Email: dsumm11@lsu.edu</label>
                                    <label>Major: Computer Science</label>
                                    <label>Year: Senior</label>
                                </form>

                                <div className="about-me__links">
                                    <a aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a aria-label="Email">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="offerings-wrapper">
                    <div className="container1">
                        <section className="course-details-container">
                            <h2>Your Offerings</h2>
                            <h4>Subject:</h4>
                            <h4>Time:</h4>
                            <h4>Location:</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <button type="submit">Your Offering</button>
                        </section>
                    </div>

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
        </>
    );
}
