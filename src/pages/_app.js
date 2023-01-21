import Main from "../layouts/Main/Main";
import "antd/dist/reset.css";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Provider } from "react-redux";
import store from "../redux/store";
import AuthProvider from "../context/AuthProvider";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Provider>
    </AuthProvider>
  );
}
