import Footer from "./Footer";
import NavBar from "./NavBar";
import Page from "./Page";
import Socials from "./Socials";

function App() {
  return (
    <>
      <div className="wrapper">
        <Socials />
        <NavBar />
        <Page />
        <Footer />
      </div>
    </>
  );
}

export default App;
