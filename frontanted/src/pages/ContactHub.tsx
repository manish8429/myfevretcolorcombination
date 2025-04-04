
import { FaSquareInstagram, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PiWhatsappLogoFill } from 'react-icons/pi';
import "./ContactHub.css"

const ContactHub = () => {
  return (
    <section className="contact-hub">
      <div className="contact-header">
        <h2>Let's Build Something <span className="highlight">Amazing</span> Together</h2>
        <p className="intro-text">
          I specialize in creating elegant, efficient solutions. Whether you need a website, 
          mobile app, or custom software, I'd love to hear about your project.
        </p>
      </div>

      <div className="social-grid">
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
          <div className="card-bg"></div>
          <div className="social-icon">
            <FaLinkedin />
          </div>
          <div className="social-content">
            <h3>LinkedIn</h3>
            <p>Professional network</p>
            <span>linkedin.com/in/yourusername</span>
            <div className="hover-content">
              <p>Connect for career opportunities and professional collaborations</p>
              <button className="contact-btn">Connect Now</button>
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-card github">
          <div className="card-bg"></div>
          <div className="social-icon">
            <FaGithub />
          </div>
          <div className="social-content">
            <h3>GitHub</h3>
            <p>Explore my open-source work</p>
            <span>github.com/yourusername</span>
            <div className="hover-content">
              <p>Check out my latest projects and contributions</p>
              <button className="contact-btn">View Projects</button>
            </div>
          </div>
        </a>

        {/* Instagram */}
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-card instagram">
          <div className="card-bg"></div>
          <div className="social-icon">
            <FaSquareInstagram />
          </div>
          <div className="social-content">
            <h3>Instagram</h3>
            <p>See my design process</p>
            <span>@yourhandle</span>
            <div className="hover-content">
              <p>Behind-the-scenes content and design inspiration</p>
              <button className="contact-btn">Follow Me</button>
            </div>
          </div>
        </a>

        {/* Telegram */}
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="social-card telegram">
          <div className="card-bg"></div>
          <div className="social-icon">
            <FaTelegram />
          </div>
          <div className="social-content">
            <h3>Telegram</h3>
            <p>Quick chat available</p>
            <span>@yourusername</span>
            <div className="hover-content">
              <p>Fast communication channel for quick questions</p>
              <button className="contact-btn">Message Me</button>
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
          <div className="card-bg"></div>
          <div className="social-icon">
            <PiWhatsappLogoFill />
          </div>
          <div className="social-content">
            <h3>WhatsApp</h3>
            <p>Business inquiries</p>
            <span>+123 456 7890</span>
            <div className="hover-content">
              <p>Available for urgent discussions and business proposals</p>
              <button className="contact-btn">Chat Now</button>
            </div>
          </div>
        </a>
      </div>

      <div className="owner-bio">
        <div className="bio-content">
          <h3>My Development Philosophy</h3>
          <p>
            I believe in <strong>clean, maintainable code</strong> and <strong>user-centric design</strong>. 
            With expertise in both frontend and backend development, I create solutions that are:
          </p>
          <ul className="expertise-list">
            <li><span className="icon">🚀</span> Performance optimized</li>
            <li><span className="icon">📈</span> Scalable for growth</li>
            <li><span className="icon">♿</span> Accessible to all users</li>
            <li><span className="icon">🔒</span> Secure by design</li>
            <li><span className="icon">🧩</span> Modular and reusable</li>
            <li><span className="icon">💡</span> Innovative yet practical</li>
          </ul>
          <p className="closing-text">
            Let's discuss how I can help bring your vision to life with technical excellence 
            and creative problem-solving.
          </p>
          <div className="cta-container">
            <button className="primary-cta">Get in Touch</button>
            <button className="secondary-cta">View Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHub;