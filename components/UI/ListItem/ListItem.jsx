import React from "react";
import Image from "next/image";
import Link from "next/link";

import className from "classnames/bind";
import styles from "./ListItem.module.scss";
let cx = className.bind(styles);

import IconCheck from "../../SVG/IconCheck";

const ListItem = ({data}) => {
  return (
    <li className={cx("listitem")}>
      <span className={cx("icon")}>
        <IconCheck />
      </span>
      <p className="heading--20 color--primary">{data}</p>
    </li>
  );
};

export default ListItem;
