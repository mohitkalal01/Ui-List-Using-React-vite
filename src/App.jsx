import { Route, Routes } from "react-router";
import "./App.css";
import List from "./page/List";
import Userform from "./page/Userform";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/userform" element={<Userform />} />
      </Routes>
    </>
  );
} 
export default App;
