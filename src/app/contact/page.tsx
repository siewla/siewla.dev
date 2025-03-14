import Layout from '@/components/Layout';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <Layout>
      <div className="container">
        <div className="contact-container fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="heading">Get in Touch</h1>

          <div className="contact-methods">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" size={24} />
              <div>
                <h3 className="contact-label">Email</h3>
                <a
                  href="mailto:siewlapang@gmail.com"
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  siewlapang@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaLinkedin className="contact-icon" size={24} />
              <div>
                <h3 className="contact-label">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/siewlapang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/siewlapang
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaGithub className="contact-icon" size={24} />
              <div>
                <h3 className="contact-label">GitHub</h3>
                <a
                  href="https://github.com/siewla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/siewla
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 