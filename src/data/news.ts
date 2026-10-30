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