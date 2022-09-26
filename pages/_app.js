import "../styles/globals.css";

import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="flex space-y-2 flex-col md:flex-row">
        <div className="md:w-1/4">
          <Profile />
        </div>
        <div className="md:w-3/4">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
