"use client";
import { createContext, useContext, useEffect } from "react";
const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const changeLanguage = langCode => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      selectField.value = langCode;
      selectField.dispatchEvent(new Event("change"));
    }
  };

  useEffect(() => {
    const loadGoogleTranslate = () => {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,ja,bn,hi",
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };

    if (!window.google || !window.google.translate) {
      loadGoogleTranslate();
    }

    return () => {
      const iframe = document.querySelector(".goog-te-menu-frame");
      if (iframe) iframe.remove();
    };
  }, []);

  return (
    <TranslationContext.Provider value={{ changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
