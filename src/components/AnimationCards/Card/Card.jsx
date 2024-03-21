import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className={`card "highlighted" : ""}`}
      initial={{ backgroundColor: "white" }}
      animate={{ backgroundColor: "yellow" }}
    ></motion.div>
  );
};

export default Card;
