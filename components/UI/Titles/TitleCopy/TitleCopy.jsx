import React from "react";
import Image from "next/image";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./TitleCopy.module.scss";
let cx = className.bind(styles);

const TitleCopy = (props) => {
  return (
    <section className="TitleCopy">
      <div className={cx("component")}>
        <div className="container">
          <div className={cx("grid")}>
            <h1 className="heading--68 color--primary">
              Sabores Auténticos en Casa Selvaggio
            </h1>
            <p className="heading--16">
              En Casa Selvaggio, creemos que la gastronomía es una parte
              esencial de la experiencia de lujo. Nuestro compromiso con la
              sostenibilidad se refleja en cada plato que servimos, utilizando
              ingredientes frescos, locales y orgánicos para crear comidas que
              deleitarán tu paladar y nutrirán tu cuerpo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleCopy;
