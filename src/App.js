
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Congratulations from "./pages/Congratulations";
import Details from "./pages/Details";
import ContactUs from "./pages/ContactUs";

import Header from "./components/Header";
import useFetch from "./hooks/useFetch";

import Footer from "./components/Footer/Footer";

function App() {
  const [selectedDog, setSelectedDog] = useState({});
  const [dogsInfoResp, errorResp, isLoading] = useFetch(
    `https://api.thedogapi.com/v1/breeds`
  );

  if (isLoading || !dogsInfoResp.length) {
    return <h2>still in process, loading...</h2>;
  }

  if (errorResp) {
    console.log("Error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div className="App">
      <Header
        selectedDog={selectedDog}
        setSelectedDog={setSelectedDog}
        dogsInfoResp={dogsInfoResp}
      />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              selectedDog={selectedDog}
              setSelectedDog={setSelectedDog}
              dogsInfoResp={dogsInfoResp}
            />
          }
        />
        <Route
          path="/breed-info"
          element={<Details selectedDog={selectedDog} />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/congrats" element={<Congratulations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
