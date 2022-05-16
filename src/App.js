import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from "./components/Init";
import Questions from "./components/Questions";
import "./assets/css/reset.css"
import "./assets/css/style.css"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Init />}/>
                <Route path="/questions" element={<Questions />}/>
            </Routes>
        
        </BrowserRouter>
    );
}