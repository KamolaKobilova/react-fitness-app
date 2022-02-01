import uz from '../lang/uz';
import ru from '../lang/ru';
import en from '../lang/en';
import store from '../redux';
const dictionary = {
  ru,
  uz,
  en,
}

function t(str) {
  const lang = store.getState().account?.lang || 'uz';
  if (dictionary[lang][str]) {
    return dictionary[lang][str]
  }
  // return str + '-' + lang;
  return str;
}

export { t };