import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppRouter from "./navigation";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <section>
      <Header />
      <RouterProvider router={AppRouter} />
      <Footer />
    </section>
  );
}

export default App;
