import GlassHero from "@/components/glass-hero";
import ScrollReveal from "@/components/scroll-reveal";
import BackgroundAmbient from "@/components/background-ambient";

const skillCategories = [
  {
    category: "Languages & Core",
    icon: "⚡",
    skills: ["Java", "Python", "C", "C++", "SQL"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Data & Process Mining",
    icon: "📊",
    skills: ["Process Mining", "Celonis Analytics", "Event Log Analysis", "Data Modeling"],
  },
];

const projectsData = [
  {
    index: "01",
    title: "Plant Growth Prediction",
    category: "Machine Learning with Python",
    description:
      "An intelligent data-driven application predicting plant growth stages, soil parameters, and crop health metrics using machine learning models.",
    tags: ["Python", "Machine Learning"],
    link: "https://github.com/Mohammed-Vaseem-Pasha/Plant-growth-prediction",
  },
  {
    index: "02",
    title: "GYM Website",
    category: "Full-Stack Web Development",
    description:
      "Modern gym and fitness platform with a dynamic workout catalog, interactive training-plan management, fluid animations, personalized fitness tracking, and a responsive membership and checkout experience.",
    tags: ["JavaScript", "HTML5", "CSS3", "Web Dev"],
    link: "https://gym-hnk.netlify.app/",
  },
  {
    index: "03",
    title: "Restaurant Website",
    category: "Frontend UI/UX",
    description:
      "Engaging digital dining portal featuring interactive menus, table reservation interface, elegant dark typography, and fluid micro-animations.",
    tags: ["React", "CSS3", "UI/UX Design", "Responsive"],
    link: "https://restaurantis.netlify.app/",
  },
];

const certificationData = [
  {
  index: "01",
  title: "AWS Cloud Practitioner Essentials",
  issuer: "Issued by AWS Training & Certification",
  description:
    "Completed AWS Cloud Practitioner Essentials training, gaining foundational knowledge of cloud concepts, core AWS services, security, and cloud fundamentals.",
  badge: "View Certificate",
  link: "https://drive.google.com/file/d/1U93WFKdbHI5t7W9vod581o4htsBE8vNH/view?usp=sharing",
},

{
  index: "02",
  title: "GenAI Powered Data Analytics Job Simulation",
  issuer: "Issued by Tata through Forage",
  description:
    "Completed a job simulation focused on GenAI-powered data analytics, exploring practical approaches to data-driven problem solving and analytics workflows.",
  badge: "View Certificate",
  link: "https://drive.google.com/file/d/1ucLN8jJyHS6YYYzU4jkRvckJgT8-PShS/view?usp=sharing",
},
  {
    index: "03",
    title: "Process Mining Certificate",
    issuer: "Issued by Celonis",
    description:
      "Professional credential in process discovery, event log data transformation, throughput analysis, and operational performance optimization.",
    badge: "View Certificate",
    link: "https://drive.google.com/file/d/13ziZv1FMvq3enhAzsSVbaGSwoh8vAIoV/view?usp=sharing",
  },
  {
    index: "04",
    title: "Web Development Certificate",
    issuer: "Issued by Skill Intern",
    description:
      "Comprehensive certification covering modern frontend engineering, responsive design architectures, and production web deployment.",
    badge: "View Certificate",
    link: "https://drive.google.com/file/d/1u1mO5H76a0Pejb1Oab5st1wiI7e-koIF/view?usp=sharing",
  },
];

const educationData = [
  {
    index: "01",
    degree: "B.Tech — Computer Science & Engineering (AI/ML)",
    year: "3rd Year (Current)",
    institution: "Vaagdevi College of Engineering",
    description:
      "Specializing in web application development, algorithms, database management, software engineering, and process intelligence.",
    highlights: ["Software Engineering", "Web Development", "Data Analytics", "Database Systems"],
  },
];

export default function Home() {
  return (
    <main>
      <GlassHero />

      <div className="ambient-content-container">
        <BackgroundAmbient />

        {/* About Section */}
        <section id="about" className="section">
        <ScrollReveal>
          <div className="section-header-block">
            <p className="section-label">01 // ABOUT ME</p>
            <h2 className="section-heading">Mohammed Vaseem Pasha</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="about-showcase">
            <div className="about-main-card">
              <div className="about-role-badge">
                <span className="pulse-dot" /> Web Developer &amp; Process Intelligence Practitioner
              </div>
              <h3 className="about-headline">
                Crafting seamless digital experiences with code, data, and process insights.
              </h3>
              <p className="about-body">
                I am a passionate 3rd-year B.Tech student focused on building modern web applications
                and applying process mining techniques to uncover operational efficiencies. I bridge the
                gap between software engineering, data analytics, and real-world execution.
              </p>

              <div className="about-stats-grid">
                <div className="stat-card">
                  <span className="stat-number">03rd</span>
                  <span className="stat-label">Year B.Tech CSE</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">03+</span>
                  <span className="stat-label">Featured Projects</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">02+</span>
                  <span className="stat-label">Interships</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <ScrollReveal>
          <div className="section-header-block">
            <p className="section-label">02 // TECHNICAL SKILLS</p>
            <h2 className="section-heading">Tools &amp; Technologies I Master.</h2>
          </div>
        </ScrollReveal>

        <div className="skills-showcase-grid">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.category} delay={idx * 120 + 80}>
              <div className="skill-category-card">
                <div className="skill-cat-header">
                  <span className="skill-cat-icon">{cat.icon}</span>
                  <div>
                    <span className="skill-cat-num">0{idx + 1}</span>
                    <h3 className="skill-cat-title">{cat.category}</h3>
                  </div>
                </div>
                <div className="skill-pills">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="rich-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="section">
        <ScrollReveal>
          <div className="section-header-block">
            <p className="section-label">03 // WORK EXPERIENCE</p>
            <h2 className="section-heading">Process Mining Internship.</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="internship-showcase-card">
            <div className="internship-accent-bar" />
            <div className="internship-content">
              <div className="internship-top">
                <div>
                  <span className="internship-badge-glow">
                    <span className="pulse-dot" /> Celonis Execution Management
                  </span>
                  <h3 className="internship-role-title">Process Mining Intern</h3>
                  <p className="internship-meta">Celonis &bull; Process Intelligence Track</p>
                </div>
              </div>

              <p className="internship-lead">
                Gained hands-on experience utilizing process mining tools and Celonis analytics to
                transform raw transactional event logs into actionable operational insights.
              </p>

              <div className="internship-grid">
                <div className="experience-highlight-card">
                  <span className="highlight-index">01</span>
                  <div>
                    <h4>Process Discovery &amp; Flow Mapping</h4>
                    <p>Extracted raw event logs and mapped real-world business process execution paths.</p>
                  </div>
                </div>

                <div className="experience-highlight-card">
                  <span className="highlight-index">02</span>
                  <div>
                    <h4>Bottleneck &amp; Friction Identification</h4>
                    <p>Analyzed throughput times to uncover operational delays, rework cycles, and waste.</p>
                  </div>
                </div>

                <div className="experience-highlight-card">
                  <span className="highlight-index">03</span>
                  <div>
                    <h4>Conformance &amp; Optimization</h4>
                    <p>Compared actual workflow execution against standard reference models to drive compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={180}> 
  <div className="internship-showcase-card">
    <div className="internship-accent-bar" />
    <div className="internship-content">
      <div className="internship-top">
        <div>
          <span className="internship-badge-glow">
            <span className="pulse-dot" /> BeeSkilled
          </span>

          <h3 className="internship-role-title">
            Machine Learning &amp; AI Intern
          </h3>

          <p className="internship-meta">
            BeeSkilled &bull; 6-Week Internship
          </p>
        </div>
      </div>

      <p className="internship-lead">
        Completed a 6-week internship focused on building foundational
        knowledge in Machine Learning with Python, exploring core ML concepts,
        logistic regression, and developing a first machine learning project.
      </p>

      <div className="internship-grid">
        <div className="experience-highlight-card">
          <span className="highlight-index">01</span>
          <div>
            <h4>Machine Learning with Python</h4>
            <p>
              Built foundational understanding of machine learning concepts
              and their implementation using Python.
            </p>
          </div>
        </div>

        <div className="experience-highlight-card">
          <span className="highlight-index">02</span>
          <div>
            <h4>Logistic Regression</h4>
            <p>
              Explored logistic regression and its application to machine
              learning classification problems.
            </p>
          </div>
        </div>

        <div className="experience-highlight-card">
          <span className="highlight-index">03</span>
          <div>
            <h4>Machine Learning Project</h4>
            <p>
              Applied learned concepts through a hands-on project, strengthening practical understanding of model development and implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</ScrollReveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <ScrollReveal>
          <div className="section-header-block">
            <p className="section-label">04 // SELECTED PROJECTS</p>
            <h2 className="section-heading">Work I&rsquo;ve Built.</h2>
          </div>
        </ScrollReveal>

        <div className="projects-showcase-grid">
          {projectsData.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 120 + 80}>
              <div className="project-card">
                <div className="project-card-top">
                  <span className="project-num-badge">{project.index}</span>
                  <span className="project-cat-tag">{project.category}</span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                <div className="project-tags-row">
                  {project.tags.map((t) => (
                    <span key={t} className="project-mini-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-btn"
                >
                  Explore Code <span className="arrow-icon">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <ScrollReveal>
          <div className="section-header-block">
            <p className="section-label">05 // CREDENTIALS</p>
            <h2 className="section-heading">Certifications &amp; Training.</h2>
          </div>
        </ScrollReveal>

        <div className="cert-showcase-grid">
          {certificationData.map((cert, idx) => (
            <ScrollReveal key={cert.title} delay={idx * 140 + 80}>
              <div className="cert-card">
                <div className="cert-header">
  <a href={cert.link}
    target="_blank"
    rel="noreferrer"
    className="cert-badge">
    {cert.badge}
  </a>
  <span className="cert-index">{cert.index}</span>
                  </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <ScrollReveal>
          <div className="section-header-block">
            <p className="section-label">06 // EDUCATION</p>
            <h2 className="section-heading">Academic Journey.</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="education-showcase-card">
            {educationData.map((edu) => (
              <div key={edu.degree} className="edu-content">
                <div className="edu-top">
                  <div>
                    <span className="edu-year-badge">{edu.year}</span>
                    <h3 className="edu-degree-title">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                </div>
                <p className="edu-desc">{edu.description}</p>

                <div className="edu-highlights-row">
                  {edu.highlights.map((h) => (
                    <span key={h} className="edu-chip">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <ScrollReveal delay={100}>
          <div className="contact-banner">
            <p className="section-label" style={{ color: "#ffffff", opacity: 0.8 }}>
              07 // GET IN TOUCH
            </p>
            <h2 className="contact-banner-title">Let&rsquo;s Build Something Great Together.</h2>
            <p className="contact-banner-sub">
              Available for web development projects, process mining collaborations, and engineering roles.
            </p>

            <div className="contact-cards-grid">
              <a href="mailto:mdvaseempashasss@gmail.com" className="contact-action-card">
                <div className="contact-card-icon">✉</div>
                <div>
                  <span className="contact-card-label">Send an Email</span>
                  <span className="contact-card-val">mdvaseempashasss@gmail.com</span>
                </div>
                <span className="contact-arrow">&rarr;</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-vaseem-pasha-b7b607321"
                target="_blank"
                rel="noreferrer"
                className="contact-action-card"
              >
                <div className="contact-card-icon">in</div>
                <div>
                  <span className="contact-card-label">Connect on LinkedIn</span>
                  <span className="contact-card-val">Mohammed Vaseem Pasha</span>
                </div>
                <span className="contact-arrow">&rarr;</span>
              </a>

              <a
                href="https://github.com/Mohammed-Vaseem-Pasha"
                target="_blank"
                rel="noreferrer"
                className="contact-action-card"
              >
                <div className="contact-card-icon">⚙</div>
                <div>
                  <span className="contact-card-label">View GitHub Profile</span>
                  <span className="contact-card-val">Mohammed-Vaseem-Pasha</span>
                </div>
                <span className="contact-arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
        </section>
      </div>

      <footer className="site-footer">
        <span>Mohammed Vaseem Pasha &bull; Web Developer</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
