import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home       from "./pages/Home";
import "./styles/globals.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <MainLayout><Home/></MainLayout>
      </div>
    </ThemeProvider>
  );
}
