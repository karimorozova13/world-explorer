import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import WorldExplorerApollo from "../pages/WorldExplorerApollo";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/apollo" element={<WorldExplorerApollo />} />
    </Routes>
  );
}

export default App;
