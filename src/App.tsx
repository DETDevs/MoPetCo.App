import { Footer } from "./components/ui/Footer";
import { Header } from "./components/ui/Header";
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
