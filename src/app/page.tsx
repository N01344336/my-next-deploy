'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://picsum.photos/200/300")
      .then((response) => setImageUrl(response.request.responseURL))
      .catch((error) => {
        console.error("Error fetching the image:", error);
        setError("Error fetching the image");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Random Image</h1>
      {imageUrl && <img src={imageUrl} alt="Randomly fetched" />}
    </div>
  );
};

export default App;