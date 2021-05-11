import React, { useEffect, useState } from "react";
import "./InfosCelestials.css";
import axios from "axios";
import { createPortal } from "react-dom";

function InfosCelestial() {
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => setPlanetList(response.data.bodies));
    console.log(planetList);
  }, []);

  const photosInfos = [
    {
      id: 1,
      name: "Moon",
      url: "https://images-assets.nasa.gov/image/PIA00405/PIA00405~small.jpg",
    },

    {
      id: 2,
      name: "Earth",
      url: "https://images-assets.nasa.gov/image/PIA00123/PIA00123~small.jpg",
    },

    {
      id: 3,
      name: "Mars",
      url: "https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg",
    },

    {
      id: 4,
      name: "Saturn",
      url: "https://images-assets.nasa.gov/image/PIA11141/PIA11141~small.jpg",
    },

    {
      id: 5,
      name: "The Sun",
      url: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000790/GSFC_20171208_Archive_e000790~small.jpg",
    },
    {
      id: 6,
      name: "ISS",
      url: "https://images-assets.nasa.gov/image/9410696/9410696~small.jpg",
    },
    {
      id: 7,
      name: "Galaxy",
      url: "https://images-assets.nasa.gov/image/PIA07828/PIA07828~small.jpg",
    },
    {
      id: 8,
      name: "Asteroid",
      url: "https://images-assets.nasa.gov/image/PIA00136/PIA00136~small.jpg",
    },
  ];

  return (
    <div>
      <div className="planet-list">
        {planetList
          .filter(
            (planetName) =>
              planetName.englishName.includes("Moon") ||
              planetName.englishName.includes("Mars") ||
              planetName.englishName.includes("Earth") ||
              planetName.englishName.includes("Jupiter") ||
              planetName.englishName.includes("Sun")
          )
          .map((planet) => (
            <div className="planet-info">
              <h2 className="name"> {planet.englishName}</h2>
              <p>
                Gravity : {planet.gravity} m/s2 Radius : {planet.meanRadius} km
                Density : {planet.density} g/cm3
              </p>
            </div>
          ))}
      </div>
      <div className="celestial-bodies">
        {photosInfos.map((photo) => (
          <img src={photo.url} alt={photo.name} />
        ))}
      </div>
    </div>
  );
}

export default InfosCelestial;
