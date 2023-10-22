import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@/styles/index.scss";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import "@/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
