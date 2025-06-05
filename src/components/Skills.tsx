
const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      color: "blue",
      skills: [
        { name: "React", level: 75, icon: "⚛️" },
        { name: "JavaScript/TypeScript", level: 70, icon: "🟨" },
        { name: "CSS3/SCSS", level: 95, icon: "🎨" },
        { name: "HTML5", level: 98, icon: "🌐" },
        
        { name: "Tailwind CSS", level: 90, icon: "🎭" }
      ]
    },
    {
      title: "Back-end",
      color: "orange",
      skills: [
        { name: "Laravel", level: 90, icon: "🔴" },
        { name: "PHP", level: 70, icon: "🐘" },
        
        { name: "API REST", level: 85, icon: "🔗" },
        { name: "Python", level: 65, icon: "🐍" }
      ]
    },
    {
      title: "Base de données",
      color: "green",
      skills: [
        { name: "MySQL", level: 90, icon: "🗄️" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
      ]
    },
    {
      title: "Outils & DevOps",
      color: "purple",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "📱" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Linux", level: 65, icon: "🐧" },
        { name: "Figma", level: 80, icon: "🎨" }
      ]
    },
    {
  title: "Mobile",
  color: "teal",
  skills: [
    { name: "Flutter", level: 90, icon: "💙" },
    { name: "Dart", level: 85, icon: "🎯" },
    { name: "Responsive Design", level: 80, icon: "📱" }
  ]
},
{
  title: "WordPress",
  color: "gray",
  skills: [
    { name: "Installation & Configuration", level: 90, icon: "⚙️" },
    { name: "Thèmes & Personnalisation", level: 85, icon: "🎨" },
    { name: "Plugins & SEO", level: 80, icon: "🔌" },
    { name: "WooCommerce", level: 75, icon: "🛒" }
  ]
}


    
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        progress: "bg-blue-500"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        progress: "bg-orange-500"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        progress: "bg-green-500"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        progress: "bg-purple-500"
      },
      teal: {
  bg: "bg-teal-50",
  border: "border-teal-200",
  text: "text-teal-600",
  progress: "bg-teal-500"
},
      gray: {
  bg: "bg-gray-50",
  border: "border-teal-200",
  text: "text-teal-600",
  progress: "bg-teal-500"
}

    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-lg p-6 animate-fade-in hover-scale`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className={`text-xl font-semibold ${colorClasses.text} mb-6 text-center`}>
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center space-x-3">
                      <span className="text-lg">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className={`text-xs ${colorClasses.text} font-semibold`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${colorClasses.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Section certification/formation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Formation continue
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Toujours en veille technologique, je me forme continuellement aux dernières 
              technologies et méthodologies de développement pour offrir des solutions 
              modernes et performantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
