import Header from "../header";
import Footer from "../footer";
// import Events from "../Events";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Events /> */}
      {children}

      <Footer />
    </>
  );
};

export default Layout;
