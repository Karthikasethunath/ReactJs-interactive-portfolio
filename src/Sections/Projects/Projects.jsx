import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/chat-bot.png';
import freshBurger from '../../assets/new-normality.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={viberr} 
            link="https://github.com/Karthikasethunath/AI-job-displacement"
            h3="Healthcare analytics"
            p="Derma-AI chatbot"
        />
        <ProjectCard 
            src={freshBurger} 
            link="https://github.com/Karthikasethunath/AI-job-displacement"
            h3="Power BI project"
            p="Covid-19 Dashboard"
        />
      </div>
    </section>
  );
}

export default Projects;