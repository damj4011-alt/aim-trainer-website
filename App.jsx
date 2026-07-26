import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";

import Home from "./pages/Home";
import Play from "./pages/Play";
import Statistics from "./pages/Statistics";


export default function App(){

return(

<BrowserRouter>

<div className="app">

<Sidebar/>


<div className="content">

<Navbar/>


<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/play" element={<Play/>}/>

<Route path="/statistics" element={<Statistics/>}/>

<Route path="/settings"element={<Settings/>}/>

</Routes>


</div>

</div>

</BrowserRouter>

)

}