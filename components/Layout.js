import Outro from "../pages/home/Outro";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Outro />
    </>
  );
};

export default Layout;
