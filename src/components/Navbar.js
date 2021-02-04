/*
 * @Author: Gavin
 * @Date:   2021-01-30 01:44:33
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-04 03:51:58
 */
import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../images/faceIcon.svg';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        if (!e.target.closest('a')) return;
        setOpen(!open);
    };

    const menuClassName = open ? 'navbar__hamburger--open' : 'navbar__hamburger--closed';

    useEffect(() => {
        window.matchMedia("(min-width: 801px)").addListener((x) => {
            if (x.matches) {
                setOpen(false);
            }
        });
    }, []);

    useEffect(() => {
        if (open) {
            document.body.classList.add('noScroll');
        } else {
            document.body.classList.remove('noScroll');
        }
    }, [open]);

    return (
        <nav className="navbar">
		<div className="logo">
			<Logo />
			<span className="logo__text">Gavin</span>
		</div>
		<ul className="navbar__links" onClick={onClick} >
			<li className="navbar__link">
				<a href="">&lt;about&gt;</a>
			</li>
			<li className="navbar__link">
				<a href="">&lt;skills&gt;</a>
			</li>
			<li className="navbar__link">
				<a href="">&lt;projects&gt;</a>
			</li>
			<li className="navbar__link">
				<a href="">&lt;contact&gt;</a>
			</li>
		</ul>
		<ul className="navbar__links--mobile" onClick={onClick} style={open ? {transform: "translateX(0)"} : {}} >
			<li className="navbar__link--mobile">
				<a href="">&lt;about&gt;</a>
			</li>
			<li className="navbar__link--mobile">
				<a href="">&lt;skills&gt;</a>
			</li>
			<li className="navbar__link--mobile">
				<a href="">&lt;projects&gt;</a>
			</li>
			<li className="navbar__link--mobile">
				<a href="">&lt;contact&gt;</a>
			</li>
		</ul>
		<div className="navbar__hamburger" onClick={() => setOpen(!open)} >
			<span className={menuClassName}></span>
		</div>
		</nav>
    );
};

export default Navbar;