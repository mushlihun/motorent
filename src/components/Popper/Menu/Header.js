import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import React, { Component }  from 'react';
const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx("header")}>
            <button className={cx("back-btn")} onClick={onBack}>
                {/* FontAwesome */}
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    );
}

export default Header;
