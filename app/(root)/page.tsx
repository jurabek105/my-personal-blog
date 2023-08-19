// Components
import About from "@/components/About";
import Contact from "@/components/Contact";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <main className="w-full h-96 bg-light">
      <About />
      <LatestPosts />
      <Contact />
    </main>
  )
}
