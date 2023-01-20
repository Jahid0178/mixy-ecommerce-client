import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Main = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div>
      <Navbar />
      {children}
      <footer>{pathname === "/user" ? null : <Footer />}</footer>
    </div>
  );
};

export default Main;
