import FormLeads from "./components/form/FormLeads";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import About from "./components/sections/About/About";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";




export default function Home() {
  return (
    <main style={{
      backgroundColor: "rgb(255, 255, 255)",
      backgroundImage: "url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDE4ODN8MHwxfHNlYXJjaHwzOXx8eWVsbG93JTIwb3JhbmdlfGVufDB8fHx8MTY4NTYyNzM5Nnww&ixlib=rb-4.0.3&q=80&w=1080')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      paddingTop: "3rem",
    }}>
      <section className="max-w-5xl mx-auto main-container" >
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <FormLeads />
      </section>
      <Footer />
    </main>
  );
}
