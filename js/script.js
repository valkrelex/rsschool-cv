const i18Obj = {
    'en': {
        'eng': 'eng',
        'rus': 'ru',
        'contacts': 'Contacts',
        'about-me': 'About me',
        'skills': 'Skills',
        'code-example': 'Code example',
        'projects': 'Projects',
        'education': 'Education',
        'english': 'English',
        'name': 'Daria Trubnikova',
        'age': '28 years, Moscow',
        'code-text': 'Code examples can be seen in my GitHub account or you can see my FizzBuzz solving below:',
        'code-link': 'GitHub account',
        'university': 'National University of Science and Technology «MISIS»',
        'speciality': 'Bachelor of IT & Automated Control Systems',
        'english-text': 'I have passed IELTS Academic English with 5.5 score, which is the border between B1 and B2 English levels.',
        'portfolio-title': 'Portfolio for the photographer',
        'portfolio-info': 'A training project, which made using HTML, CSS, Vanilla JavaScript and SASS.',
        'open-project': 'Open project',
        'watch-code': 'Watch code',
        'about-text-1': 'My thesis project at the university was related to programming, and since then, I have gotten into it. To my mind, front-end development is the first step for me on the path to full-stack web development.',
        'about-text-2': 'I consider diligence, the ability to learn quickly and possession of time management skills as my main personal qualities.',
    },
    'ru': {
        'rus': 'руc',
        'eng': 'англ',
        'contacts': 'Контакты',
        'about-me': 'Обо мне',
        'skills': 'Навыки',
        'code-example': 'Пример кода',
        'projects': 'Проекты',
        'education': 'Образование',
        'english': 'Английский',
        'name': 'Дарья Трубникова',
        'age': '28 лет, Москва',
        'code-text': 'Примеры кода можно увидеть на моем GitHub аккаунте или ниже представлено мое решение задачи FizzBuzz:',
        'code-link': 'GitHub аккаунте',
        'university': 'Национальный исследовательский технологический университет «МИСиС»',
        'speciality': 'Бакалавр ИТ & Автоматизированных Систем Управления',
        'english-text': 'Я сдала IELTS Academic English с баллом - 5.5, что соответствует границе между уровнями B1 и B2',
        'portfolio-title': 'Портфолио для фотографа',
        'portfolio-info': 'Тренировочный проект, выполненный с помощью HTML, CSS, Vanilla JavaScript и SASS.',
        'open-project': 'Открыть проект',
        'watch-code': 'Смотреть код',
        'about-text-1': 'Мой дипломный проект в университете был связан с программированием. С тех пор, я им увлеклась. Для меня фронтенд - это первый шаг на пути к фуллстек-разработке.',
        'about-text-2': 'Я считаю главными своими личными качествами трудолюбие, способность быстро обучаться и владение навыками тайм-менеджмента.',
    }
}
const langBlock = document.querySelector('.languages');
const langBtns = document.querySelectorAll('.lang');
let lang = 'en';
const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.main-navigation__list');

const getTranslate = (lang) => {
    const transateAll = document.querySelectorAll('[data-i18n]');
    transateAll.forEach(el => {
        if(el.dataset.i18n !== lang) {
            el.textContent = i18Obj[lang][el.dataset.i18n];
        }
    })
}
//el.dataset.i18n !== lang

const openMenu = (event) => {
    if(menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        navBlock.classList.remove('active');
        langBlock.classList.remove('active');
    } else {
        menuBtn.classList.add('active');
        navBlock.classList.add('active');
        langBlock.classList.add('active');
    }
}

const changeActive = (event) => {
    if(event.target.classList.contains('lang')) {
        langBtns.forEach(el => {
            if(el.classList.contains('lang--active')) {
                el.classList.remove('lang--active');
            }
        });
        event.target.classList.add('lang--active');
        lang === 'en' ? lang = 'ru' : lang = 'en';
    }
    getTranslate(lang);
}

langBlock.addEventListener('click', changeActive);
menuBtn.addEventListener('click', openMenu);
navBlock.addEventListener('click', (event) => {
    if(event.target.classList.contains('main-navigation__link') && (event.target.classList.contains('active'))) {
        openMenu(event);
    } else {
        return 0;
    }
});



//   export default i18Obj;