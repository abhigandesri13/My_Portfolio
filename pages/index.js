// pages/index.js

const hero = {
  name: "Abhilash Gandesri",
  title: "Aspiring Data Scientist | B.Tech 3rd Year",
  tagline:
    "B.Tech third-year Computer Science (CSM) student with a strong interest in Data Science and AI/ML, focused on data-driven problem solving and practical model development.",
  location: "Hyderabad, India",
  email: "abhigandesri@gmail.com",
  phone: "+91 76619 50021",
  github: "https://github.com/abhigandesri13",
  linkedin: "https://www.linkedin.com/in/abhilash-gandesri1330/",
  resumeLink: "/resume.pdf", 
  photo: "/profile.jpg",
  photoAlt: "Profile photo of Abhilash Gandesri",
};

const skills = {
  languages: ["Python", "SQL", "C"],
  dsml: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
  core: ["Data Structures & Algorithms", "Algorithmic Thinking", "ML Algorithms"],
};

const projects = [
  {
    title: "AI Movie Recommendation System",
    tag: "Machine Learning Project (Intermediate)",
    summary: "Recommend movies using a hybrid machine learning approach.",
    description:
      "Built a hybrid movie recommendation system using collaborative filtering and content-based filtering on the MovieLens dataset. Implemented similarity-based recommendations and personalized user suggestions with an interactive Streamlit interface.",
    features: [
      "Collaborative filtering using user–item interactions",
      "Content-based filtering using genres and tags",
      "Cosine similarity for movie recommendation",
      "Personalized recommendations for individual users",
      "Interactive Streamlit-based web interface"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Cosine Similarity"],
    liveDemo: "https://ai-movie-recommendation-system.streamlit.app/",
    github: "https://github.com/abhigandesri13/Moive_Recommendation_System.git",
  },
  {
    title: "Travel Planner – Smart Trip Recommender",
    tag: "Software + ML Project (Intermediate)",
    summary:
      "Smart travel planning system that recommends destinations and generates optimized itineraries.",
    description:
      "Built a travel planning system that helps users select destinations, estimate budgets, view basic routes, and receive personalised trip suggestions based on preferences like nature, nightlife, or adventure.",
    features: [
      "Destination recommendation based on user preferences",
      "Budget estimation for trips",
      "Itinerary generation for selected days",
      "Simple route planning concept (can be extended with Maps API)",
      "Reusable architecture to plug in ML recommendation logic",
    ],
    tech: ["Python/JavaScript", "Flask or Node.js", "HTML", "CSS", "Bootstrap"],
    liveDemo: "https://ai-travel-planner-for-students.streamlit.app/", 
    github: "https://github.com/abhigandesri13/AI-Travel-Planner", 
  },
  {
    title: "AI Career Guidance Platform",
    tag: "AI-Based Project (Intermediate)",
    summary:
      "AI-powered career guidance platform delivering personalized career recommendations based on user interests and skills.",
    description:
      "Designed and developed an AI-driven career guidance application that analyzes user inputs to generate personalized career recommendations. The platform provides structured guidance through an intuitive, web-based interface.",
    features: [
      "AI-driven career recommendation workflow",
      "Personalized guidance based on user inputs",
      "Real-time career suggestions",
      "Interactive and user-friendly interface",
      "Web-based deployment",
    ],
    tech: ["Lovable AI", "JavaScript", "Vercel", "Web Technologies", "GitHub"],
    liveDemo: "https://ai-career-guidance-plan.vercel.app/", 
    github: "https://github.com/abhigandesri13/AI_Career_Guidance.git", 
  },
  {
    title: "Fake News Detection Using NLP",
    tag: "AI / NLP Project (Advanced)",
    summary:
      "Classifies news as real or fake using NLP and deep learning techniques.",
    description:
      "Implemented an NLP-based classification model to detect fake news using text preprocessing, embeddings, and deep learning architectures like LSTM/GRU. Achieved robust performance on benchmark datasets.",
    features: [
      "Text cleaning, tokenization, and preprocessing pipeline",
      "Feature extraction using TF-IDF or word embeddings",
      "LSTM/GRU-based neural network for classification",
      "Evaluation using confusion matrix, ROC, and F1-score",
      "Simple web interface to test headlines and short articles",
    ],
    tech: ["Python", "NLTK/spaCy", "TensorFlow/Keras", "Flask or Streamlit"],
    liveDemo: "https://your-fakenews-demo.com", // placeholder
    github: "https://github.com/your-fakenews", // placeholder
  },
];

const internships = [
  {
    role: "Conversational Data Analysis with LLMs",
    company: "VOIS for Tech University Engagement Program",
    duration: "Sep 2025 – Oct 2025 (Virtual)",
    points: [
     "Performed data cleaning, preprocessing, and exploratory analysis on conversational datasets.",
     "Built LLM-based models for prediction and classification tasks using Python.",
     "Created data visualizations to present conversational insights clearly.",
     "Collaborated with a remote team and prepared documentation of conversational AI projects.",

    ],
  },
  {
    role: "Artificial Intelligence & Cloud Technology",
    company: "Edunut Foundation & AICTE",
    duration: "Sep 2025 – Oct 2025 (Virtual)",
    points: [
      "Implemented ML algorithms such as Logistic Regression, Random Forest, and KNN for AI tasks.",
      "Worked on multiple mini-projects applying Artificial Intelligence and Cloud Technology concepts.",
      "Improved model performance through feature engineering and hyperparameter tuning techniques.",
      "Used Jupyter Notebook extensively for experimentation, reporting, and cloud-based workflows.",
    ],
  },
  {
    role: "ServiceNow Intern ",
    company: "ServiceNow University & AICTE",
    duration: "Oct 2025 – Nov 2025 (Virtual)",
    points: [
      "Learned ServiceNow fundamentals including administration, flows, and automated test framework.",
      "Completed micro‑certifications on ServiceNow basics and Agentic AI concepts.",
      "Gained hands‑on experience with reporting, workflow automation, and system administration tasks.",
      "Prepared for the Certified System Administrator (CSA) exam through structured training modules.",
    ],
  },
];

const workshops = [
  "Generative AI Mastermind - OutSkill",
  "AI Tools and ChatGPT workshop - Be10X",
  "Automate Everything with n8n - Lets Upgrade",
];

const hackathons = [
  "Smart India Hackathon (SIH) — Cleared Round 1, awaiting Round 2",
  "Analytics Data Science Hackathon",
  "National Level Three Days Hackathon on Web Development Using AI Tools",
];

const certificates = {
  technical: [
    "Generative AI Foundations - Upgrad & Microsoft",
    "Python Certificate - HackerRank",
    "Introduction to Artificial Intelligence - Infosys Springboard",
    "Artificial Intelligence Fundamentals - IBM SkillsBuild",
    " Database Management and SQL - Newton School",
  ],
  internships: [
    "Conversational Data Analysis with LLMs - VOISfor Tech University Engagement Program",
    "ServiceNow: Platform fundamentals, administration, automation, ATF, reporting - ServiceNow University",
    "Artificial Intelligence and Data Analytics focused on Green Skills - Skills4Future",
    "Artificial Intelligence & Cloud Technology - Edunet Foundation",
  ],
  workshops: [
    "30 Days MasterClass in Artificial Intelligence - Pantech.ai",
    "30 Days DSA Bootcamp - UnStop",
    "Generative AI Mastermind - OutSkill",
    "Automate Everything with n8n - Lets Upgrade",
    "The AI Revolution - Skillo",
  ],
  hackathons: [
    "SIH Local Hackathon Certificate",
    "National Level Three Days Hackathon on Web Development Using AI Tools",
    "Tata Crucible Campus Quiz 2025, Prelims Level 1",
  ],
};

const education = {
  degree: "Bachelor of Technology (B.Tech) — Computer Science Engineering (CSE)",
  specialization: "Artificial Intelligence & Machine Learning (AI & ML)",
  college: "Siddhartha Institute of Technology and Sciences, Hyderabad",
  duration: "2023 – 2027",
  year: "3rd Year",
  cgpa: "8.2",
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Deep Learning (Elective)",
    "Probability & Statistics",
  ],
};

