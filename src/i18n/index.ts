import { sk } from './sk';
import { sr } from './sr';

export const languages = {
    sk,
    sr,
};

export type Language = keyof typeof languages;

export function getTranslations(lang: Language) {
    return languages[lang];
}