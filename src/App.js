import "../public/styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StOpWatch from "./components/StopWatch";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>StOpWatch</h1>
      <h2>Keep to time as you run through the track!</h2>
      <StOpWatch />
      <Footer />
    </div>

    // <div className="container mt-4" "App">
    //    <h1>StOpWatch</h1>
    //     <h2 className="mb-3"> Keep to time as you run through the track!</h2>
    //     <div className="card">
    //       <div className="card-body text-center">
    //         <StopWatch />
    //       </div>
    //     </div>
    //   </div>
  );
}
