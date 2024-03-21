// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./CardComponent.scss";

// const CardComponent = () => {
 

//   return (
//     <main className="container">
//       <section className="sec">
//         <div className="line">
//           <div className="circle" style={{ top: circleTop }} />
//         </div>
//         <div className="inner">
//           <ul className="list_card">
//             {cards.map((index) => (
//               <li key={index} className="card_cont">
//                 <Card index={index} highlightedIndex={highlightedIndex} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// };

// const Card = ({ index, highlightedIndex }) => {
//   const isHighlighted = index === highlightedIndex;

//   return (
//     <motion.div
//       className={`card ${isHighlighted ? "highlighted" : ""}`}
//       initial={{ backgroundColor: "white" }}
//       animate={{ backgroundColor: isHighlighted ? "yellow" : "white" }}
//     >
//       {index + 1}
//     </motion.div>
//   );
// };

// export default CardComponent;
