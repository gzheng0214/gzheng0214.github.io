/*
* @Author: Gavin
* @Date:   2021-02-08 13:25:21
* @Last Modified by:   Gavin
* @Last Modified time: 2021-02-09 01:19:57
*/
import React from 'react';
import Title from './Title';
import ListItem from './ListItem';
import resume from '../resume/gavins_resume.pdf'

const About = () => {
	return (
		<div className="about" id="about">
		<Title  text="<About>" />
		<div className="about__container">
		<div className="about-content">
		<p>Hello, I'm Gavin, an anspiring front end developer based in Bayonne, NJ. I'm currently in my third year studying computer science at Boston University.</p>
		<p>I've been fascinated by web development and its intricate designs ever since I was young. As an aspiring front end developer, I like to build simple, beautiful user experiences.</p>
		<div className="about-content__container">
			<div className="about-content__image"></div>
			<div>
				<p>Here are a few technologies I've been working with recently:</p>
				<ul className="about-content__skills">
					<li><ListItem text="html" /></li>
					<li><ListItem text="css/scss" /></li>
					<li><ListItem text="javascript" /></li>
					<li><ListItem text="react" /></li>
				</ul>
				<p>Here's my <a className="resume" href={resume} target="_blank" rel='noopener noreferrer'>Resume</a></p>
			</div>
		</div>
		</div>
		</div>
		</div>
	);
};

export default About;