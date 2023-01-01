import Main from "../layouts/Main/Main";
import "antd/dist/reset.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
