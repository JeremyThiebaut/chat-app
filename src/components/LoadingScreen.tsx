import { useTranslation } from "react-i18next";

const LoadingScreen = () => {
  const { t } = useTranslation();

  return <>{t("loading")}</>;
};

export default LoadingScreen;
