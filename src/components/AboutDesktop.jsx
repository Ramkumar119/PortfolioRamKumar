import styles from "./AboutDesktop.module.css";
// import abhishek from "../assets/abhishek_1.jpg";
import formals_photo from "../assets/ram_edit1.png";
import resumePdf from "../assets/Resume.pdf";

const AboutDesktop = () => {
  return (
    <>
      <section
        className={`py-5 bg-color-primary text-light world-className vh-100 ${styles.displayBranding} `}
        style={{ height: "600px" }}
        id="AboutMe"
      >
        <div className={` ${styles.img_box}`}>
          <img
            // src={abhishek}
            src={formals_photo}
            className={`d-block mx-lg-auto img-fluid ${styles.imgMine}`}
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>

        <div className={`${styles.heading} `}>
          <h2
            className={`fw-bold cutom-text-color kablammo-font ${styles.head__about}`}
          >
            About me
          </h2>
          <p className={`lead text-white ${styles.intro__subpara}`}>
            Hello I'm{" "}
            <span className="cutom-text-color fw-bold">
              {" "}
              Ram Kumar ,{" "}
            </span>
            web designer based in Delhi,INDIA. Designer expert in creating user
            centered websites.Passionte about created websites with beautiful
            interfaces. I have a strong attention to detail, I like to update my
            knowledge everytime learning new tools and trends and provide
            innovative solutions.
          </p>
          <div className={`${styles.personal_details}`}>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Name</p>
              <p className={`${styles.detail_info}`}>Ram Kumar</p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Email</p>
              <p className={`${styles.detail_info}`}>
               ramkumar.career25@gmail.com
              </p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Leetcode</p>
              <p className={`${styles.detail_info}`}>
                <a
                  className={`${styles.link} color-green`}
                  href="https://leetcode.com/u/its_ramkumar01/"
                  target="_blank"
                >
                  Browse Profile
                </a>
              </p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Nationality</p>
              <p className={`${styles.detail_info}`}>Indian</p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Language</p>
              <p className={`${styles.detail_info}`}>Hindi, English</p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Development</p>
              <p className={`${styles.detail_info}`}>Full Stack Developer</p>
            </div>

            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Fiverr</p>
              <p className={`${styles.detail_info}`}>
                <a
                  className={`${styles.link} color-green`}
                  href="https://leetcode.com/u/its_ramkumar01/"
                  target="_blank"
                >
                  Browse Gig!
                </a>
              </p>
            </div>
          </div>
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="abhishekkumawt"
            data-version="v1"
          >
            { }
          </div>

          <div className={`d-grid gap-2 d-md-flex ${styles.btn__container}`}>
            <a
              download="resume"
              href={resumePdf}
              className={`btn-animated btn btn-green-outline btn-lg px-4 me-md-2 ${styles.btn_about}`}
            >
              My Resume
            </a>

            <a
              type="button"
              className={`btn-animated btn btn-green-outline btn-lg px-4 ${styles.btn_about}`}
              href="#Contact-Form"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDesktop;
