import { Routes, Route } from "react-router-dom";

import SearchBox from "./routes/searchBox/Searchbox.component";
import Result from "./routes/results/Results.component";
import DetailProduct from "./routes/detailProduct/DetailProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchBox />}>
        <Route path="items/*" element={<Result/>} />
        <Route path="/items/:id" element={<DetailProduct />}/>
      </Route>
    </Routes>
  );
}

export default App;
