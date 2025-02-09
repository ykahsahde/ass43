
import ReactDOM from "react-dom/client";
import Spot from "./views/spot/spot";
import Home from "./views/home/home";
import Aboutus from "./views/about/aboutus";
import Contactus from "./views/contactus/contactus";

console.log("Home Component:", Home);
console.log("Spot Component:", Spot);
console.log("Aboutus Component:", Aboutus);
console.log("Contactus Component:", Contactus);

function App() {
  const path = window.location.pathname;
  
  
  switch(path) {    
    case "/":
      return <Home />;
    case "/spot":
      return <Spot />;
    case "/aboutus":  
      return <Aboutus />; 
    case "/contactus":  
      return <Contactus />;
    default:
      return <div>Not Found</div>;  
    }
  }
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
