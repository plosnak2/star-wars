import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CharacterPage } from "./pages/character";
import CustomNavbar from "./components/navbar";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <CustomNavbar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="character/:id" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
