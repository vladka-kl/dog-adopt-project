// @ts-nocheck
import React, { useEffect, useState } from "react";
import AppRoutes from "./components/Route/AppRoutes";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Congratulations from "./pages/Congratulations";
import Details from "./pages/Details";
import ContactUs from "./pages/ContactUs";
import {Footer} from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState();
  const [selectedDog, setSelectedDog] = useState({});

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        // handle success
        if (response && response.data && response.data.status === "success") {
          console.log(response.data.message);
          setData(response.data.message);
        } else {
          setData();
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
        setData();
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              selectedDog={selectedDog}
              setSelectedDog={setSelectedDog}
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
      {/* {data && <AppRoutes data={data} />} */}
      <Footer />
    </div>
  );
}

export default App;
