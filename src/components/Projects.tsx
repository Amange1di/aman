import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../hooks/useLanguage";

import americanImg from "../img/american.png";

import nookatImg from "../img/nookat.png";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: "1",
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.desc"),
      longDescription: "",
      technologies: ["html", "scss", "js", "Django"],
      imageUrl: americanImg,
      demoUrl: "https://www.american-dream.kg/",
      featured: true,
    },
    {
      id: "2",
      title: t("projects.taskManager.title"),
      description: t("projects.taskManager.desc"),
      longDescription: "",
      technologies: ["React", "sass"],
     imageUrl: nookatImg,
      demoUrl: "https://nookat.gov.kg/",
      featured: true,
    },
    {
      id: "3",
      title: t("projects.weather.title"),
      description: t("projects.weather.desc"),
      longDescription:
        "An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful data visualizations. Features include location-based weather, 7-day forecasts, and interactive charts showing temperature and precipitation trends.",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      imageUrl:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: "4",
      title: "Я ещё не добавил все проекты, но они уже на подходе",
      description:"",
      longDescription:"",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      imageUrl:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    
  
  ];

  const categories = [
    { key: "all", label: t("projects.all") },
    { key: "featured", label: t("projects.featured") },
    { key: "web", label: t("projects.web") },
    { key: "mobile", label: t("projects.mobile") },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : selectedCategory === "featured"
      ? projects.filter((p) => p.featured)
      : selectedCategory === "mobile"
      ? projects.filter((p) => p.technologies.includes("React Native"))
      : projects.filter((p) => !p.technologies.includes("React Native"));

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-accent-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {t("projects.subtitle")}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.key
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Featured
                  </div>
                )}

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 transform hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t("projects.liveDemo")}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
