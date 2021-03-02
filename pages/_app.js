import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Maps from "../components/Maps";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Layout>
        <Maps />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
