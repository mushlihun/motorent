import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
import React, { Component }  from 'react';
const cx = classNames.bind(styles);
function Wrapper({ children, className }) {
    return <div className={cx("wrapper", className)}>{children}</div>;
}

export default Wrapper;
