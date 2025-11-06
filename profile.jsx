<?xml version="1.0" encoding="UTF-8"?>
<page>
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Dillon Summers</title>
    <link rel="stylesheet" href="./style.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
    <script src="https://kit.fontawesome.com/410f484d6c.js" crossorigin="anonymous"></script>
  </head>

  <body>
    <section id="about-me"/>

    <nav>
      <div class="personal__logo">Course Space</div>
      <ul class="nav__link--list">
        <li>
          <a href="" class="nav__link-anchor link__hover-effect link__hover-effect--black">Home</a>
        </li>
        <li>
          <a href="" class="nav__link-anchor link__hover-effect link__hover-effect--black">Sessions</a>
        </li>
        <li>
          <a href="" class="nav__link-anchor nav__link-anchor-primary">Contact</a>
        </li>
      </ul>
    </nav>

    <section id="about-me" class="about-me__info">
      <div class="container about-me__info--container">
        <div class="row about-me__info">

          <div class="col-12 col-md-4">
            <figure class="about-me__picture--mask">
              <img src="assets/Screenshot 2025-10-01 164305.png" alt="Picture of Dillon" class="about-me__picture"/>
            </figure>
          </div>

          <div class="col-12 col-md-8">
            <h1 class="about-me__info--title">Profile Info</h1>
            <div class="about-me__profile--editor">
              <button type="button" id="editProfileBtn">Edit Profile</button>
            </div>

            <form class="contact-form" action="https://formspree.io/f/xblyyvae" method="POST">
              <div>
                <label>Username: </label>
                <input type="text" name="name" required="true" disabled="true"/>
              </div>
              <div>
                <label>Full Name: </label>
                <input type="text" name="fullname" required="true" disabled="true"/>
              </div>
              <div>
                <label>E-mail: </label>
                <input type="email" name="email" required="true" disabled="true"/>
              </div>
              <div>
                <label>Major: </label>
                <input type="text" name="major" required="true" disabled="true"/>
              </div>
            </form>

            <script>
              const editBtn = document.getElementById("editProfileBtn");
              const inputs = document.querySelectorAll(".contact-form input");
              editBtn.addEventListener("click", () => {
                inputs.forEach(input => {
                  input.disabled = false;
                });
              });
            </script>

            <div class="about-me__links">
              <a href="" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="" target="_blank" aria-label="Microsoft Outlook Email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  </body>
</page>
