import classNames from "classnames/bind";
import styles from "./HomeAdmin.module.scss";
import React, { Component }  from 'react';
const cx = classNames.bind(styles);

function Home() {
    return <div className={cx("wrapper")}></div>;
}

export default Home;
