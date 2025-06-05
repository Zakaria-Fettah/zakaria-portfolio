
const About = () => {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionné par l'innovation et l'excellence technique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Zakaria au travail"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              
            </div>
          </div>

          {/* Contenu */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
              Développeur passionné par l'innovation technologique
            </h3>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                👋 Je m'appelle Zakaria Fettah, développeur web full stack passionné par l’innovation digitale et les technologies modernes.
              </p>

              <p>
                Je conçois et développe des applications web, mobiles et des sites WordPress en combinant performance, simplicité et expérience utilisateur. Mon approche est centrée sur la qualité du code, la compréhension des besoins métiers, et la création de solutions fiables et évolutives.
              </p>

              <p>
                Toujours en quête de nouveaux défis, je suis motivé par l'envie d'apprendre, d’innover et de livrer des projets concrets qui ont un vrai impact.
              </p>
            </div>

            {/* Expertise */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold text-slate-900 mb-6">Domaines d'expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Développement Front-End",
                  "Développement Back-End",
                  "Applications Mobiles",
                  "CMS & Sites Web",
                  "Intégration API",
                  "Gestion de projet & Collaboration"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
