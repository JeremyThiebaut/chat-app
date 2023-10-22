import React from "react";
import Router from "@/routes";
import { useTranslation } from "react-i18next";
import { userSelector } from "@/redux/store";

type PropsLanguage = {
  app: {
    language: string;
  };
};

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const language = userSelector((state: PropsLanguage) => state.app.language);

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return <Router />;
};

export default App;
