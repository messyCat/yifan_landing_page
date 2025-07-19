import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import * as serviceWorker from './serviceWorker';

// 初始化 i18next
i18next.init({
  interpolation: { escapeValue: false },  // React 已经处理了 XSS
  lng: 'zh',  // 默认语言
  resources: {
    en: { translation: enTranslation },
    zh: { translation: zhTranslation },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
