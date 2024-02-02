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
            me: 'SAMAEV',
            ua: "UA",
            en: "EN",
            home: 'Home',
            about: 'About MySelf',
            education: 'Education',
            portfolio: 'Portfolio',
            experience: 'Experience',
            experiences: 'Experience',
            contacts: 'Contacts',
            developer: 'Developer',
            downloadCv: 'Download CV',
            years: 'years',
            watchIntro: 'Watch Intro',
            originalText: "My name is Andrey Samaev. I'm Web Developer with strong VueJS | Laravel Experience as well. Experienced English-speaking Web Developer with 4+ years of commercial experience, specializing in Web Development. Skilled in direct client contact to deliver exactly what they want. Ready to take on new challenges! Let's create something amazing together!",
            brief: "With a whopping 4+ years of full-time production in Web Development, I've become a coding maestro! VueJS and Laravel are practically my best buddies, and my HTML/CSS/Bootstrap skills are so sharp they can cut through code like a hot knife through butter – preprocessors don't stand a chance! So here's a concise summary of my 4+ yr commercial experience: 2 years of Software Information Security with Vanilla JS and Vue.js + 19 months of experience with Vue.js and Laravel with an American Healthcare product. But hey, I'm not just a coding wizard – I'm also a master coordinator! I've led Support Managers and QA Engineers with the finesse of a conductor leading an orchestra. Teamwork is my jam, and I know how to keep the harmony going. My love for the IT environment runs deep – it's been my home for a glorious 8 years. Working with native speakers at an American IT company has given me an \"Upper Intermediate\" level of English that allows me to chat tech like a pro. When it comes to challenges, I don't back down – I tackle them head-on with gusto! Complications? Pfft, they're no match for my problem-solving skills. My results are always top-notch, and I'm not afraid to show off my magic touch in creating the most awe-inspiring solutions. So, if you need a developer who's not just skilled but also fun to work with, look no further! Let's rock this IT world together and make some coding magic happen!",
            experienceIntro: 'Proficient in JavaScript language fundamentals and concepts. Comfortable with asynchronous programming and promises. Vue.js and React Proficiency: 4 years of hands-on experience with Vue.js and React frameworks. Skilled in building dynamic and interactive user interfaces. Familiar with component-based architecture and reusability. Front-End Development: Strong understanding of front-end architecture patterns. Capable of efficiently managing state and handling UI updates. Experienced in integrating APIs to create data-driven applications. Technical Insights: Knowledge of virtual DOM and its role in optimizing UI rendering. Familiarity with component lifecycle management and reactivity concepts. Comparative Framework Knowledge: Able to assess the strengths and differences between Vue.js and React. Equipped to make informed framework choices based on project requirements. Core Web Technologies: Solid grasp of HTML, CSS, and related styling concepts. Potentially experienced with CSS preprocessors (e.g., Sass, Less).',
            frontendDeveloper: 'Frontend Developer',
            latvia: 'Latvia',
            usa: 'USA',
            singapore: 'Singapore',
            october: 'October',
            months: 'months',

        },
        ua: {
            // Ukrainian translations
            me: 'САМАЄВ',
            ua: "УКР",
            en: "АНГЛ",
            home: 'Головна',
            about: 'Про мене',
            education: 'Освіта',
            portfolio: 'Портфоліо',
            experience: 'Досвід',
            experiences: 'досвіду',
            contacts: 'Контакти',
            developer: 'Розробник',
            downloadCv: 'Скачати резюме',
            years: 'роки',
            watchIntro: 'Познайомитися',
            originalText : 'Мене звати Андрій Самаєв. Я  веб-розробник із великим досвідом роботи з VueJs та Laravel. Досвідчений англомовний веб-розробник з 4+ роками комерційного досвіду, спеціалізуюся на веб-розробці. Маю навички прямого контакту з клієнтами, щоб забезпечити саме те, що вони хочуть. Готовий до нових викликів! Давайте створювати щось дивовижне разом!',
            brief: "За 4+ роки роботи у сфері веб-розробки я став справжнім маестро кодування! VueJS і Laravel практично мої найкращі друзі, а мої навички HTML/CSS/Bootstrap настільки гострі, що можуть прорізати код, як гарячий ніж крізь масло - препроцесори не мають жодного шансу! Отже, ось короткий підсумок мого більш ніж 4-річного комерційного досвіду: 2 роки програмного забезпечення з інформаційної безпеки з Vanilla JS та Vue.js + 19 місяців досвіду роботи з Vue.js та Laravel з американським продуктом для охорони здоров'я та Европейскими онлайн магазинами. Але я не просто майстер кодування - я ще й майстер-координатор! Я керував менеджерами підтримки та QA-інженерами з витонченістю диригента, який керує оркестром. Командна робота - це мій коник, і я знаю, як підтримувати гармонію. Моя любов до ІТ-середовища глибока - воно залишається моїм домом протягом славних 8 років. Робота з носіями мови в американській ІТ-компанії дала мені рівень англійської \"Upper Intermediate\", який дозволяє мені спілкуватися з технічними фахівцями як професіонал. Коли справа доходить до викликів, я не відступаю - я беруся за них із завзяттям! Складнощі? Пф, вони не йдуть ні в яке порівняння з моїми навичками вирішення проблем. Мої результати завжди першокласні, і я не боюся демонструвати свій чарівний дотик у створенні найбільш вражаючих рішень. Отже, якщо вам потрібен розробник, з яким не тільки кваліфіковано, але й цікаво працювати, не шукайте мене більше! Давайте разом сколихнемо цей ІТ-світ і створимо трохи магії кодування!",
            experienceIntro: "Володію основами та концепціями мови JavaScript. Впевнено працюю з асинхронним програмуванням та промісами. Знання Vue.js та React: 4 роки практичного досвіду роботи з фреймворками Vue.js та React. Вмію створювати динамічні та інтерактивні користувацькі інтерфейси. Знання компонентної архітектури та багаторазового використання. Front-End розробка: Глибоке розуміння патернів архітектури інтерфейсу. Здатний ефективно керувати станом та працювати з оновленнями інтерфейсу. Маю досвід інтеграції API для створення додатків на основі даних. Технічні знання: Знання віртуального DOM та його ролі в оптимізації рендерингу інтерфейсу. Знання концепцій управління життєвим циклом компонентів та реактивності. Знання порівняльних фреймворків: Здатність оцінити переваги та відмінності між Vue.js та React. Вміння робити обґрунтований вибір фреймворку на основі вимог проекту. Основні веб-технології: Глибоке розуміння HTML, CSS та пов'язаних з ними концепцій стилів. Потенційний досвід роботи з препроцесорами CSS (наприклад, Sass, Less).",
            frontendDeveloper: 'Frontend Розробник',
            latvia: 'Латвія',
            usa: 'США',
            singapore: 'Сінгапур',
            october: 'Жовтень',
            months: 'місяців',
        },
    },
});

export default i18n;
