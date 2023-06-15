import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import React, { Component }  from 'react';
const cx = classNames.bind(styles);
function Menu({ children }) {
    return <nav className={cx("menu-nav")}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Menu;
