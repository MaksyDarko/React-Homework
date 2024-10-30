import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />
      <main className="mt-5">
        <Main />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
