import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
