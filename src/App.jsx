import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfoliolinks from "./pages/Portfoliolinks";

function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfoliolinks" element={<Portfoliolinks/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;