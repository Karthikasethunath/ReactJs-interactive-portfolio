import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/chat-bot.png';
import freshBurger from '../../assets/new-normality.png';
import coding from '../../assets/coding.png';
import machinelearning from '../../assets/machine-learning.png';
import upload from '../../assets/upload.png';
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
            src={coding} 
            link="https://github.com/Karthikasethunath/AI-job-displacement"
            h3="React js project"
            p="Portfolio website creation"
        />
        <ProjectCard 
            src={freshBurger} 
            link="https://github.com/Karthikasethunath/AI-job-displacement"
            h3="Power BI project"
            p="Covid-19 Dashboard"
        />
        <ProjectCard 
            src={upload} 
            link="https://github.com/Karthikasethunath/AI-job-displacement"
            h3="AWS project"
            p="Cloud computing"
        />
        <ProjectCard 
            src={machinelearning} 
            link="https://github.com/Karthikasethunath/AI-job-displacement"
            h3="Explainable ML project"
            p="GradCAM Variations"
        />    
      </div>
    </section>
  );
}

export default Projects;