import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import './LandingCard.css'

// import { url } from "inspector";


let TextStyle = {
	float: "right",
	width: "100%",
	fontColor: "black",
	textAlign: "left",
};

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const LandingCard = () => {
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
	return (
		<Container>
			<Row>
				<Col className="col-xs-4">
					<div>
						<animated.div
							className="cardEffect"
							onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
							onMouseLeave={() => set({ xys: [0, 0, 1] })}
							style={{ transform: props.xys.interpolate(trans) }}
						/>
			
					</div>
				</Col>
				<Col className="col-xs-4">
					<div className="wrapperImg mt-4 ">
						<div id="slide" className="w-100">
							<h3
								style={{ textAlign: "left", borderBottom: "3px solid black" }}
								className="headerStyle mb-4">
								SOMETHING TO KNOW ABOUT ME
							</h3>
							<p style={TextStyle}>
								{" "}
								<h5>Hello there, </h5>
								my name is Cristina and I'm a fullstack Web Developer based in sunny Hollywood, Florida. <br></br>
								I started my journey in IT back it 2012, when I traveled the World and decide to write a travel blog with a tour hacks.
								The first thing that I come up with, was trying editing custom Wordpress themes and it ended up for me as Digital Marketer/SEO 
								optimization specialist in small StartUp.<br></br>
								At today's point I never stopped learning by attending Bootcamp, Univestity and different IT Courses. I thruthfully enjoy my Dev journey with strong goal to create nice digital experiences 
								and exlusive products.
								Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up company 
								and recenly freelancing while balancing between my toddler and small dev projects.
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

LandingCard.propTypes = {
	xys: PropTypes.func
};
export default LandingCard