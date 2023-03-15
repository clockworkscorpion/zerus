import {Navbar,Footer} from "@/components";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-primary-black">
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
