
import type { EventItem } from '../types/events';

export const events: EventItem[] = [
    {
        id: 1,
        slug: 'jesenny-folklorny-vecer',
        title: 'Jesenný folklórny večer',
        date: '2026-11-14',
        time: '19:00',
        location: 'Hložany',
        description: 'Večer plný slovenských ľudových tancov a hudby.',
        image: '/images/folklore-adults.jpg',
        content: [
            'Pozývame vás na folklórny večer plný tradičných slovenských tancov a piesní.',
            'Na javisku sa predstavia členovia folklórneho súboru s pripraveným kultúrnym programom.',
            'Tešíme sa na spoločné stretnutie a príjemnú atmosféru.'
        ]
    },
    {
        id: 2,
        slug: 'slavnostny-koncert',
        title: 'Slávnostný koncert',
        date: '2026-12-05',
        time: '18:00',
        location: 'Báčsky Petrovec',
        description: 'Spoločné vystúpenie folklórnych súborov.',
        image: '/images/folklore-youth.jpg',
        content: [
            'Pripravujeme slávnostný koncert venovaný slovenskému folklóru.',
            'Diváci sa môžu tešiť na ľudové tance, hudbu a tradičné kroje.',
            'Podrobnejšie informácie o programe zverejníme neskôr.'
        ]
    },
    {
        id: 3,
        slug: 'novorocne-stretnutie',
        title: 'Novoročné stretnutie',
        date: '2027-01-16',
        time: '17:00',
        location: 'Hložany',
        description: 'Tradičné stretnutie členov a priateľov folklóru.',
        image: '/images/folklore-children.jpg',
        content: [
            'Nový rok začneme spoločným stretnutím členov a priateľov nášho spolku.',
            'Pripomenieme si spoločné zážitky a predstavíme plány na ďalšiu sezónu.',
            'Tešíme sa na všetkých milovníkov folklóru.'
        ]
    }
];
