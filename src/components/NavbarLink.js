/*
 * @Author: Gavin
 * @Date:   2021-02-05 17:38:46
 * @Last Modified by:   Gavin
 * @Last Modified time: 2021-02-05 17:48:14
 */
import React from 'react';

const NavbarLink = (props) => {
    return (
        <li className={'navbar__link' + props.className}>
			<a href="">&lt;{props.text}&gt;</a>
		</li>
    );
};

export default NavbarLink;