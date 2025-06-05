
import { ArrowDown, Download, MapPin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#apropos");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // You can replace this URL with the actual path to Zakaria's CV
    const cvUrl = "/public/cv/CV-ZAKARIA FETTAH.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-ZAKARIA FETTAH';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Photo de profil */}
          <div className="mb-12">
            <div className="relative inline-block">
              <img
  src="/public/images/profil.png"
  alt="Zakaria - Développeur Web Full Stack"
  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto shadow-2xl border-4 border-white transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
/>

              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
            Zakaria Fettah
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-4 tracking-wide">
            Développeur Web Full Stack
          </h2>

          {/* Localisation */}
          <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
            <MapPin size={18} />
            <span className="text-lg">Maroc</span>
          </div>

          {/* Description courte */}
          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Créateur d'expériences web modernes et performantes. 
            <br className="hidden md:block" />
            Je transforme vos idées en solutions digitales innovantes.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.querySelector("#projets")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover-scale shadow-lg hover:shadow-xl"
            >
              Découvrir mes projets
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-slate-300 text-slate-700 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 hover-scale"
            >
              Me contacter
            </button>
            <button
              onClick={downloadCV}
              className="bg-slate-900 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-200 hover-scale flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Télécharger CV
            </button>
          </div>



          {/* Flèche vers le bas */}
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
