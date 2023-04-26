import "@/styles/globals.css";

//internal import
import { Navbar } from "@/components";

const App = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />;
  </div>
);

export default App;
