import Header from "./components/Navbar/Header";
import Home from "./components/Main/Home";

import About from "./components/pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {


 



  return (<><BrowserRouter>
  <Routes>
    <Route path="/" element={<Header/>}>
      <Route index element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
    


    </Route>
  </Routes>





  </BrowserRouter>
  </>

  

  
    

  



  );
}

export default App;
