import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Header
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",

    // Hero
    "hero.greeting": "Привет, я",
    "hero.description":
    "фронтенд-мастер, который разговаривает с браузерами на их языке и добивается результата.",

    "hero.viewWork": "Посмотреть работы",

    // About
    "about.title": "Обо мне",
    "about.subtitle":
      "Frontend-разработчик с опытом около 1.5 лет, создаю удобные и современные интерфейсы.",
    "about.description1":
      "Я начал путь в веб-разработке с интереса и практики. Сейчас я создаю интерфейсы, которые не только работают, но и выглядят хорошо.",
    "about.description2":
      "Мне нравится изучать новые технологии, работать в команде и делать проекты, которые приносят пользу. Я верю, что постоянное развитие — ключ к успеху.",
    "about.experience": "Опыт",
    "about.experienceValue": "1.5 года",
    "about.projects": "Проекты",
    "about.projectsValue": "10+ завершено",
    "about.cleanCode": "Чистый код",
    "about.cleanCodeDesc":
      "Пишу читаемый и аккуратный код, стараясь придерживаться хороших практик.",
    "about.designFocused": "Фокус на дизайн",
    "about.designFocusedDesc":
      "Создаю понятный и приятный интерфейс, с которым удобно работать.",
    "about.performance": "Производительность",
    "about.performanceDesc":
      "Оптимизирую приложение для быстроты и удобства на всех устройствах.",

    // Skills
    "skills.title": "Навыки и технологии",
    "skills.subtitle":
      "Технологии, с которыми я работаю, чтобы создавать современные и адаптивные сайты.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend (основы)",
    "skills.tools": "Инструменты и сборка",
    "skills.design": "Работа с дизайном",
    "skills.techStack": "Мой стек технологий",
    experienceTitle: "Опыт и образование",
    experienceSubtitle:
      "Мой путь в разработке: обучение, стажировки и реальный опыт работы",
juniorTeamLead: "Младший тимлид",
juniorTeamLeadDesc:
  "Руководство небольшой командой фронтенд-разработчиков, распределение задач, контроль сроков и качества кода. Участие в планировании спринтов и поддержка коллег в решении технических вопросов.",

    education: "Политехнический колледж КГТУ им. И. Раззакова",
    educationDesc:
      "Специальность: Программное обеспечение вычислительной техники и автоматизированных систем (ПОВТАС).",

    frontendCourse: "Курс Frontend-разработки (Окурмен)",
    frontendCourseDesc:
      "Интенсивное обучение современному фронтенду с упором на HTML, CSS, JavaScript, React и реальные проекты",

    internship: "Стажировка в Geeks_Pro",
    internshipDesc:
      "Работа над реальными проектами в команде. Создание интерфейсов с использованием React и Tailwind CSS, участие в созвонах, улучшение навыков Git и командной работы",

    juniorDev: "Junior Frontend Developer ",
    juniorDevDesc:
      "Разработка и поддержка веб-приложений с использованием React, Redux, взаимодействие с backend, соблюдение принципов Agile",

    jsAdvanced: "JavaScript и TypeScript",
    jsAdvancedDesc:
      "Хорошее знание ES6+, асинхронного программирования, основ TypeScript, понимание работы с REST API",

    freelance: "Фриланс и личные проекты",
    freelanceDesc:
      "Разработка лендингов, сайтов доставки еды, портфолио и админ-панелей для локальных клиентов и собственного стартапа",

    present: "настоящее время",
    variousClients: "Geeks_Pro, AImektep, личные клиенты",

    // Projects
    "projects.title": "Мои проекты",
    "projects.subtitle":
      "Некоторые из работ, над которыми я трудился, используя разные подходы и технологии.",
    "projects.all": "Все",
    "projects.featured": "Избранные",
    "projects.web": "Веб",
    "projects.mobile": "Мобильные",
    "projects.liveDemo": "Демо",
    "projects.code": "Код",
    "projects.ecommerce.title": "American Dream",
    "projects.ecommerce.desc":
      "Сайт American Dream, предлагающий курсы английского языка и IT. Представлена информация о курсах и преподавателях.",
    "projects.taskManager.title": "Ноокат администрация",
    "projects.taskManager.desc":
      "Сайт администрации Ноокатского района, информирующий жителей о социально-экономическом развитии, программах и услугах района. Проект помогает улучшить связь между властями и населением.",
    "projects.weather.title": "Ислам академия",
    "projects.weather.desc": "Ислам академия",
    "projects.portfolio.title": "Сайт-портфолио",
    "projects.portfolio.desc":
      "Личный сайт с тёмной темой и адаптивным дизайном.",
    "projects.social.title": "Панель аналитики",
    "projects.social.desc":
      "Панель для просмотра статистики и данных по соцсетям.",
    "projects.recipe.title": "Поиск рецептов",
    "projects.recipe.desc": "Приложение для поиска блюд по ингредиентам.",

    // Footer
    "footer.description":
      "Frontend-разработчик, который любит создавать полезные и простые решения.",
    "footer.quickLinks": "Навигация",
    "footer.getInTouch": "Контакты",
    "footer.madeWith": "Сделано с",
    "footer.coffee": "и чашкой кофе :)",
    "footer.builtWith": "Разработано на React и Tailwind CSS",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    // Hero
    "hero.greeting": "Hi, I am",
    "hero.description":
    "A frontend master who speaks the language of browsers and gets results",
    "hero.viewWork": "View Work",
    "hero.getInTouch": "Get in Touch",
    // About
    "about.title": "About Me",
    "about.subtitle":
      "Frontend developer with about 1.5 years of experience, creating modern interfaces.",
    "about.description1":
      "I started my web development journey out of curiosity and practice. Now I create interfaces that not only work but also look good.",
    "about.description2":
      "I enjoy learning new technologies, working in a team, and making projects that are useful. I believe constant growth is the key to success.",
    "about.experience": "Experience",
    "about.experienceValue": "1.5 years",
    "about.projects": "Projects",
    "about.projectsValue": "10+ completed",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc":
      "I write readable and neat code, following best practices.",
    "about.designFocused": "Design Focused",
    "about.designFocusedDesc":
      "I create clear and pleasant interfaces that are easy to use.",
    "about.performance": "Performance",
    "about.performanceDesc":
      "I optimize apps for speed and usability on all devices.",
    // Skills
    "skills.title": "Skills & Technologies",
    "skills.subtitle":
      "Technologies I use to build modern and responsive sites.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend (basics)",
    "skills.tools": "Tools & Build",
    "skills.design": "Design",
    "skills.techStack": "My Tech Stack",

    experienceTitle: "Experience & Education",
    experienceSubtitle:
      "My development journey: education, internships, and real‑world work",

    education:
      "Polytechnic College, I. Razzakov Kyrgyz State Technical University",
    educationDesc:
      "Specialty: Software for Computer Engineering and Automated Systems (POVTAS). ",
