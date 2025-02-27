import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Untitled (500 x 500 px).png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/KarthikaSethunathResume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="Hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                src={heroImg} 
                className={styles.hero} 
                alt="Profile picture of Karthika Sethunath" />
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt="Color mode icon"
                    onClick={() => {
                        toggleTheme();
                      }} />
        </div>
        <div className={styles.info}>
            <h1>
                Karthika
                <br />
                Sethunath
            </h1>
            <h2>
                Data Scientist
            </h2>
            <span>
                    <a href="http://github.com/" target="_blank">
                     <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="http://linkedin.com/" target="_blank">
                     <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
            </span>
            <p className={styles.description}>
                Data-driven professional skilled in analytics, machine learning, and cloud technologies.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
