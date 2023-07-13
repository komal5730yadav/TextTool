import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(2 1 26)";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
        {/* <BrowserRouter> */}
        <Navbar
          title="TextTool"
          // aboutText="Aboutt"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route
              exact path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