juniorTeamLead: "Junior Team Lead",
juniorTeamLeadDesc:
  "Leading a small team of frontend developers, task allocation, deadline and code quality control. Participated in sprint planning and supported team members in solving technical challenges.",

    frontendCourse: "Frontend Development Course (Okurmen)",
    frontendCourseDesc:
      "An intensive program covering modern frontend stack with a focus on HTML, CSS, JavaScript, React, and project‑based learning",

    internship: "Internship at Geeks_Pro",
    internshipDesc:
      "Worked on real projects in a team. Built UIs with React and Tailwind CSS, joined daily stand‑ups, and improved Git & collaboration skills",

    juniorDev: "Junior Frontend Developer AImektep",
    juniorDevDesc:
      "Developed and maintained web apps using React and Redux, collaborated with backend engineers, and followed Agile processes",

    jsAdvanced: "JavaScript & TypeScript",
    jsAdvancedDesc:
      "Solid grasp of ES6+, asynchronous programming, REST API integration, and TypeScript fundamentals",

    freelance: "Freelance & Personal Projects",
    freelanceDesc:
      "Built landing pages, food‑delivery sites, portfolios, and admin panels for local clients and my own startup",

    present: "present",
    variousClients: "Geeks_Pro, AImektep , personal clients",

    // Projects
    "projects.title": "My Projects",
    "projects.subtitle":
      "Some works I have done using different approaches and technologies.",
    "projects.all": "All",
    "projects.featured": "Featured",
    "projects.web": "Web",
    "projects.mobile": "Mobile",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",
    "projects.ecommerce.title": "American Dream",
    "projects.ecommerce.desc":
      "Website for an American Dream offering English and IT courses. Information about courses and instructors is provided.",
    "projects.taskManager.title": "Nookat Administration",
    "projects.taskManager.desc":
      "The website of the Nookat district administration, informing residents about the socio-economic development, programs and services of the district. The project helps to improve communication between the authorities and the public.",
    "projects.weather.title": "Islam Academy",
    "projects.weather.desc": "Islam Academy",
    "projects.portfolio.title": "Portfolio Website",
    "projects.portfolio.desc":
      "Personal site with dark mode and responsive design.",
    "projects.social.title": "Analytics Dashboard",
    "projects.social.desc":
      "Dashboard for viewing social media stats and data.",
    "projects.recipe.title": "Recipe Finder",
    "projects.recipe.desc": "App for searching dishes by ingredients.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle":
      "Have an idea or want to discuss a project? Write to me!",
    "contact.letsConnect": "Let’s Connect",
    "contact.description":
      "Ready to discuss cooperation, projects, or just chat about development.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.followMe": "Follow Me",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "example@mail.com",
    "contact.subjectPlaceholder": "What is it about?",
    "contact.messagePlaceholder": "Describe your project or just say hi :)",
    "contact.sendMessage": "Send",
    "contact.messageSent": "Message sent! I will reply soon.",
    // Footer
    "footer.description":
      "Frontend developer who loves to create useful and simple solutions.",
    "footer.quickLinks": "Navigation",
    "footer.getInTouch": "Contacts",
    "footer.madeWith": "Made with",
    "footer.coffee": "and a cup of coffee :)",
    "footer.builtWith": "Built with React and Tailwind CSS",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language;
      if (stored) return stored;
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith("ru") ? "ru" : "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const langTranslations = translations[language] || translations["ru"];
    return langTranslations[key as keyof typeof langTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
