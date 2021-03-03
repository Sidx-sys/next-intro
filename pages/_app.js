import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
