import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();
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

  const highlights = [
    {
      icon: Code,
      title: t('about.cleanCode'),
      description: t('about.cleanCodeDesc')
    },
    {
      icon: Palette,
      title: t('about.designFocused'),
      description: t('about.designFocusedDesc')
    },
    {
      icon: Zap,
      title: t('about.performance'),
      description: t('about.performanceDesc')
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3184291/pexels--3184291.jpeg"
                alt="Working on projects"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-accent-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.description1')}
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.experience')}</h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{t('about.experienceValue')}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('about.projects')}</h4>
                <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">{t('about.projectsValue')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;