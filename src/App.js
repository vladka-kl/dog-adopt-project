// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Congratulations from "./pages/Congratulations";
import Details from "./pages/Details";
import ContactUs from "./pages/ContactUs";
<<<<<<< HEAD
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
=======
import {Footer} from "./components/Footer/Footer";
>>>>>>> 35d68b7b06989689df1d464454e85fabce5f1fa8

function App() {
  const [selectedDog, setSelectedDog] = useState({});
  const [dogsInfoResp, errorResp, isLoading] = useFetch(
    `https://api.thedogapi.com/v1/breeds`
  );

<<<<<<< HEAD
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
=======
  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        // handle success
        if (
          response &&
          response.data &&
          response.data.status === 'success'
        ) {
          console.log(response.data.message);
          setData(response.data.message);
        } else {
          setData();
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
        setData();
      });
  }, []);

  return (
    <div className='App'>
>>>>>>> 35d68b7b06989689df1d464454e85fabce5f1fa8
      <Routes>
        <Route
          path='/'
          element={
            <LandingPage
              selectedDog={selectedDog}
              setSelectedDog={setSelectedDog}
              dogsInfoResp={dogsInfoResp}
            />
          }
        />
        <Route
          path='/breed-info'
          element={<Details selectedDog={selectedDog} />}
        />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/congrats' element={<Congratulations />} />
      </Routes>
<<<<<<< HEAD
=======
      {/* {data && <AppRoutes data={data} />} */}
      <Footer />
>>>>>>> 35d68b7b06989689df1d464454e85fabce5f1fa8
    </div>
  );
}

export default App;
