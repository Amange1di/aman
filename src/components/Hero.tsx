import React, { useEffect, useState } from "react";
import { ArrowDown, Github,Instagram,  Linkedin, Mail, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { SiTelegram } from 'react-icons/si';

import user from "../img/user.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-200 dark:bg-accent-900 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 dark:bg-pink-900 rounded-full opacity-10 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-200 dark:bg-yellow-900 rounded-full opacity-15 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div
            className={`mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative inline-block">
              <img
                src={user}
                alt="Amangeldi"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-700 animate-pulse"></div>
              <Sparkles
                className="absolute -top-4 -left-4 w-6 h-6 text-yellow-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {t("hero.greeting")}{" "}
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent animate-gradient-x">
                Amangeldi
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{t("hero.viewWork")}</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
              </span>
            </button>
           
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Amange1di",
                delay: "0ms",
              },
              {
                icon: SiTelegram,
                href: "https://t.me/amangeldi0102",
                delay: "0ms",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/amangeldi._._._",
                delay: "0ms",
              },
              // { icon: Linkedin, href: 'https://linkedin.com', delay: '100ms' },
              {
                icon: Mail,
                href: "mailto:amangeldi2702006@gmail.com",
                delay: "200ms",
              },
            ].map(({ icon: Icon, href, delay }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
                style={{ animationDelay: delay }}
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transition-all duration-1000 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="animate-bounce-gentle">
              <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
