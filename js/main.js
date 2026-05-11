const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.work': 'Work',
        'nav.contact': 'Contact',
        'hero.role': 'ICT Professional & System Specialist',
        'hero.badge1': 'IT Medewerker',
        'hero.badge2': 'SNE Student',
        'hero.badge3': 'Entrepreneur',
        'hero.badge4': 'Freelancer',
        'hero.cta': 'Explore My Projects',
        'footer.text': '© 2026 Ferrence Tjokrokario. All Rights Reserved.',
        'about.title': 'Ferrence MDL Tjokrokario',
        'about.nameHeading': 'Ferrence MDL Tjokrokario',
        'about.sectionTitle': 'Biography',
        'about.paragraph': 'With 8 years of experience in the ICT industry, I specialize in bridging the gap between complex hardware and user-centric solutions. From system administration to prototyping smart traffic infrastructure, I apply a meticulous engineer\'s eye to every challenge.',
        'about.bioLabel': 'I grew up in a small town in Suriname, in Para, and have always been fascinated by technology and its potential to improve lives. In my free time, I develop various skills in the field of ICT and automotive customization.',
        'about.introText': 'I grew up in a small town in Suriname, in Para, and have always been fascinated by technology and its potential to improve lives. In my free time, I develop various skills in the field of ICT and automotive customization.',
        'about.academicPath': 'Academic Path',
        'about.eduDetail': 'UNASAT<br>System and Network Engineering (SNE)',
        'about.eduNote': 'Focusing on scalable infrastructure and smart technology integration.',
        'work.title': 'Selected Projects',
        'work.project1.title': 'Smart Traffic Lights',
        'work.project1.desc': 'An intelligent traffic regulation prototype designed for Paramaribo, utilizing ESP32 microcontrollers and IR sensors to optimize traffic flow.',
        'work.project1.tech': 'C++ | ESP32 | IoT',
        'work.project2.title': 'Decibel Corporation',
        'work.project2.desc': 'Custom automotive styling, audio systems, and electronics integration for high-performance vehicles.',
        'work.project2.tech': 'Automotive Tech | Prototyping',
        'contact.title': 'Contact us',
        'contact.desc': 'Whether you have a technical question, a project proposal, or just want to say hello, feel free to reach out.',
        'contact.email.label': 'Email:',
        'contact.phone.label': 'Phone:',
        'contact.location.label': 'Location:',
        'contact.email': 'itzzferry171@gmail.com',
        'contact.phone': '+597 863-9113',
        'contact.location': 'Paramaribo, Suriname',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Your Message',
        'contact.form.submit': 'Send Message'
    },
    nl: {
        'nav.home': 'Home',
        'nav.about': 'Over',
        'nav.work': 'Werk',
        'nav.contact': 'Contact',
        'hero.role': 'ICT Professional & Systeem Specialist',
        'hero.badge1': 'IT Medewerker',
        'hero.badge2': 'SNE Student',
        'hero.badge3': 'Ondernemer',
        'hero.badge4': 'Freelancer',
        'hero.cta': 'Bekijk Mijn Projecten',
        'footer.text': '© 2026 Ferrence Tjokrokario. Alle rechten voorbehouden.',
        'about.title': 'Ferrence MDL Tjokrokario',
        'about.nameHeading': 'Ferrence MDL Tjokrokario',
        'about.sectionTitle': 'Biografie',
        'about.paragraph': 'Met 8 jaar ervaring in de ICT-sector specialiseer ik mij in het overbruggen van de kloof tussen complexe hardware en gebruiksvriendelijke oplossingen. Van systeemadministratie tot het prototypen van slimme verkeersinfrastructuur, ik gebruik een nauwgeziene technische blik bij elke uitdaging.',
        'about.bioLabel': 'Ik ben opgegroeid in een klein stadje in Suriname, in Para, en ben altijd al gefascineerd geweest door technologie en de mogelijkheden ervan om levens te verbeteren. In mijn vrije tijd ontwikkel ik verschillende vaardigheden op het gebied van ICT en auto-aanpassingen(Pimp Your Ride).',
        'about.introText': 'Ik ben opgegroeid in een klein stadje in Suriname, in Para, en ben altijd al gefascineerd geweest door technologie en de mogelijkheden ervan om levens te verbeteren. In mijn vrije tijd ontwikkel ik verschillende vaardigheden op het gebied van ICT en auto-aanpassingen(Pimp Your Ride).',
        'about.academicPath': 'Opleidingspad',
        'about.eduDetail': 'UNASAT<br>Systeem- en Netwerking Engineering (SNE)',
        'about.eduNote': 'Met focus op schaalbare infrastructuur en slimme technologie-integratie.',
        'work.title': 'Geselecteerde Projecten',
        'work.project1.title': 'Slimme Verkeerslichten',
        'work.project1.desc': 'Een prototype voor intelligente verkeersregeling voor Paramaribo, met ESP32-microcontrollers en IR-sensoren om de doorstroming te optimaliseren.',
        'work.project1.tech': 'C++ | ESP32 | IoT',
        'work.project2.title': 'Decibel Corporation',
        'work.project2.desc': 'Maatwerk auto-styling, audiosystemen en elektronica-integratie voor high-performance voertuigen.',
        'work.project2.tech': 'Automotive Tech | Prototyping',
        'contact.title': 'Neem Contact Op',
        'contact.desc': 'Of je nu een technische vraag hebt, een projectvoorstel wilt doen, of gewoon wilt groeten, neem gerust contact op.',
        'contact.email.label': 'E-mail:',
        'contact.phone.label': 'Telefoon:',
        'contact.location.label': 'Locatie:',
        'contact.email': 'itzzferry1771@gmail.com',
        'contact.phone': '+597 863-9113',
        'contact.location': 'Paramaribo, Suriname',
        'contact.form.name': 'Je Naam',
        'contact.form.email': 'Je E-mail',
        'contact.form.message': 'Je Bericht',
        'contact.form.submit': 'Verstuur Bericht'
    }
};

function translatePage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[key]) {
            el.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dictionary[key]) {
            el.innerHTML = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            el.placeholder = dictionary[key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-init');

    setTimeout(() => {
        fadeElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 150);

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    translatePage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            translatePage(selectedLang);
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    });
});