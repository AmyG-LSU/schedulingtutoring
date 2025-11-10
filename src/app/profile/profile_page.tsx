import "../../../public/profile-assets/style.css";

export default function ProfilePage() {
  return (
    <main className="profile-container">
      <nav className="nav">
        <div className="personal__logo">My Profile</div>
        <ul className="nav__link--list">
          <li>
            <a className="nav__link-anchor link__hover-effect link__hover-effect--black" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link-anchor link__hover-effect link__hover-effect--black" href="#about-me">
              About
            </a>
          </li>
          <li>
            <a className="nav__link-anchor nav__link-anchor-primary" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <header className="header">
        <div className="header__content">
          <div className="header__text-section">
            <h1 className="title">Welcome to Your Profile</h1>
            <p className="subtitle">
              Manage your personal details, update your information, and connect with other students.
            </p>
          </div>
        </div>
      </header>

      <section id="about-me" className="section">
        <h2>About Me</h2>
        <p>
          Hello! I’m a student tutor who enjoys helping others succeed academically. I’m currently
          studying computer science and love web development, data analytics, and design.
        </p>
      </section>

      <section id="profile-info" className="section">
        <h2>Profile Information</h2>
        <form className="profile-form">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Enter username" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" />

          <label htmlFor="bio">Bio</label>
          <textarea id="bio" rows={4} placeholder="Write a short bio..." />

          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Student Tutors. All rights reserved.</p>
      </footer>
    </main>
  );
}
