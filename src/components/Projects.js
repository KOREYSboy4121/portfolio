function Projects() {
  const projectList = [
    { name: "Mirro Figma clone", link: "https://mirro-figma-abdujalil.netlify.app/" },
    { name: "Cyber kalkulyator", link: "https://cyber-kalkulyator.netlify.app/" },
    { name: "Taqdir Ko'pto'ki", link: "https://taqdir-koptogi.netlify.app/" },
    { name: "Im Jo Breed clone", link: "https://im-jo-breed.netlify.app/" },
    { name: "Snake Game", link: "snake-game-1bit.netlify.app" },
    { name: "BANAN MARKET", link: "https://github.com/KOREYSboy4121/BANAN-MARKET" },
    { name: "My SV", link: "https://sv-abdujalil.netlify.app/" },


  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noreferrer">
            <div className="project-card">
              <h3>{project.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;