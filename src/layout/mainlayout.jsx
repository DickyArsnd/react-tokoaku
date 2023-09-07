import Footer from "./footer";
import Header from "./header";

function Mainlayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Mainlayout;
