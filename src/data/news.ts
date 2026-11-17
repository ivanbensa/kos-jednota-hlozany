import type { NewsItem } from '../types/news';

export const news: NewsItem[] = [
    {
        id: 1,
        title: "Folklórny festival 2026",
        date: "2026-10-20",
        description: "Naši tanečníci sa predstavili na folklórnom festivale plnom hudby, tanca a tradícií.",
        image: "/images/about.png",
        slug: "folklorny-festival-2026",
        content: [
            'Členovia nášho folklórneho súboru pripravili vystúpenie plné tradičných slovenských tancov a piesní.',
            'Na javisku sa predstavili tanečníci rôznych vekových kategórií, ktorí svojím vystúpením potešili publikum.',
            'Tešíme sa na ďalšie spoločné stretnutia a príležitosti prezentovať naše kultúrne dedičstvo.'
        ],
    },
    {
        id: 2,
        title: "Nová folklórna sezóna",
        date: "2026-10-10",
        description: "Začíname novú sezónu plnú skúšok, vystúpení a spoločných zážitkov.",
        image: "/images/folklore-youth.jpg",
        slug: "nova-folklorna-sezona",
        content: [
            'Náš folklórny súbor sa zúčastnil tradičného festivalu Tancuj, tancuj!, ktorý každoročne spája milovníkov slovenského folklóru.',
            'Divákom sme predstavili ľudové tance, piesne a krásu našich tradičných krojov.',
            'Ďakujeme všetkým účinkujúcim a organizátorom za príjemnú atmosféru a nezabudnuteľné zážitky.'
        ],
    },
    {
        id: 3,
        title: "Tradície, ktoré nás spájajú",
        date: "2026-09-25",
        description: "Pozrite si fotografie a zážitky z našich posledných folklórnych aktivít.",
        image: "/images/folklore-children.jpg",
        slug: "tradicie-ktore-nas-spajaju",
        content: [
            'Pravidelné folklórne skúšky sú dôležitou súčasťou života nášho spolku.',
            'Naši členovia sa učia nové choreografie, zdokonaľujú tanečné kroky a spoločne rozvíjajú lásku k slovenským tradíciám.',
            'Radi medzi nami privítame aj nových členov, ktorí majú záujem o folklór, tanec a ľudovú kultúru.'
        ],
    },
];


export const newsSr: NewsItem[] = [
    {
        id: 1,
        title: 'Фолклорни фестивал 2026',
        date: '2026-10-20',
        description: 'Наши играчи су наступили на фолклорном фестивалу испуњеном музиком, игром и традицијом.',
        image: '/images/about.png',
        slug: 'folklorny-festival-2026',
        content: [
            'Чланови нашег фолклорног ансамбла припремили су наступ испуњен традиционалним словачким играма и песмама.',
            'На сцени су наступили играчи различитих узраста, који су својим наступом обрадовали публику.',
            'Радујемо се новим заједничким сусретима и приликама да представимо наше културно наслеђе.'
        ],
    },
    {
        id: 2,
        title: 'Нова фолклорна сезона',
        date: '2026-10-10',
        description: 'Започињемо нову сезону пуну проба, наступа и заједничких доживљаја.',
        image: '/images/folklore-youth.jpg',
        slug: 'nova-folklorna-sezona',
        content: [
            'Наш фолклорни ансамбл учествовао је на традиционалном фестивалу „Танцуј, танцуј!“, који сваке године окупља љубитеље словачког фолклора.',
            'Публици смо представили народне игре, песме и лепоту наших традиционалних ношњи.',
            'Захваљујемо свим учесницима и организаторима на пријатној атмосфери и незаборавним доживљајима.'
        ],
    },
    {
        id: 3,
        title: 'Традиција која нас повезује',
        date: '2026-09-25',
        description: 'Погледајте фотографије и доживљаје са наших последњих фолклорних активности.',
        image: '/images/folklore-children.jpg',
        slug: 'tradicie-ktore-nas-spajaju',
        content: [
            'Редовне фолклорне пробе важан су део живота нашег друштва.',
            'Наши чланови уче нове кореографије, усавршавају играчке кораке и заједно развијају љубав према словачкој традицији.',
            'Радо ћемо међу нама поздравити и нове чланове који су заинтересовани за фолклор, игру и народну културу.'
        ],
    },
];
