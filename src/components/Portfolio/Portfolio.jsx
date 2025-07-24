import React, { useState, useEffect } from "react";
import "./Portfolio.css";
// import portfolioData from "../../portfolio";
import Popup from "../Popup/Popup";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    document.title = "Gideon - My Portfolio";
  }, []);
  function openPortfolio(item) {
    setSelectedItem(item);
  }

  function closePortfolio() {
    setSelectedItem(null);
  }

  // Fetch portfolio data from the server
  useEffect(() => {
    const fetchPortfolioData = async () => {
    try {
      const response = await fetch("https://gideonuzuigweserver.onrender.com/api/data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      let dataImage = null;
      data.map((item, index) => {
        const { preview_image } = item;
        const { data, contentType } = preview_image;
        const byteArray = new Uint8Array(data.data); // convert buffer to byte array
        const blob = new Blob([byteArray], { type: contentType });
        const url = URL.createObjectURL(blob);
        dataImage = url;
      })

      return {data, dataImage};
    } catch (error) {
      console.error("Failed to fetch portfolio data:", error);
      return portfolioData; 
    }
  }

    fetchPortfolioData().then(data => {
      setPortfolioData(data);
    });
  }, []);


  return (
    <div>
      <div className="container">
        <div className="portfolios">
          {portfolioData && portfolioData.data && portfolioData.data.map((item, index) => {
            // Generate image URL from preview_image
            let imageUrl = "";
            if (item.preview_image && item.preview_image.data && item.preview_image.contentType) {
              const byteArray = new Uint8Array(item.preview_image.data.data);
              const blob = new Blob([byteArray], { type: item.preview_image.contentType });
              imageUrl = URL.createObjectURL(blob);
            }
            return (
              <div
                key={index}
                className="portfolio"
                onClick={() => openPortfolio(item)}
              >
                <img src={imageUrl} alt={item.type} />
                <div className="port_splitte">
                  <p>{item.type}</p>
                </div>
              </div>
            );
          })}
          {!portfolioData && !portfolioData.data && <div>Fetching Data...</div>}
        </div>
        {selectedItem && (
          <Popup item={selectedItem} closePortfolio={closePortfolio} />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
