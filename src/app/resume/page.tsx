import Layout from '@/components/Layout';
import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  const summary = 'Dynamic Full Stack Developer with a proven track record in software engineering and a comprehensive skill set spanning both frontend and backend technologies. Currently advancing expertise through a Master\'s in Computer Science while maintaining a successful career in software development. Demonstrates excellence in system optimization, user experience enhancement, and test-driven development practices. Known for effective collaboration in agile environments and consistent delivery of high-impact solutions. Combines technical proficiency with a passion for innovation to create meaningful technological advancements.';

  const experience = [
    {
      company: 'Saltmine',
      position: 'Software Engineer II (Full Stack Developer)',
      location: 'Singapore',
      period: 'November 2021 - Present',
      description: [
        'Architected and implemented a shared private design library, enhancing cross-team collaboration and UI development efficiency',
        'Made user experience improvements through innovative feature development in collaboration with product management',
        'Focused onMongoDB database optimization initiatives, focusing on collection normalization for enhanced performance',
        'Championed agile methodologies while delivering high-priority features with consistent quality and timeliness',
        'Established mentorship programs for junior developers, fostering skill development and team growth',
        'Leveraged expertise in TypeScript, ReactJS, Redux, PostgreSQL, MongoDB, and AWS to deliver robust solutions',
        'Implemented comprehensive test-driven development practices, ensuring code reliability and maintainability'
      ],
    },
    {
      company: 'Google x Virtusa',
      position: 'Software Test Engineer',
      location: 'Singapore',
      period: 'February 2021 - November 2021',
      description: [
        'Pioneered the development of a mobile application test framework using Python and Appium for cross-platform testing',
        'Developed and maintained automated test suites for Critical User Journeys using platform-specific tools (Copycat for iOS, Flow for Android)',
        'Enhanced test automation processes through implementation of Selenium WebDriver with TypeScript and Java'
      ],
    },
    {
      company: 'General Assembly',
      position: 'Instructional Associate (Software Engineering Immersive)',
      location: 'Singapore',
      period: 'November 2020 - November 2022',
      description: [
        'Mentored aspiring developers through an intensive full-stack development program, facilitating successful career transitions',
        'Delivered comprehensive instruction in JavaScript-centric development, covering MERN, NERDS, and Django stacks',
        'Guided students in developing production-grade full-stack applications, ensuring industry-standard project outcomes'
      ],
    }
  ];

  const education = [
    {
      school: 'University Technology Malaysia',
      degree: 'Master of Science in Computer Science',
      location: 'Malaysia',
      period: '2024 - Present',
      description: 'Part-time Open and Distance Learning (ODL) program focusing on advanced computing concepts and software engineering principles',
    },
    {
      school: 'General Assembly',
      degree: 'Software Engineering Immersive',
      location: 'Singapore',
      period: '2020',
      description: 'Intensive full-stack development program with emphasis on modern web technologies and practical application',
    },
    {
      school: 'General Assembly',
      degree: 'User Experience Design',
      location: 'Singapore',
      period: '2021',
      description: 'Comprehensive UX design program covering user research, wireframing, prototyping, and design thinking methodologies',
    },
    {
      school: 'University Technology Malaysia',
      degree: 'Master of Science in Mechanical Engineering',
      location: 'Malaysia',
      period: '2016',
      description: 'Advanced studies in mechanical engineering principles and applications',
    },
    {
      school: 'Purdue University',
      degree: 'Bachelor of Science in Mechanical Engineering',
      location: 'United States',
      period: '2013',
      description: 'ABET-accredited engineering program from a top-ranked engineering institution',
    }
  ];

  const skills = {
    frontend: ['ReactJS', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'HTML5', 'CSS3', 'Storybook', 'Material UI', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Next.js', 'Django', 'RESTful APIs'],
    database: ['MongoDB', 'PostgreSQL'],
    devops: ['AWS', 'CI/CD', 'Docker', 'Jenkins', 'ArgoCD', 'Kubernetes'],
    testing: ['Jest', 'React Testing Library', 'Selenium', 'Appium', 'Automated Testing']
  };

  return (
    <Layout>
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="heading">Resume</h1>
          <a href="/siewla-resume.pdf" download className="download-button">
            <FaDownload />
            <span>Download PDF</span>
          </a>
        </div>
        <div className="resume-content">
          <section className="resume-section">
            <h2 className="section-title">Professional Summary</h2>
            <p className="summary-text">{summary}</p>
          </section>
          <section className="resume-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              {experience.map((job, index) => (
                <div key={index} className="experience-item">
                  <h3 className="job-title">{job.position}</h3>
                  <p className="company-name">{job.company} • {job.location}</p>
                  <p className="period">{job.period}</p>
                  <ul className="job-description">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3 className="school-name">{edu.school}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="company-name">{edu.location}</p>
                  <p className="period">{edu.period}</p>
                  <p className="education-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="resume-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-list">
                    {items.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
} 