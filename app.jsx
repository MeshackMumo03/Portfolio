const me = () => (
    <section id="me">
        <img 
            src="Images/Passport.jpg" 
            alt="Profile Picture" 
        />
        <h2>Hello 👋👋</h2>
        <p>Hiiiiiiiiiiiiii, I'm Meshack Mumo, a software engineering student who is passionate about programming and interested in tech, especially current developing tech and majorly interested in Cyber-Security.</p>
    </section>
);

const AboutMe = () => (
    <section id="about">
        <div className="text-content">
            <h2>About Me</h2>
            <p>I'm a tech-obsessed software engineering student with a passion for building innovative solutions. Whether it's designing seamless full-stack applications, diving into the complexities of cybersecurity, or crafting Android apps, I love turning ideas into reality.</p>
            <p>Beyond coding, you'll find me immersed in console and PC gaming 🎮, shooting hoops on the basketball court 🏀, or smashing birdies on the badminton court. I'm also a huge fan of anime and cartoons—keeping 📺 my creativity and imagination fueled.</p>
            <p>If you're into tech, gaming, anime, or just want to chat about software development, let's connect!</p>
        </div>

    </section>
);

const Skills = () => (
    <section id="skills">
        <h2>Skills</h2>
        <p>Here are some of the skills that I have acquired:</p>
        <div className="skill-grid">
            <div className="skill-item">Full-Stack Development</div>
            <div className="skill-item">JavaScript, TypeScript</div>
            <div className="skill-item">React, Next.JS</div>
            <div className="skill-item">Cyber Security</div>
            <div className="skill-item">Networking</div>
            <div className="skill-item">Firebase</div>
            <div className="skill-item">Databases: MySQL</div>
            <div className="skill-item">Android Development</div>
        </div>
    </section>
);

const Projects = () => (
    <section id="projects">
        <h2>Projects</h2>
        <p>Below are some of the projects that I have done. For more, visit my GitHub profile below.</p>
        <div className="project-grid">
            <div className="project-item">
                <h3></h3>
                <a href="https://github.com/MeshackMumo03/ROS" target="_blank" rel="noopener noreferrer">ROS Android Application</a>
                <p>Report on Sale System App Overview ROS (Report on Sale) is an Android application designed for small to medium enterprises (SMEs) to streamline the process of sending daily sales reports to business owners. The app enables employees to efficiently record and manage daily sales data, which is then compiled into reports and sent directly to the business owner. ROS helps business owners stay updated on their sales performance with ease.</p>
            </div>
            <div className="project-item">
                <h3></h3>
                <a href="https://github.com/MeshackMumo03/SodaPopAdmin" target="_blank" rel="noopener noreferrer">SodaPopAdmin Application</a>
                <p>This project involves developing a distributed Android application to automate the operations of a business enterprise that sells drinks from various brands. The application allows administraters to moniter any branch, including the headquarters, and ensures that these orders are sent efficiently.</p>
            </div>
            <div className="project-item">
                <h3></h3>
                <a href="https://github.com/MeshackMumo03/Sodapop" target="_blank" rel="noopener noreferrer">SodaPop Consumer</a>
                <p>This project involves developing a distributed Android application to automate the operations of a business enterprise that sells drinks from various brands. The application allows customers to place orders at any branch, including the headquarters, and ensures that these orders are processed efficiently.</p>
            </div>
            <div className="project-item">
                <h3></h3>
                <a href="https://github.com/MeshackMumo03/Tic-Tac-Toe-4-by-4" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe-4-by-4</a>
                <p>An advanced version of the traditional Tic-Tac-Toe game, played on a 4x4 grid. <br>
                </br>If you want to try it out just click on the link here: <br></br> <a href="https://meshackmumo03.github.io/Tic-Tac-Toe-4-by-4/" target="_blank" rel="noopener noreferrer">4*4 TicTacToe</a></p>
            </div>
            <div className="project-item">
                <h3></h3>
                <a href="https://github.com/MeshackMumo03/Game_Repo" target="_blank" rel="noopener noreferrer">Game Repo</a>
                <p>This is currently where all the games that I have tried to remake and also to make are stored in.</p>
            </div>
        </div>
    </section>
);

const Certifications = () => (
    <section id="certifications">
        <h2>Licenses & Certifications</h2>
        <p>Below are some of the certifications that I have acquired. For more, visit my LinkedIn profile below.</p>
        <ul>
            <li>Azure Responsible AI Workshop</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Introduction to Cybersecurity</li>
            <li>Java Programming and Software Engineering Fundamentals</li>
            <li>Introduction to Packet Tracer</li>
        </ul>
    </section>
);

const Hobbies = () => (
    <section id="hobbies">
        <h2>Hobbies & Interests</h2>
        <p>If I'm not crunching code 💻 and making my bright imaginations come to life with code ✨, you'll find me watching anime 📺🍿, crushing it on the basketball court 🏀💪, and eliminating my enemies in games 🎮👾.</p>
    </section>
);

const Contact = () => (
    <section id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me on my email, or my socials below:</p>
        <p>Email: meshackmumo04@gmail.com</p>
    </section>
);

const SocialIcons = () => (
    <div className="social-icons">
        <a href="mailto:meshackmumo04@gmail.com">
            <img src="Images/Email.jpeg" alt="Email" />
        </a>
        <a href="https://www.instagram.com/meshy_bear/" target="_blank" rel="noopener noreferrer">
            <img src="Images/Instagram.jpeg" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/meshack-mutisya-2b82b51a6" target="_blank" rel="noopener noreferrer">
            <img src="Images/LinkedIn.jpeg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/MeshackMumo03" target="_blank" rel="noopener noreferrer">
            <img src="Images/GitHub.jpeg" alt="GitHub" />
        </a>
    </div>
);

const App = () => (
    <div className="app-container">
        <header>
            <h1>Meshack Mumo</h1>
            <nav>
                <a href="#me"></a>
                <a href="#about">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#certifications">Certifications</a>
                <a href="#hobbies">Hobbies</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main>
            {me()}
            <hr />
            <AboutMe />
            <hr />
            <Skills />
            <hr />
            <Projects />
            <hr />
            <Certifications />
            <hr />
            <Hobbies />
            <hr />
            <Contact />
            <hr />
            <SocialIcons />
        </main>
        <footer>
            <p>© 2024 Meshack Mumo</p>
        </footer>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));