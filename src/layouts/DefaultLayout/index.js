import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import React, { Component }  from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
