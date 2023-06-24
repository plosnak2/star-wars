import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
