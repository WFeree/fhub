import Education from "./components/Education";
import Header from "./components/Header";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar/>

      <main>
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-6">
            <Header/>
            <Education />
          </div>
        </section>
      </main>
    </>
  );
}