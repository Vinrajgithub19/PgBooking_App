import React from "react";

const Services = () => {
  return (
    <div style={{ background: "white" }}>
      <label style={{ color: "blue", margin: "65px" }}>
        <b>Select type : </b>
        <select>
          <option Value="grocery"> Colive</option>
          <option Value="gents">Gents PG</option>
          <option Value="Ladies"> Ladies PG</option>
        </select>
      </label>
      <label style={{ color: "blue", margin: "5px" }}>
        <b>Select Location : </b>
        <select>
          <option Value="advertisement">kengeri</option>
          <option Value="waterSupply">MG road</option>
          <option Value="grocery"> whitefield</option>
          <option Value="gents">Hsr layout</option>
          <option Value="Ladies"> E city</option>
        </select>
      </label>
      <h1
        style={{
          color: "rgba(103, 210, 150, 0.88)",
          margin: "10px",
          textAlign: "center",
        }}
      >
        {" "}
        Newest PG's
      </h1>
      <hr />
      <div
        style={{
          margin: "30px",
          textAlign: "center",
          gap: "9px",
          justifyContent: "spacebetween",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "35vw",
            height: "200px",
            background: "lightgrey",
            border: ".6px solid black",
            overflow: "hidden",
            alignText: "center",
            borderRadius: "2px",
          }}
        >
          <b>Mani Gents PG </b>
          <br />
          <img
            src="https://media.istockphoto.com/id/941789092/photo/colorful-facade-illuminated-with-warm-light.jpg?s=1024x1024&w=is&k=20&c=uAiqqsCJNtv8iFQQOYAN_6esQko_Jc1rxB09nAHnVtI="
            alt="bff"
          />
          <br />
          <h6>indiranagar</h6>
        </div>
        <br />
        <div
          style={{
            width: "35vw",
            height: "200px",
            background: "lightgrey",
            border: ".6px solid black",
            overflow: "hidden",
            borderRadius: "7px",
          }}
        >
          <b>Shreya Ladies PG</b>
          <br />
          <img src="https://media.istockphoto.com/id/2151001467/photo/view-of-the-residential-building-at-night-bengaluru-india.jpg?s=1024x1024&w=is&k=20&c=XOy0CG66jik-u36VI6CQNKJXD7bBvgPH9UmH0wsY0I4=" />
          <br />
          <h6>indiranagar</h6>
        </div>
      </div>
    </div>
  );
};
export default Services;
