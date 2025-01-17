import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                about: "About me",
                skills: "My skills",
                project: "My projects",
                contact: "Contact"
            }
        },
        fr: {
            translation: {
                about: "A propos",
                skills: "Compétences",
                project: "Projets",
                contact: "Contact"
            }
        }
    },
    lng: 'fr',
})