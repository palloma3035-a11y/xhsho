// Language context for multi-language support (DE, SQ, EN)
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'de' | 'sq' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.prayerTimes': 'Gebetszeiten',
    'nav.services': 'Angebote',
    'nav.events': 'Veranstaltungen',
    'nav.contact': 'Kontakt',
    'nav.donate': 'Spenden',
    
    // Hero
    'hero.welcome': 'Willkommen bei uns',
    'hero.title': 'Xhamia Shqiptare',
    'hero.subtitle': 'Diaspora Osnabrück',
    'hero.description': 'Ein Ort des Friedens, des Gebets und der Gemeinschaft für Muslime in Osnabrück und Umgebung.',
    'hero.viewPrayerTimes': 'Gebetszeiten ansehen',
    'hero.learnMore': 'Mehr erfahren',
    'hero.more': 'Mehr',
    
    // Prayer Times
    'prayer.title': 'Gebetszeiten',
    'prayer.subtitle': 'Tägliche Gebete',
    'prayer.fajr': 'Fajr',
    'prayer.dhuhr': 'Dhuhr',
    'prayer.asr': 'Asr',
    'prayer.maghrib': 'Maghrib',
    'prayer.isha': 'Isha',
    'prayer.jumuah': "Jumu'ah Gebet",
    'prayer.jumuahSub': 'Freitagsgebet',
    'prayer.khutbah': 'Khutbah beginnt um',
    'prayer.loading': 'Gebetszeiten werden geladen...',
    'prayer.error': 'Fehler beim Laden der Gebetszeiten',
    
    // About
    'about.label': 'Über uns',
    'about.title': 'Unsere Moschee,',
    'about.titleHighlight': ' Ihre Gemeinschaft',
    'about.p1': 'Die Xhamia Shqiptare Diaspora Osnabrück ist seit vielen Jahren ein spirituelles Zuhause für die albanische muslimische Gemeinschaft in Osnabrück und Umgebung.',
    'about.p2': 'Unser Ziel ist es, einen einladenden Raum zu bieten, in dem Muslime aller Hintergründe zusammenkommen können, um zu beten, zu lernen und als Gemeinschaft zu wachsen.',
    'about.p3': 'Wir legen großen Wert auf die Bewahrung unserer religiösen und kulturellen Identität, während wir gleichzeitig die Integration in die deutsche Gesellschaft fördern.',
    'about.since': 'Seit 1995',
    'about.serving': 'Dienend für unsere Gemeinschaft',
    'about.community': 'Gemeinschaft',
    'about.communityDesc': 'Wir fördern ein starkes Gefühl der Zugehörigkeit und gegenseitigen Unterstützung.',
    'about.education': 'Bildung',
    'about.educationDesc': 'Islamische Bildung für alle Altersgruppen in deutscher und albanischer Sprache.',
    'about.integration': 'Integration',
    'about.integrationDesc': 'Brücken bauen zwischen Kulturen und Generationen in unserer Stadt.',
    
    // Services
    'services.label': 'Unsere Angebote',
    'services.title': 'Dienste für die Gemeinschaft',
    'services.description': 'Wir bieten verschiedene religiöse und soziale Dienste für unsere Gemeinde an.',
    'services.jumuah': "Jumu'ah Gebet",
    'services.jumuahDesc': 'Jeden Freitag laden wir Sie herzlich zum gemeinsamen Freitagsgebet ein. Die Khutbah wird auf Albanisch und Deutsch gehalten.',
    'services.jumuahTime': '13:00 - 14:00 Uhr',
    'services.islamic': 'Islamunterricht',
    'services.islamicDesc': 'Religionsunterricht für Kinder und Jugendliche. Quran-Unterricht, islamische Grundlagen und Ethik.',
    'services.islamicTime': 'Samstags & Sonntags',
    'services.community': 'Gemeinschaftsaktivitäten',
    'services.communityDesc': 'Regelmäßige Treffen, Vorträge, und soziale Veranstaltungen für die ganze Familie.',
    'services.communityTime': 'Nach Ankündigung',
    'services.nikah': 'Nikah & Janazah',
    'services.nikahDesc': 'Durchführung von islamischen Eheschließungen und Begleitung bei Trauerfällen nach islamischen Traditionen.',
    'services.nikahTime': 'Nach Vereinbarung',
    
    // Events
    'events.label': 'Aktuelles',
    'events.title': 'Veranstaltungen & Ankündigungen',
    'events.upcoming': 'Kommende Veranstaltungen',
    'events.announcements': 'Ankündigungen',
    'events.allAnnouncements': 'Alle Ankündigungen',
    'events.lecture': 'Islamischer Vortrag',
    'events.lectureDesc': 'Thema: Die Bedeutung von Geduld im Islam',
    'events.lectureTime': 'Nach dem Isha-Gebet',
    'events.yearEnd': 'Jahresabschluss',
    'events.yearEndDesc': 'Gemeinsames Gebet und Reflexion zum Jahresende',
    'events.youth': 'Jugendtreffen',
    'events.youthDesc': 'Monatliches Treffen für Jugendliche der Gemeinde',
    'events.ann1': 'Der Quran-Unterricht beginnt wieder am 8. Januar 2025.',
    'events.ann2': 'Spenden für Winterhilfe werden entgegengenommen.',
    'events.ann3': 'Neue Gebetszeiten ab Januar auf unserer Website.',
    
    // Donation
    'donate.title': 'Unterstützen Sie unsere Moschee',
    'donate.description': 'Ihre Spende hilft uns, unsere Gemeinde zu stärken und unsere religiösen und sozialen Dienste aufrechtzuerhalten.',
    'donate.mosque': 'Moschee-Unterhalt',
    'donate.mosqueDesc': 'Miete, Strom, Heizung und allgemeine Instandhaltung',
    'donate.programs': 'Bildungsprogramme',
    'donate.programsDesc': 'Quran-Unterricht und Jugendprogramme',
    'donate.social': 'Soziale Hilfe',
    'donate.socialDesc': 'Unterstützung für Bedürftige in unserer Gemeinde',
    'donate.bankDetails': 'Bankverbindung',
    'donate.accountHolder': 'Kontoinhaber:',
    'donate.bank': 'Bank:',
    'donate.note': 'Jede Spende, ob groß oder klein, macht einen Unterschied. Möge Allah Ihre Großzügigkeit belohnen. 🤲',
    'donate.cta': 'Jetzt spenden',
    
    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Besuchen Sie uns',
    'contact.description': 'Wir freuen uns auf Ihren Besuch. Bei Fragen stehen wir Ihnen gerne zur Verfügung.',
    'contact.info': 'Kontaktinformationen',
    'contact.address': 'Adresse',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.hours': 'Öffnungszeiten',
    'contact.hoursValue': 'Täglich: 30 Min vor Fajr bis nach Isha',
    'contact.whatsapp': 'WhatsApp kontaktieren',
    
    // Footer
    'footer.tagline': 'Ein Ort des Friedens und der Gemeinschaft für Muslime in Osnabrück.',
    'footer.quickLinks': 'Schnellzugriff',
    'footer.ourServices': 'Unsere Dienste',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.madeWith': 'Mit',
    'footer.forCommunity': 'für unsere Gemeinschaft',
  },
  sq: {
    // Navbar
    'nav.home': 'Ballina',
    'nav.about': 'Rreth nesh',
    'nav.prayerTimes': 'Kohët e namazit',
    'nav.services': 'Shërbimet',
    'nav.events': 'Ngjarjet',
    'nav.contact': 'Kontakti',
    'nav.donate': 'Dhuro',
    
    // Hero
    'hero.welcome': 'Mirësevini',
    'hero.title': 'Xhamia Shqiptare',
    'hero.subtitle': 'Diaspora Osnabrück',
    'hero.description': 'Një vend paqeje, lutjeje dhe bashkësie për muslimanët në Osnabrück dhe rrethinë.',
    'hero.viewPrayerTimes': 'Shiko kohët e namazit',
    'hero.learnMore': 'Mëso më shumë',
    'hero.more': 'Më shumë',
    
    // Prayer Times
    'prayer.title': 'Kohët e namazit',
    'prayer.subtitle': 'Namazet ditore',
    'prayer.fajr': 'Sabahu',
    'prayer.dhuhr': 'Dreka',
    'prayer.asr': 'Ikindia',
    'prayer.maghrib': 'Akshami',
    'prayer.isha': 'Jacia',
    'prayer.jumuah': 'Namazi i Xhumasë',
    'prayer.jumuahSub': 'Namazi i së premtes',
    'prayer.khutbah': 'Hutbeja fillon në',
    'prayer.loading': 'Duke ngarkuar kohët e namazit...',
    'prayer.error': 'Gabim gjatë ngarkimit të kohëve të namazit',
    
    // About
    'about.label': 'Rreth nesh',
    'about.title': 'Xhamia jonë,',
    'about.titleHighlight': ' Bashkësia juaj',
    'about.p1': 'Xhamia Shqiptare Diaspora Osnabrück ka qenë për shumë vite shtëpia shpirtërore e bashkësisë muslimane shqiptare në Osnabrück dhe rrethinë.',
    'about.p2': 'Qëllimi ynë është të ofrojmë një hapësirë mikpritëse ku muslimanët e të gjitha prejardhjeveve mund të bashkohen për të falur, për të mësuar dhe për të rritur si bashkësi.',
    'about.p3': 'Ne vlerësojmë shumë ruajtjen e identitetit tonë fetar dhe kulturor, duke promovuar njëkohësisht integrimin në shoqërinë gjermane.',
    'about.since': 'Që nga 1995',
    'about.serving': 'Duke shërbyer bashkësinë tonë',
    'about.community': 'Bashkësia',
    'about.communityDesc': 'Ne promovojmë një ndjenjë të fortë përkatësie dhe mbështetje të ndërsjellë.',
    'about.education': 'Arsimimi',
    'about.educationDesc': 'Arsimim islamik për të gjitha moshat në gjermanisht dhe shqip.',
    'about.integration': 'Integrimi',
    'about.integrationDesc': 'Ndërtojmë ura midis kulturave dhe brezave në qytetin tonë.',
    
    // Services
    'services.label': 'Shërbimet tona',
    'services.title': 'Shërbime për bashkësinë',
    'services.description': 'Ne ofrojmë shërbime të ndryshme fetare dhe sociale për bashkësinë tonë.',
    'services.jumuah': 'Namazi i Xhumasë',
    'services.jumuahDesc': 'Çdo të premte ju ftojmë përzemërsisht në namazin e xhumasë. Hutbeja mbahet në shqip dhe gjermanisht.',
    'services.jumuahTime': '13:00 - 14:00',
    'services.islamic': 'Mësim-besimi',
    'services.islamicDesc': 'Mësim fetar për fëmijë dhe të rinj. Mësimi i Kuranit, bazat islame dhe etika.',
    'services.islamicTime': 'Të shtunave & të dielave',
    'services.community': 'Aktivitete të komunitetit',
    'services.communityDesc': 'Takime të rregullta, ligjërata dhe ngjarje sociale për të gjithë familjen.',
    'services.communityTime': 'Sipas njoftimit',
    'services.nikah': 'Nikah & Xhenaze',
    'services.nikahDesc': 'Kryerja e martesave islame dhe përcjellja në raste vdekjesh sipas traditave islame.',
    'services.nikahTime': 'Me marrëveshje',
    
    // Events
    'events.label': 'Aktuale',
    'events.title': 'Ngjarjet & Njoftimet',
    'events.upcoming': 'Ngjarjet e ardhshme',
    'events.announcements': 'Njoftimet',
    'events.allAnnouncements': 'Të gjitha njoftimet',
    'events.lecture': 'Ligjëratë islame',
    'events.lectureDesc': 'Tema: Rëndësia e durimit në Islam',
    'events.lectureTime': 'Pas namazit të jacisë',
    'events.yearEnd': 'Mbyllja e vitit',
    'events.yearEndDesc': 'Namaz dhe reflektim i përbashkët për fundin e vitit',
    'events.youth': 'Takimi i të rinjve',
    'events.youthDesc': 'Takimi mujor për të rinjtë e bashkësisë',
    'events.ann1': 'Mësimi i Kuranit fillon përsëri më 8 janar 2025.',
    'events.ann2': 'Pranohen dhurata për ndihmën dimërore.',
    'events.ann3': 'Kohët e reja të namazit nga janari në faqen tonë.',
    
    // Donation
    'donate.title': 'Mbështetni xhaminë tonë',
    'donate.description': 'Dhurata juaj na ndihmon të forcojmë bashkësinë tonë dhe të mbajmë shërbimet tona fetare dhe sociale.',
    'donate.mosque': 'Mirëmbajtja e xhamisë',
    'donate.mosqueDesc': 'Qiraja, rryma, ngrohja dhe mirëmbajtja e përgjithshme',
    'donate.programs': 'Programet arsimore',
    'donate.programsDesc': 'Mësimi i Kuranit dhe programet për të rinj',
    'donate.social': 'Ndihma sociale',
    'donate.socialDesc': 'Mbështetje për nevojtarët në bashkësinë tonë',
    'donate.bankDetails': 'Të dhënat bankare',
    'donate.accountHolder': 'Mbajtësi i llogarisë:',
    'donate.bank': 'Banka:',
    'donate.note': 'Çdo dhuratë, e madhe apo e vogël, bën ndryshim. Allahu ju shpërbleftë për bujarinë tuaj. 🤲',
    'donate.cta': 'Dhuro tani',
    
    // Contact
    'contact.label': 'Kontakti',
    'contact.title': 'Na vizitoni',
    'contact.description': 'Jemi të lumtur t\'ju presim. Për pyetje jemi në dispozicionin tuaj.',
    'contact.info': 'Informacione kontakti',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.email': 'Email',
    'contact.hours': 'Orari i punës',
    'contact.hoursValue': 'Përditë: 30 min para sabahut deri pas jacisë',
    'contact.whatsapp': 'Kontakto në WhatsApp',
    
    // Footer
    'footer.tagline': 'Një vend paqeje dhe bashkësie për muslimanët në Osnabrück.',
    'footer.quickLinks': 'Lidhje të shpejta',
    'footer.ourServices': 'Shërbimet tona',
    'footer.rights': 'Të gjitha të drejtat e rezervuara.',
    'footer.madeWith': 'Me',
    'footer.forCommunity': 'për bashkësinë tonë',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.prayerTimes': 'Prayer Times',
    'nav.services': 'Services',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    
    // Hero
    'hero.welcome': 'Welcome',
    'hero.title': 'Xhamia Shqiptare',
    'hero.subtitle': 'Diaspora Osnabrück',
    'hero.description': 'A place of peace, prayer and community for Muslims in Osnabrück and the surrounding area.',
    'hero.viewPrayerTimes': 'View Prayer Times',
    'hero.learnMore': 'Learn More',
    'hero.more': 'More',
    
    // Prayer Times
    'prayer.title': 'Prayer Times',
    'prayer.subtitle': 'Daily Prayers',
    'prayer.fajr': 'Fajr',
    'prayer.dhuhr': 'Dhuhr',
    'prayer.asr': 'Asr',
    'prayer.maghrib': 'Maghrib',
    'prayer.isha': 'Isha',
    'prayer.jumuah': "Jumu'ah Prayer",
    'prayer.jumuahSub': 'Friday Prayer',
    'prayer.khutbah': 'Khutbah begins at',
    'prayer.loading': 'Loading prayer times...',
    'prayer.error': 'Error loading prayer times',
    
    // About
    'about.label': 'About Us',
    'about.title': 'Our Mosque,',
    'about.titleHighlight': ' Your Community',
    'about.p1': 'The Xhamia Shqiptare Diaspora Osnabrück has been a spiritual home for the Albanian Muslim community in Osnabrück and the surrounding area for many years.',
    'about.p2': 'Our goal is to provide a welcoming space where Muslims of all backgrounds can come together to pray, learn and grow as a community.',
    'about.p3': 'We place great value on preserving our religious and cultural identity while promoting integration into German society.',
    'about.since': 'Since 1995',
    'about.serving': 'Serving our community',
    'about.community': 'Community',
    'about.communityDesc': 'We foster a strong sense of belonging and mutual support.',
    'about.education': 'Education',
    'about.educationDesc': 'Islamic education for all ages in German and Albanian.',
    'about.integration': 'Integration',
    'about.integrationDesc': 'Building bridges between cultures and generations in our city.',
    
    // Services
    'services.label': 'Our Services',
    'services.title': 'Services for the Community',
    'services.description': 'We offer various religious and social services for our community.',
    'services.jumuah': "Jumu'ah Prayer",
    'services.jumuahDesc': 'Every Friday we warmly invite you to the congregational Friday prayer. The Khutbah is held in Albanian and German.',
    'services.jumuahTime': '1:00 - 2:00 PM',
    'services.islamic': 'Islamic Education',
    'services.islamicDesc': 'Religious education for children and youth. Quran lessons, Islamic basics and ethics.',
    'services.islamicTime': 'Saturdays & Sundays',
    'services.community': 'Community Activities',
    'services.communityDesc': 'Regular meetings, lectures, and social events for the whole family.',
    'services.communityTime': 'As announced',
    'services.nikah': 'Nikah & Janazah',
    'services.nikahDesc': 'Conducting Islamic marriages and accompaniment in cases of death according to Islamic traditions.',
    'services.nikahTime': 'By appointment',
    
    // Events
    'events.label': 'News',
    'events.title': 'Events & Announcements',
    'events.upcoming': 'Upcoming Events',
    'events.announcements': 'Announcements',
    'events.allAnnouncements': 'All Announcements',
    'events.lecture': 'Islamic Lecture',
    'events.lectureDesc': 'Topic: The Importance of Patience in Islam',
    'events.lectureTime': 'After Isha prayer',
    'events.yearEnd': 'Year End',
    'events.yearEndDesc': 'Joint prayer and reflection for the end of the year',
    'events.youth': 'Youth Meeting',
    'events.youthDesc': 'Monthly meeting for young people of the community',
    'events.ann1': 'Quran lessons resume on January 8, 2025.',
    'events.ann2': 'Donations for winter aid are being accepted.',
    'events.ann3': 'New prayer times from January on our website.',
    
    // Donation
    'donate.title': 'Support Our Mosque',
    'donate.description': 'Your donation helps us strengthen our community and maintain our religious and social services.',
    'donate.mosque': 'Mosque Maintenance',
    'donate.mosqueDesc': 'Rent, electricity, heating and general maintenance',
    'donate.programs': 'Educational Programs',
    'donate.programsDesc': 'Quran lessons and youth programs',
    'donate.social': 'Social Aid',
    'donate.socialDesc': 'Support for those in need in our community',
    'donate.bankDetails': 'Bank Details',
    'donate.accountHolder': 'Account Holder:',
    'donate.bank': 'Bank:',
    'donate.note': 'Every donation, big or small, makes a difference. May Allah reward your generosity. 🤲',
    'donate.cta': 'Donate Now',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Visit Us',
    'contact.description': 'We look forward to your visit. For questions, we are happy to help.',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening Hours',
    'contact.hoursValue': 'Daily: 30 min before Fajr until after Isha',
    'contact.whatsapp': 'Contact on WhatsApp',
    
    // Footer
    'footer.tagline': 'A place of peace and community for Muslims in Osnabrück.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.forCommunity': 'for our community',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
