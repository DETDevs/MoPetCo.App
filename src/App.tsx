import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ReleasePage } from "./pages/ReleasePage";
import { FAQsPage } from "./pages/FAQsPage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/release-form" element={<ReleasePage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
