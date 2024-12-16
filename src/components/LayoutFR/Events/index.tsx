"use client"

import React, { useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  location: string;
  type: "prochaine" | "passé";
  price?: string;
  capacity?: number;
  speakers?: string[];
  agenda?: { time: string; activity: string }[];
};

const events: Event[] = [
  {
    id: "1",
    title: "Sommet de l'innovation en matière d'IA 2024",
    description: "Rejoignez-nous pour une discussion passionnante sur les dernières tendances de l'IA et leur impact sur la transformation des entreprises.",
    date: "15-06-2024",
    image: "/images/events/event.jpg",
    location: "Paris, France",
    type: "prochaine",
    price: "Gratuit",
    capacity: 200,
    speakers: ["Dr. Sarah Johnson", "Prof. Marc Dubois"],
    agenda: [
      { time: "09h00", activity: "Inscription et café de bienvenue" },
      { time: "09h30", activity: "Discours d'ouverture" },
      { time: "10h30", activity: "Panel sur l'IA dans les entreprises" },
    ]
  },
  {
    id: "2",
    title: "Atelier sur l'analyse des données",
    description: "Un atelier pratique au cours duquel nous avons exploré des techniques avancées d'analyse de données et des applications du monde réel.",
    date: "20-03-2024",
    image: "/images/events/event.jpg",
    location: "Lyon, France",
    type: "passé",
    speakers: ["Marie Laurent", "Thomas Bernard"],
  },
];

type RegistrationForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

const Events = () => {
  const [activeTab, setActiveTab] = useState<"prochaine" | "passé">("prochaine");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
  });

  const filteredEvents = events.filter(event => event.type === activeTab);

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour traiter l'inscription
    console.log("Registration data:", formData);
    setShowRegistrationModal(false);
    // Réinitialiser le formulaire
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 mt-[45px] md:mt-[175px]">
      <div className="container">
        <div className="relative z-10 mx-auto mb-14 max-w-[760px] text-center">
          {/* <div className="bottom-30 absolute hidden w-full px-4 md:block">
            <div className="mx-auto max-w-[700px]">
              <img
                src="/images/logo/logo.png"
                alt="about-image"
                className="h-full w-full opacity-10"
              />
            </div>
          </div> */}
          
          {/* Introduction text */}
          <p className="text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl">
          Chers partenaires et futurs partenaires de la communauté DATALYS, nous avons le plaisir de partager avec vous les moments extraordinaires que nous avons vécus lors de nos événements passés et de nos rencontres à venir.
          </p>

          {/* Tab navigation */}
          <div className="flex justify-center space-x-4 mt-8 mb-12">
            <button
              onClick={() => setActiveTab("prochaine")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "prochaine"
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Événements à venir
            </button>
            <button
              onClick={() => setActiveTab("passé")}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === "passé"
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              Événements passés
            </button>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-primary transition-all"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>

                  {/* Event details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </span>
                    </div>
                    
                    {event.price && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Prix:</span> {event.price}
                      </div>
                    )}
                    
                    {event.capacity && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Capacité:</span> {event.capacity} participants
                      </div>
                    )}

                    {event.speakers && (
                      <div className="text-sm text-gray-400">
                        <span className="font-semibold">Intervenants:</span>
                        <div className="ml-2">
                          {event.speakers.map((speaker, index) => (
                            <div key={index}>{speaker}</div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="text-primary hover:text-primary/80 text-sm underline"
                    >
                      Voir les détails
                    </button>
                    
                    {event.type === "prochaine" && (
                      <button
                        onClick={() => {
                          setSelectedEvent(event);
                          setShowRegistrationModal(true);
                        }}
                        className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition-all"
                      >
                        S'inscrire maintenant
                      </button>
                    )}
                    
                    {event.type === "passé" && (
                      <button className="inline-block bg-gray-600 text-gray-300 px-6 py-2 rounded-full cursor-not-allowed">
                        Événement terminé
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Event Details Modal */}
          {selectedEvent && !showRegistrationModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold text-white mb-4">{selectedEvent.title}</h2>
                
                {selectedEvent.agenda && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Agenda</h3>
                    <div className="space-y-2">
                      {selectedEvent.agenda.map((item, index) => (
                        <div key={index} className="flex gap-4 text-gray-300">
                          <span className="font-medium">{item.time}</span>
                          <span>{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

          {/* Registration Modal */}
          {showRegistrationModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
              <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-white mb-4">S'inscrire pour {selectedEvent?.title}</h2>
                
                <form onSubmit={handleRegistration} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-1">Prénom</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Nom</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Entreprise</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-1">Titre du poste</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-2 justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setShowRegistrationModal(false)}
                      className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/80"
                    >
                      S'enregistrer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Events;
