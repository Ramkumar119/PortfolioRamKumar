import styles from "./Education.module.css";

const education = [
  {
    year: "2021-2025",
    institution: "Netaji Subhas University Of Technology",
    class: "Electronics and Communication Engineering(Specialization in AI and ML)",
    percent: "7 CGPA",
  },
  {
    year: "2019-2020",
    institution: "Sarvodaya vidyalaya sector-6 rohini delhi",
    class: "XII ,Science Maths",
    percent: "87.8%",
  },
  {
    year: "2017-2018",
    institution: "Sarvodaya vidyalaya sector-6 rohini delhi",
    class: "X",
    percent: "75%",
  },
  {
    year: "2023",
    institution: "Frontend Development",
    class: "Javascript",
    percent: "Online",
  },
  {
    year: "2024",
    institution: "Frontend Development",
    class: "React",
    percent: "online",
  },
  {
    year: "2024",
    institution: "Backend Development",
    class: "NodeJs",
    percent: "online",
  },
  {
    year: "2024",
    institution: "Backend Development",
    class: "Socket io",
    percent: "online",
  },
];
const Education = () => {
  return (
    <section className={`${styles.section_front}`}>
      {education.map((data, i) => (
        <div key={i} className={`${styles.education}`}>
          <p className={`${styles.year}`}>{data.year}</p>
          <p className={`${styles.institue}`}>{data.institution}</p>
          <p className={`${styles.course}`}>{data.class}</p>
          <p className={`${styles.grade}`}>{data.percent}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
