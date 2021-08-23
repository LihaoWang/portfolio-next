import "../styles/globals.css";
import { ToggleProvider } from "../ToggleContext";
function MyApp({ Component, pageProps }) {
  return (
    <ToggleProvider>
      <Component {...pageProps} />
    </ToggleProvider>
  );
}

export default MyApp;
