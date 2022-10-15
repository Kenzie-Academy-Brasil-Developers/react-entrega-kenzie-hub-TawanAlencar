
import GlobalStyle from "./Styles/global";
import RoutesMenu from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer/>
      <GlobalStyle />
      <RoutesMenu />
    
    </div>
  );
}

export default App;
