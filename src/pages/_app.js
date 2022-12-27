import { useRouter } from "next/router";
import Main from "../layouts/Main/Main";
import "antd/dist/reset.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Main isAbout={router.pathname === "/about"}>
      <Component {...pageProps} />
    </Main>
  );
}
