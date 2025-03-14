import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function Home() {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'HTML/CSS',
    'Python',
    'Git',
    'RESTful APIs',
    'Docker',
    'Kubernetes',
    'AWS',
    'CI/CD',
    'Testing',
    'Agile',
  ];

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="fade-in-up about-content" style={{ animationDelay: '0.1s' }}>
            <div className="profile-image-container">
              <Image
                src="/profile.png"
                alt="Siew La"
                width={200}
                height={200}
                className="profile-image"
              />
            </div>
            <h1 className="heading">Hi, I'm Siew La 👋</h1>
            <h2 className="subheading">Full Stack Developer</h2>
            <p className="text">
              I'm passionate about building web applications and solving complex problems.
              With experience in both frontend and backend development, I create efficient,
              scalable, and user-friendly solutions.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/siewla"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub className="contact-icon" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/siewlapang/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin className="contact-icon" size={24} />
              </a>
            </div>
          </div>

          <div className="fade-in-up card" style={{ animationDelay: '0.3s' }}>
            <h3 className="card-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
