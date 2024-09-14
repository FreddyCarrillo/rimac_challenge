import { RouterProvider } from "react-router-dom";
import Router from "./navigation/Router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={Router} />
    </>
  )
}

export default App;
