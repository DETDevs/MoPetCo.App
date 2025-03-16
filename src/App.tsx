import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="p-4 text-center">
          <h1 className="text-2xl font-bold text-blue-600 p-20">
            Bienvenido a MoPetCo
          </h1>
        </section>
      </main>

      <Footer />
    </div>
  );
};
