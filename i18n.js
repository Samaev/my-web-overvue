// i18n.js
import { createI18n } from 'vue-i18n';

const getDefaultLocale = () => {
    const savedLocale = localStorage.getItem('userLocale');
    return savedLocale || 'en';
};

const i18n = createI18n({
    locale: getDefaultLocale(),

    messages: {
        en: {
            // English translations
            greeting: 'Welcome to My WEB Universe',
            skillsText: 'Discover My Skills',
            originalText: "My name is Andrey Samaev. I'm Web Developer with strong Laravel Experience as well. Experienced English-speaking Web Developer with 4+ years of comercial experience, specializing in Web Development. Skilled in direct client contact to deliver exactly what they want. Ready to take on new challenges! Let's create something amazing together!",
            
        },
        ua: {
            // Spanish translations
            greeting: 'Ласкаво прошу до мого ВЕБ Всесвіту',
            skillsText: 'Відкрийте мої навички',
            originalText : 'Мене звати Андрій Самаєв. Я також веб-розробник із великим досвідом роботи з Laravel. Досвідчений англомовний веб-розробник з 4+ роками комерційного досвіду, спеціалізується на веб-розробці. Має навички прямого контакту з клієнтами, щоб забезпечити саме те, що вони хочуть. Готовий до нових викликів! Давайте створювати щось дивовижне разом!',
        },
    },
});

export default i18n;
