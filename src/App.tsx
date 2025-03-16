import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
};
