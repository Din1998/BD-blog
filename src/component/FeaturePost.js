import { motion } from "framer-motion";

export default function FeaturePost() {

  return(
    <motion.div
          initial={{y: -250}}
          animate={{y: -10}}
        >
    <div className="feature__post">
      <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg" />

      <div className="info">
        <div className="feature__text">
          <h3>hellow</h3>
          <p>Im Din</p>
        </div>
        
      </div>
    </div>
    </motion.div>
  )

}