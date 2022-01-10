import { useTranslation } from 'react-i18next';
import s from './LanguageSwitcher.module.css';


const languages = {
  en: { nativeName: 'English' },
  uk: { nativeName: 'Українська' },
  ru: { nativeName: 'Русский' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className={s.switcher}>
      {Object.keys(languages).map(lng => (
        <div key={lng} className={s.btnWrapper}>
          <button
            className={i18n.resolvedLanguage === lng ? s.active : s.button}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
{lng}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;