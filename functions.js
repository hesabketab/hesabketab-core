const { LANG } = require('./enums');

const getUserLang = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const mapTZtoLang = { [LANG.FA]: ['Asia/Tehran', 'Asia/Kabul'], [LANG.EN]: [] };
  for (const lang in Object.keys(mapTZtoLang)) {
    if (mapTZtoLang[lang].includes(timezone)) return lang;
  }
  return LANG.EN;
};
