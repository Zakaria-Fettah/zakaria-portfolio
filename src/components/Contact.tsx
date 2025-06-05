import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });

  emailjs.init("6K3i9tJNeIELEowXo");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ddifzz8",
      "template_98ytpfh",
      formData
    )
    .then(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ nom: "", email: "", sujet: "", message: "" });
    })
    .catch((error) => {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue, merci de réessayer plus tard.",
      });
      console.error("Erreur EmailJS:", error);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zakariafettah52@gmail.com",
      href: "mailto:zakariafettah52@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 7 73 36 12 20",
      href: "tel:+212773361220"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Maroc",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zakaria-fettah-40bab3314/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Zakaria-Fettah",
      color: "hover:text-gray-900"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:zakariafettah52@gmail.com",
      color: "hover:text-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une idée de projet ? Discutons ensemble de vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Restons en contact
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              N'hésitez pas à me contacter pour discuter de vos projets web. 
              Je suis toujours ravi d'échanger sur de nouvelles opportunités 
              et défis techniques.
            </p>

            {/* Informations de contact */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <info.icon size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Suivez-moi
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white p-3 rounded-lg shadow-md text-gray-600 ${social.color} transition-all duration-200 hover-scale`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 hover-scale"
                >
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Zakaria Fettah - Développeur Web Full Stack. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
