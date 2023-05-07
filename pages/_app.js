import "@/styles/globals.css";

//internal import
import { Navbar } from "@/components";
import { SwapTokenContextProvider } from "@/Context/SwapContext";

const App = ({ Component, pageProps }) => (
  <div>
    <SwapTokenContextProvider>
      <Navbar />
      <Component {...pageProps} />;
    </SwapTokenContextProvider>
  </div>
);

export default App;
