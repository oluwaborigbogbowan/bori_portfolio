import About from "./about";
import Contact from "./contact";
import Landing from "./landing";
import Nav from "./nav";
import Project from "./project";
import Skill from "./skill";

export default function Home() {
  return (
    <main className="bg-black min-h-screen px-32 py-8">
      <Nav/>
      <Landing/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </main>
  );
}
