import React from "react";
import Navbar from "./Navbar";
import ImageSlider from "./Slider";
import SearchBar from "./SearchBar";
import Services from "./Services";
import ReactDom from "react-dom";

const App = () => {
  const handleSearch = (query) => {
    // Handle search logic here
    console.log("Search query:", query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Navbar />
      <ImageSlider />
      <h1 style={{ textAlign: "center", color: "lightcoral" }}>
        Now pg.. booking in super easy.
      </h1>
      <Services />
    </div>
  );
};

export default App;
