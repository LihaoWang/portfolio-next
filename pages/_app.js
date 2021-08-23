import "../styles/globals.css";
import { ToggleProvider } from "./components/ToggleContext";
function MyApp({ Component, pageProps }) {
  return (
    <ToggleProvider>
      <Component {...pageProps} />
    </ToggleProvider>
  );
}

export default MyApp;
