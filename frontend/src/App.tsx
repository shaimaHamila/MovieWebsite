import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouts from "./routs/PublicRouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PublicRouts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
