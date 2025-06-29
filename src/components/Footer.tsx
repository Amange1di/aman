import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();


  const socialLinks = [
    { icon: Github, href: 'https://github.com/Amange1di', label: 'GitHub' },
    // { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:amangeldi2702006@gmail.com', label: 'Email' },
  ];

 
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-200">
             Amangeldi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

       
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              {t('footer.getInTouch')}
            </h4>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                Osh City, Kyrgyzstan
              </p>
              <a
                href="mailto:amangeldi2702006@gmail.com"
                className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                amangeldi2702006@gmail.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                +996 551 047 454
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
              © {currentYear} Amangeldi. {t('footer.madeWith')}{' '}
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current animate-pulse" />
              {t('footer.coffee')}
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;