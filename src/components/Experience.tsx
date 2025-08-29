import React from "react";
import { GraduationCap, Award, Briefcase } from "lucide-react";

import { useLanguage } from "../hooks/useLanguage";

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      type: "education",
      icon: <GraduationCap size={20} />,
      title: t("education"),
      organization: "КГТУ",
      date: "2022-2024",
      description: t("educationDesc"),
    },
    {
      type: "education",
      icon: <GraduationCap size={20} />,
      title: t("frontendCourse"),
      organization: "OKURMEN",
      date: "2024",
      description: t("frontendCourseDesc"),
    },
    {
      type: "work",
      icon: <Briefcase size={20} />,
      title: t("internship"),
      organization: "Geeks",
      date: `2024 - ${t("present")}`,
      description: t("internshipDesc"),
    },
    {
      type: "certificate",
      icon: <Award size={20} />,
      title: t("juniorTeamLead"),
      organization: "Geeks",
      date: "2024",
      description: t("juniorTeamLeadDesc"),
    },
    {
      type: "work",
      icon: <Briefcase size={20} />,
      title: t("juniorDev"),
      organization: "Aisoft",
      date: `2025 - ${t("present")}`,
      description: t("juniorDevDesc"),
    },
    {
      type: "certificate",
      icon: <Award size={20} />,
      title: t("jsAdvanced"),
      organization: "freeCodeCamp",
      date: "2023",
      description: t("jsAdvancedDesc"),
    },
    {
      type: "work",
      icon: <Briefcase size={20} />,
      title: t("freelance"),
      organization: t("variousClients"),
      date: "2023 - 2025",
      description: t("freelanceDesc"),
    },
  ];

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-500";
      case "work":
        return "bg-green-500";
      case "certificate":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/3 w-28 h-28 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-1/3 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:scale-105 transition-transform duration-300">
            {t("experienceTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-x"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("experienceSubtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 animate-scale-y"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-slide-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 ${getBackgroundColor(
                    experience.type
                  )} rounded-full flex items-center justify-center text-white z-10 hover:scale-125 transition-transform duration-300 animate-pulse`}
                >
                  {experience.icon}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {experience.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 group-hover:scale-105 transition-transform duration-300">
                      {experience.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
