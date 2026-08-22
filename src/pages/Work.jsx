import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Container from "../components/Container";
import MarqueeSection from "../components/Marquee";

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <MarqueeSection />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            px-4
          "
        >
          <motion.a
            variants={itemVariants}
            href="https://jamesonnuss.com/work/yuga-labs-apefest"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imageUrl={
                "https://images.squarespace-cdn.com/content/v1/63e05f2ed1d1e648d06bc29d/1702535673942-5XPKRCM6C62WY8DA3HSH/opengraph-image.jpg?format=750w"
              }
              title={"Yuga Labs ApeFest"}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://jamesonnuss.com/work/nissan-heisman-house-pass"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imageUrl={
                "https://images.squarespace-cdn.com/content/v1/63e05f2ed1d1e648d06bc29d/1702537778318-EUGL3R8WZ5T3BRWFMXCZ/nhh-social-image.jpeg?format=750w"
              }
              title={"Nissan Heisman House Pass"}
            />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            px-4
            mt-8
          "
        >
          <motion.a
            variants={itemVariants}
            href="https://jamesonnuss.com/work/metaverse-creation-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imageUrl={
                "https://images.squarespace-cdn.com/content/v1/63e05f2ed1d1e648d06bc29d/1677715895687-EOHA6YKCFOXFQ5PTZG14/work-mcp-collection.jpg?format=1000w"
              }
              title={"Intel® Metaverse Creation Platform"}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://jamesonnuss.com/work/holo-footwear"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imageUrl={
                "https://images.squarespace-cdn.com/content/v1/63e05f2ed1d1e648d06bc29d/1679547392885-M0MGZFM52AQNPM30UQMV/holofootwear-collection.jpg?format=1000w"
              }
              title={"Holo Footwear"}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://jamesonnuss.com/work/cisco-live"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              imageUrl={
                "https://images.squarespace-cdn.com/content/v1/63e05f2ed1d1e648d06bc29d/1677716726820-RS8K5EJ3H39IPYR1QAJS/cisco-collection.jpg?format=1000w"
              }
              title={"Cisco Live"}
            />
          </motion.a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            text-center
            text-3xl
            font-normal
            text-white
            tracking-wider
            my-28
          "
        >
          More work available{" "}
          <Link to="/contact" className="underline text-[#c5ae77]">
            upon request
          </Link>
          .
        </motion.h1>
      </Container>
    </div>
  );
}