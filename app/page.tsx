import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

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
        <Header/>
        <Hero/>
        <About />
        <Experience/>
        <Projects/>
        <Skills/>
      </section>
      <footer className="flex justify-center items-center footer text-sm text-gray-500  pt-6 mt-16">
          <p>
            Contacto: <a href="mailto:luissebastianbustamantebarrera@gmail.com" className="underline">luissebastianbustamantebarrera@gmail.com</a> ·{' '}
            <a href="https://www.linkedin.com/in/luissb-bustamante/" className="text-[#4b55dc] underline">LinkedIn</a> ·{' '}
            <a href="https://github.com/lssebastianbustamante" className="text-[#4b55dc] underline">GitHub</a>
          </p>
        </footer>
    </main>
  );
}
