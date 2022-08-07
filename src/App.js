import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Signup0 from './signup';
import Anim from './animation'
import Signin from './signin';
import Signup1 from './signup1';
import Signup2 from './signup2';
import Signup3 from './signup3';
import Tou from './termsofuse';
import  Pp  from "./privacypolicy";
import Clubs from "./Sbc/Clubs";
import Events from "./Sbc/Events";
import Navbar from "./Sbc/Navbar";
import Landing from "./Sbc/Landing";
import Internships from "./Sbc/internships"
function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
          <Route path="/internships" element={<Internships/>}/>
          <Route path="/clubs" element={<Clubs Type="scientific clubs" Placeholder="Search for a specific club here" Btn={false} />}/>
          <Route path="/trainings" element={<Clubs Type="trainings" Placeholder="Write your major" Btn={true} />}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup0" element={<Signup0/>}/>
          <Route path="/signup1" element={<Signup1/>}/>
          <Route path="/signup2" element={<Signup2/>}/>
          <Route path="/signup3" element={<Signup3/>}/>
          <Route path="/terms-of-use" element={<Tou/>}/>
          <Route path="/privacy-policy" element={<Pp/>}/>
          </Routes>
          </BrowserRouter>
    </div>
    
    
  );
}

export default App;
