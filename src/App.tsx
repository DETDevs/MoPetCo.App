import { Header } from "./components/Header";

export const App = () => {
  return (
    <div> {/* Padding para no tapar el contenido con el header fijo */}
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Bienvenido a MoPetCo 🐶
        </h1>
        {/* <p className="text-center mt-2 text-gray-600">
          ¡Solo lo mejor para tu amigo peludo!
        </p> */}
      </main>
    </div>
  );
};
