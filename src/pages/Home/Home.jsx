// import React from "react";
// import "./Home.css";
// import Header from "../../componets/Header/Header.jsx";
// import ExploredMenu from "../../componets/ExploredMenu/ExploredMenu.jsx";
// import { useState } from "react";
// import FoodDisplay from "../../componets/Fooddisplay/FoodDisplay.jsx";

// const Home = () => {
//   const [category, setCategory] = useState("All");

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="rest-container">
//       <Header />
//       <ExploredMenu category={category} setCategory={setCategory} />
//       <FoodDisplay category={category} />
//       <button className="scroll-to-top" onClick={scrollToTop}>
//         &#8679;
//       </button>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../componets/Header/Header.jsx";
import ExploredMenu from "../../componets/ExploredMenu/ExploredMenu.jsx";
import FoodDisplay from "../../componets/Fooddisplay/FoodDisplay.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rest-container">
      <Header />
      <ExploredMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </div>
  );
};

export default Home;
