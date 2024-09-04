import Image from "next/image";

import className from "classnames/bind";
import styles from "./HeroImage.module.scss";
let cx = className.bind(styles);

import Hero from "/public/images/bckg/hero.jpg";

const HeroImage = () => {
  return (
    <section className={cx(["component"])}>
      <div className={cx(["bckg"])}>
        <Image src={Hero} width={1920} height={1253} quality={100} alt="" />
        <h1 className={cx(["heading", "heading--68", "color--white"])}>Sustainable eco-villas</h1>
      </div>
    </section>
  );
};

export default HeroImage;
