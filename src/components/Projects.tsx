
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  // Projets d'exemple - Zakaria pourra facilement modifier ces données
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Application web de gestion de stock ",
      description: "Stocker est une application web de gestion de stock développée avec Laravel. Elle permet de suivre les produits, les ventes, les achats et les fournisseurs via un tableau de bord dynamique. Le projet inclut aussi une version mobile connectée à l’API pour une gestion en temps réel, accessible et sécurisée.",
      technologies: ["Laravel ", "Blade", "MySQL ", "CSS " ,"JavaScript"],
      image: "stocker.png",
      featured: true
    },
    {
      id: 2,
      title: " Application mobile – Stocker",
      description: "L'application mobile Stocker permet à l’administrateur de suivre l’état du stock, les produits, les ventes et les bénéfices en temps réel. Elle est connectée directement à l’API Laravel de l’application web, offrant une consultation rapide et fluide depuis un smartphone.",
      technologies: ["Flutter ", "Dart ", "Laravel API ", "HTTP package"],
      image: "mob.png",
     
      featured: true
    },
    {
      id: 3,
      title: "gestion des stations-service ⛽",
      description: "Application e-commerce complète avec panier, paiements et gestion admin. Interface moderne et responsive avec authentification utilisateur.",
      technologies: ["React js", "Express js", "Api"],
      image: "station.png",
    },

        {
      id: 4,
      title: "Site e-commerce – Vente de produits électroniques",
      description: "Développement d’un site WordPress avec catalogue produit, paiement en ligne et interface responsive pour une société spécialisée en électronique.",
      technologies: ["Wordpress", "WooCommerce"],
      image: "word.png",
     
    },
        {
      id: 4,
      title: " Application mobile des horaires de prière (Adhan)",
      description: " Développement d’une application mobile avec Flutter permettant d’afficher les horaires précis des prières quotidiennes selon la localisation de l’utilisateur. Intégration d’une interface simple et intuitive, avec prise en charge des notifications pour l’Adhan.",
      technologies: ["flutter", "API", "dart"],
      image: "adhan.png",
      liveUrl: "https://exemple.com"
    },
            {
      id: 4,
      title: " Application météo",
      description: "Développement d’une application web avec React.js et CSS, affichant les conditions météorologiques en temps réel grâce à l’intégration d’une API météo. Interface simple, responsive et conviviale.",
      technologies: ["react js", "css", "API","html"],
      image: "weather.png",
      
    },
                {
      id: 4,
      title: " Cosmic Tic-Tac-Toe",
      description: "Un jeu de morpion au design futuriste avec un thème cosmique, offrant deux modes de jeu : VS Player et VS Bot. L'interface épurée, avec un dégradé violet et une grille 3x3 interactive, permet de jouer et de réinitialiser la partie via un bouton dédié. Développé en typescript , css , ce projet met en avant mes compétences en conception d'interface et en logique de jeu.",
      technologies: ["typescript", "css"],
      image: "tictactoe.jpg",
      
    },
                    {
      id: 4,
      title: "Calculatrice Moderne",
      description: "Une calculatrice numérique au design futuriste, dotée d'une interface épurée et intuitive. Elle permet des calculs de base (+, -, ×, /) avec un affichage clair et une section Historique pour suivre les opérations. Développée en HTML, CSS et JavaScript, cette application met en avant un style visuel soigné avec un liseré bleu néon, des boutons colorés (rouge pour C, vert pour =, doré pour les opérateurs), et une ergonomie optimisée.",
      technologies: ["html", "css" , "javascript"],
      image: "calculatrice.png",
      
    }
  ]);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes
          </p>
        </div>

        {/* Projets mis en avant */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Projets principaux
          </h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
  {featuredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} featured />
  ))}
</div>

        </div>

        {/* Autres projets */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Autres réalisations
          </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {otherProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover-scale transition-all duration-300 ${featured ? 'md:col-span-1' : ''}`}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