const achievements = {
  major: [
    "Cleared Round 1 of Smart India Hackathon (SIH) with team; currently waiting for Round 2.",
    "Completed 3 professional virtual internships in Data Science, Machine Learning, and Data Analytics.",
    "Participated in TCS CodeVita, cleared Round 1, and performed strongly in Round 2."
  ],
  technical: [
    "Built 4+ real-world projects including ML models, AI solutions, dashboards, and a travel planner application.",
    "Demonstrated strong ability in data preprocessing, ML model building, visualization, and deployment concepts.",
    "Led team discussions, task assignments, and project documentation for projects and internships.",
  ],
  academic: [
    "Consistently performed well in AI & ML specialization subjects.",
    "Earned certifications in Python, SQL, Machine Learning, and Data Science tools from reputed platforms.",
    "Earned a  Merit certificate in DSA for successful participation in a college-level technical competition."

  ],
  community: [
    "Successfully completed a Minor Project & a Real-Time Project in college as Team Leader of a 4-member group.",
    "Actively involved in coding competitions, tech events, and ML challenges at college.",
    "Collaborated with peers on ML projects and problem-solving tasks.",
  ],
};

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="section-container flex items-center justify-between py-3">
          <span className="font-semibold tracking-tight text-primary">
            AG | Data Science
          </span>
          <nav className="hidden sm:flex gap-4 text-sm text-slate-300">
            {[
              ["Home", "hero"],
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Education", "education"],
              ["Certificates", "certificates"],
              ["Achievements", "achievements"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="py-12 sm:py-20">
        <div className="section-container flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
          {/* Left content */}
          <div className="flex-1">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary/80">
              Data Science • Machine Learning • AI
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Hi, I&apos;m{" "}
              <span className="text-primary">{hero.name}</span>
            </h1>
            <h2 className="text-lg sm:text-xl text-slate-200 mb-3">
              {hero.title}
            </h2>
            <p className="text-slate-300 mb-4 max-w-xl">
              {hero.tagline}
            </p>
            <p className="text-sm text-slate-400 mb-6">
              📍 {hero.location}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#contact"
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition"
              >
                Contact Me
              </a>
              <a
                href={hero.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition"
              >
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <a
                href={hero.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </a>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>{hero.email}</span>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end flex-1">
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full border border-slate-700 bg-slate-900 shadow-xl overflow-hidden">
              {/* 
                IMPORTANT:
                - Place your image file at: /public/profile.jpg
                - Or change hero.photo above to match your file name.
              */}
              <img
                src={hero.photo}
                alt={hero.photoAlt}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="card space-y-4">
            <p>
              I am a B.Tech 3rd-year student specializing in{" "}
              <span className="font-semibold">
                Artificial Intelligence &amp; Machine Learning
              </span>
              , passionate Data Science, Artificial Intelligence, and Machine Learning.
               I am particularly engaged in data analysis, predictive modeling, and developing
                AI-driven solutions that convert raw data into actionable insights.
            </p>
            <p>
              My goal is to grow as a{" "}
              <span className="font-semibold">
                Data Scientist / Machine Learning Engineer
              </span>{" "}
              while staying adaptable to future roles in AI and emerging
              technologies.
            </p>
            <p>
              I actively work on machine learning projects, explore real-world datasets, and participate in
               technical challenges to continuously strengthen my analytical thinking and problem-solving
                capabilities.
            </p>
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                Hobbies &amp; Interests
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Exploring new AI tools &amp; technologies</li>
                <li>Participating in coding competitions &amp; ML challenges</li>
                <li>Working on machine learning challenges and data-driven projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <SkillCard title="Programming Languages" items={skills.languages} />
            <SkillCard
              title="Data Science & Machine Learning"
              items={skills.dsml}
            />
            <SkillCard title="Databases" items={skills.databases} />
            <SkillCard title="Tools & Platforms" items={skills.tools} />
            <SkillCard
              title="Core CS & AI Knowledge"
              items={skills.core}
              full
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="card flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-2">
                  {project.tag}
                </p>
                <p className="text-sm text-slate-300 mb-3">
                  {project.summary}
                </p>
                <p className="text-sm text-slate-300 mb-3">
                  {project.description}
                </p>
                <div className="mb-3">
                  <h4 className="text-sm font-semibold mb-1">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-1">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800 px-3 py-1 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-3 text-sm">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary/90 px-4 py-1.5 font-medium text-white hover:bg-primary transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-200 hover:border-primary hover:text-primary transition"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Internships */}
      <section id="experience" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">Experience & Internships</h2>
          <div className="space-y-6">
            {internships.map((intern) => (
              <div key={intern.role + intern.company} className="card">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  <h3 className="font-semibold">
                    {intern.role} —{" "}
                    <span className="text-primary">{intern.company}</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    {intern.duration}
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                  {intern.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Workshops & Hackathons short summary */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="font-semibold text-primary mb-2">
                Workshops
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                {workshops.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-primary mb-2">
                Hackathons & Tech Events
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                {hackathons.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="card space-y-3">
            <h3 className="font-semibold">{education.degree}</h3>
            <p className="text-sm text-primary">
              Specialization: {education.specialization}
            </p>
            <p className="text-sm text-slate-300">
              {education.college}
            </p>
            <p className="text-sm text-slate-400">
              {education.duration} • {education.year}
              {education.cgpa && ` • CGPA: ${education.cgpa}`}
            </p>
            <div>
              <h4 className="text-sm font-semibold mb-1">
                Relevant Coursework:
              </h4>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                {education.coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="py-12 border-t border-slate-900"
      >
        <div className="section-container">
          <h2 className="section-title">Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <CertCard title="Technical Certificates" items={certificates.technical} />
            <CertCard title="Internship Certificates" items={certificates.internships} />
            <CertCard title="Workshops & Bootcamps" items={certificates.workshops} />
            <CertCard title="Hackathon Participation" items={certificates.hackathons} />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">Achievements & Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <AchCard title="Major Achievements" items={achievements.major} />
            <AchCard title="Technical & Project Achievements" items={achievements.technical} />
            <AchCard title="Academic / Course Achievements" items={achievements.academic} />
            <AchCard title="Community & Leadership" items={achievements.community} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 border-t border-slate-900">
        <div className="section-container">
          <h2 className="section-title">Contact</h2>
          <div className="card space-y-4">
            <p className="text-sm text-slate-300">
              I&apos;m open to internships, project collaborations, and entry-level
              opportunities in Data Science, Machine Learning, and AI-related roles.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${hero.email}`}
                  className="text-primary hover:underline"
                >
                  {hero.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {hero.phone}
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href={hero.github}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {hero.github}
                </a>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href={hero.linkedin}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {hero.linkedin}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-4 mt-8">
        <div className="section-container text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {hero.name}. All rights reserved.
          </span>
          <span>Built with Next.js &amp; Tailwind CSS.</span>
        </div>
      </footer>
    </div>
  );
}

// Reusable components

function SkillCard({ title, items, full = false }) {
  return (
    <div className={`card ${full ? "md:col-span-2" : ""}`}>
      <h3 className="font-semibold mb-2 text-primary">{title}</h3>
      <div className="flex flex-wrap gap-2 text-sm">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800 px-3 py-1 text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CertCard({ title, items }) {
  return (
    <div className="card">
      <h3 className="font-semibold mb-2 text-primary">{title}</h3>
      <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function AchCard({ title, items }) {
  return (
    <div className="card">
      <h3 className="font-semibold mb-2 text-primary">{title}</h3>
      <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
