import { BrowserRouter} from "react-router-dom";

import Navbar from "./UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}
export default App;
