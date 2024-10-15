import Layout from "../components/Layout";

import "../styles/globals.css";

function LukasTechApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default LukasTechApp;
