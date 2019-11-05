import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const initI18n = () => {
  i18n
    .use(detector)
    .use(initReactI18next)
    .init({
      detection: {
        order: ['path'],
        lookupFromPathIndex: 0
      },
      resources: {
        ko: {
          translation: {
            profile: {
              name: {
                channing: '이엘티',
              }
            },
            title: 'TECH BLOG',
            description: '',
            company: '',
            address: '',
            tel: '',
            searchPlaceholder: '제목 및 내용을 입력하세요',
            recruiting: '',
            members: ''
          }
        },
        en: {
          translation: {
            profile: {
              name: {
                channing: 'elt',
              }
            },
            title: 'Tech Blog',
            description: '',
            company: '',
            address:
              '',
            tel: '',
            searchPlaceholder: 'Input title or contents',
            recruiting: 'Recruiting',
            members: 'Members'
          }
        }
      },
      fallbackLng: 'ko',
      whitelist: ['ko', 'en'],
      initImmediate: false
    });
};
