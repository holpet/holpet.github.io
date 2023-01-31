import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeWrapper from "./components/Wrappers/ThemeWrapper";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
);
