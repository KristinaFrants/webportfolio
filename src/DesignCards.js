import React from 'react'
import "./DesignCards.css"

function DesignCards() {
    return (
        <div>
            <div className="DesignCards__container row mx-auto">
			<div className="DesignCards__card col">
				<div className="face face1">
					<div className="DesignCards__content">
						<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
						<h3>Design</h3>
					</div>
				</div>

				<div className="face face2">
					<div className="DesignCards__content">
						<p>
							As a developer Im making sure to deliver a pixel perfect responcive design using HTML, CSS, Photoshop, InDesign,
							Canva, ScreenRecorder and many more tools that can become handy in buildind an app.
						</p>
						<a href="/home">Show More</a>
					</div>
				</div>
			</div>
			<div className="DesignCards__card DesignCards__card2 col">
				<div className="face face1">
					<div className="DesignCards__content">
						<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
						<h3>Code</h3>
					</div>
				</div>
				<div className="face face2">
					<div className="DesignCards__content">
						<p>
							My most enjoyable part is create a clean, simple code with a variety of different languages, platforms,
							frameworks, and content management systems such as JavaScript, React, Node, Bootstrap, JSON, WordPress ect.
						</p>
						<a href="/home">Show More</a>
					</div>
				</div>
			</div>
			<div className="DesignCards__card DesignCards__card3 col">
				<div className="face face1">
					<div className="DesignCards__content">
						<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
						<h3>Launch</h3>
					</div>
				</div>
				<div className="face face2">
					<div className="DesignCards__content">
						<p>
							Backend skills I used to create some digital producuts written in Python/Flask. Expirienced in creating DB with
							MySql and SQLAlchemy Blueprints. Deploying on Firebase, Heroku, Git and more. 
						</p>
						<a href="/home">Show More</a>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default DesignCards
