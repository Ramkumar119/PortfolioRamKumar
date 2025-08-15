import styles from "./Experience.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
const Exp = [
  {
    year: "06 july 2025- present",
    name: "Syrma SGS technologies",
    designation: "NPI Engineer",
    link: "#",
    work: [
            " Owning the responsibility of Designing and developing new product in the organization alongside Seniors NPI Engineers",
            "Delivering robust and scalable product design with aproxx Zero rejection",
            "Contributing to the Quality of the product"

    ],
  },
  {
    year: "03 July - 02 Aug 2024",
    name: "Bharat intern pvt Ldt.",
    designation: "Full Stack Itern",
    link: "https://drive.google.com/file/d/1r6ZhG8x3CPvsfVPzogC6Y5ABEDzdINVx/view?usp=sharing",
    work: [
      "Designing and developing the user interface project’s requirements.",
      "Developed RESTful API's to facilitate secure and efficient communication between the frontend and backend.",
      "Designed and implemented various form layouts as per the project's design specifications, ensuring seamless data collection and user interaction.",
    ],
  },
  {
    year: "23 November 2024 - Present",
    name: "Outlier.ai",
    designation: "Freelancer - Prompt Engineer",
    link: "",
    work: [
      "Craft writing prompts focused on technical tasks such as debugging code, generating new code solutions, or writing comprehensive code documentation.",
      "Create coding prompts that depend on extracting information from images, such as reading text from an image or detecting patterns, and then using the extracted data as input for algorithms.",
      "Review and provide constructive feedback on coding-related prompts written by others, focusing on clarity, relevance, and technical accuracy.",
    ],
  },
];

const Experience = () => {
  return (
    <section className={`${styles.section_front}`}>
      {Exp.map((data, i) => (
        <div key={i} className={`${styles.exp}`}>
          <p className={`${styles.year}`}>
            {data.year}{" "}
            {data.link.length > 0 && (
              <a className={`${styles.link}`} href={data.link} target="_blank">
                <FaExternalLinkAlt />
              </a>
            )}
          </p>
          <p className={`${styles.institue}`}>{data.name}</p>
          <p className={`${styles.course}`}>{data.designation}</p>
          <div className={`${styles.grade}`}>
            <ul>
              {data.work.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
