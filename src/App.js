import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/book-list/BookList';
import Header from './components/header/Header';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en"
import { FormattedMessage, IntlProvider } from 'react-intl';
import LangSelector from './components/lang-selector/LangSelector';

function App() {
  let [logedin, setLogedin] = useState(() => {
    return localStorage.getItem("rol") ? true : false
  });
  let [locale, setLocale] = useState(() => {
    let lang = localStorage.getItem("locale") || navigator.language
    if(lang === "en") {
      return "en"
    } else {
      return "es"
    }
  });

  let [messages, setMessages] = useState([]);

  useEffect(() => {
    localStorage.setItem("locale", locale)
    if(locale === "en") {
      setMessages(localeEnMessages)
    } else {
      setMessages(localeEsMessages)
    }
  }, [locale])

  return (
    <div>
      <IntlProvider locale={locale} messages={messages}>
        <Header logedin={logedin} setLogedin={setLogedin} />
        <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login logedin={logedin} setLogedin={setLogedin}/>} />
              <Route path='/' element={<BookList />} />
            </Routes>
        </BrowserRouter>
        <LangSelector setLocale={setLocale} />
      </IntlProvider>
    </div>
  );
}


export default App;
