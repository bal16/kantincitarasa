import { useEffect } from "react";
import { Navbar } from "./Navbar.jsx";
import { Hero } from "./Hero.jsx";
import { Menu } from "./Menu.jsx";
import Modal from "./Modal.jsx";
import Footer from "./Footer.jsx";
import { DarkToggle } from "./DarkToggle.jsx";
import { ToTop } from "./ToTop.jsx";
import Toast from "./Toast.jsx";
import { themeChange } from "theme-change";
import "../js/util"

function App() {
  useEffect(() => {
    themeChange(false);
    return () => {
      themeChange(false);
    };
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <Navbar />
      <Toast />
      <Hero />
      <Menu />
      <Modal />
      <div>
        <DarkToggle />
        <ToTop />
      </div>
      <Footer />
    </>
  );
}

export default App;
