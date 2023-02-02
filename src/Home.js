import React from 'react'
import "./Home.css"
import Product from "../src/profile/Product"
import Button from 'react-bootstrap/Button'
import productOne,  { iconsTwo, iconsTree, iconsFour, iconsFive } from './ProductIcons'




function Home() {

    function sendEmail ()
    {
        window.location = "mailto:cristina.chiticari@gmail.com";
    }

    return (

        
        <div className="home ">
            <div className="home__container ">
                <div  className="top-left-text">FullStack <br></br> Web Developer</div>
                <div  className="top-left-subtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
                <Button className="hero_button" variant="outline-light" onClick = {sendEmail} >Say Hello</Button>
                <img  className="home__image" src="https://img.freepik.com/free-photo/abstract-background-with-ink_1112-820.jpg?w=740&t=st=1671296200~exp=1671296800~hmac=555e4946e2665e4d89dbec49d0de918ef52030a9a64613479499456a887527d1"/>
                
             
            <div className="home__row row mx-auto">
                
                <div className="home__col">
                <Product  
                id={1}
                header="PetFinders"
                title="Fully responcive ReactJs WebApp that helps users to sell or buy a furry friend"
                // price={29.99}
                icons={productOne}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1610911651/Untitled_aghpzh.png"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1611281815/Petfinders-video_1-21-2021_9-10-13_PM_hs9xvu.mp4"
                demolink="https://petfinders.kristinafrants.vercel.app/"
                description="A fullstack MVP webapp build from scratch with use of ReactJs Hooks for front-end and Python-Flask for back-end with SQLAlchemy BD. 
                The boilerplate is build with updated features for Hooks and webpack module bundlers."
                description1= "PetFinders webapp allows users to Post unlimited adds on the feed for selling, buing or adopting a pet purposes. User have different options when logged in or just visiting app as guest."
                description2= "A logged in user can fill in a full pet profile with photo and user's contact info, has his own dashbord where he/she can delete an add , post the add in the feed and adjust more info if necessary. A Quick Add button is avaliable only for non-logged in users who wants too post a short add. All adds have features such as Connect an owner to request more info about the pet or his/her contacts via email, or send a message directly to the owner phone." 
                description3="The back-end written in Python offers a lot of options including the ability to check logs, see posts, user information and much more.
                SQLAlchemy DB gives an easy acces to all nesessary information directly in the terminal and allows to update tables quickly if needed."
                login="margo@gmail.com" 
                pass="12345"
                rating={5}
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  PythonFlask  
                💻  SQLAlchemy
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON 
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Twillio  
                💻  FontAwesome
                💻  WebPack
                💻  RESTfulAPI
                💻  Heroku"
                />
                 </div> 

                <div className="home__col ">
                <Product
                id={2}
                header="Social Network/Blog"
                title="Social Network Blog Post build on Python Flask with SQLAlchemy DB"
                icons={iconsFour}
                login="Kristy@gmail.com" 
                pass="testing"
                price={17.29}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1669910925/flask-blog_tmc0en.png"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1669649940/flask-network_rtstze.mp4"
                demolink="https://flask-blog-network.herokuapp.com/"
                escription="Responcive, Fullstack BlogPost or Socialmedia WebApp build from scratch in Python(Flask), Bootstrap, SQLAlchemy DB."
                description1= "MVP of Informative blog platform, flexible can be suited for many different purposes. User side can create an account, update personal info, post/delete the feed, sort posts by user name, choose feed pages."
                description2= "Back-end is written in SQLAlchemy wich allows admin side to control the tables, and can be shown in insomnia or postman."
                description3="Google authentication and passsword reset are integrated via RESTfullAPI. Error webpages designed in case http call do not respond.Application is deployed and running on Herroku."
                rating={5}
                features="
                💻  Python
                💻  Flask
                💻  NodeJs  
                💻  Env  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  HTTP 
                💻  FontAwesome
                💻  RESTfulAPI
                💻  SQLAlchemy
                💻  Blueprints
                💻  Flask Templates
                💻  Npm modules
                💻  Google authentication
                💻  Password reset
                "
                />
                </div>  
            
            </div> 

                {/* Products row2 */}
            <div className="home__row row mx-auto">

                <div className="home__col2">
                <Product 
                id={3}
                header="E-Commerce"
                title="ReactJs e-commerce WebApp like Amazon with realtime DB"
                price={25.99}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1611370627/amazonscreen_eocopd.png"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1669217667/e-commerce_clone_video_bh52tj.mp4"
                description="A fullstack E-commerce (Amazon like) WebApp build from scratch in ReactJs with Firebase DB."
                description1= "E-commerce is a online shopping  platform that allows users to choose, add, delete and buy desirable products."
                description2= "Admin side can controll Posts, Delete and Update the products in the feed. This Online Shopping application is featured with search bar, navigation, pictures uploading, user orders history, google login, shopping cart, ect."
                description3="Application is deployed on Firebase, wich allows to run a back-end in real time with real data. Firebase cloud functions has been used for Stripe payment integration, as well as gmail LogIn and easy 2steps SingIn authentication."
                rating={5}
                demolink="https://clone-8625e.web.app/"
                icons={iconsTree}
                login="kristy@test.com" 
                pass="123456"
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS   
                💻  FontAwesome
                💻  Stripe
                💻  RESTfulAPI
                💻  Firebase
                💻  Firebase Functions
                💻  Real Time DB
                💻  Reducer
                💻  Reducer
                "
                />
                </div>

                <div className="home__col2">
                <Product 
                id={4}
                header="The Simple Veganista"
                title="Food Blog Post in ReactJs for posting Vegan Recipes and promote CookBooks"
                price={19.99}
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1611279100/food_-blog_wdf6nx.png"
                demolink="https://food-blog-post.now.sh/"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1611361465/food-blogmp4_1-22-2021_2-03-50_PM_ynlxwk.mp4"
                description="A fullstack Blog Post build from scratch, written in ReactJs with SQLAlchemy DB, created to promote amazon/kindle books. "
                description1= "Simple Veganista blog allows users to Post unlimited ammount of recipes on the feed as a guest without singin in. You can share any recipe, upload recipe photo, cooking tips, description etc."
                description2= "Admin side can controll Posts, Delete or leave the recipe published in the feed. Blog has the features as uplouding recipe videos, show sample of PDF book, share or link the information about the books and give advices in regards to clean eating."
                description3="The back-end written in Python-Flask offers a lot of options including the ability to update recipes, and see user email and much more.
                SQLAlchemy DB gives an easy acces to all nesessary information directly in the terminal and allows to sort or update tables quickly if needed."
                features="
                💻  ReactJs
                💻  React Hooks 
                💻  PythonFlask  
                💻  SQLAlchemy
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Twillio  
                💻  FontAwesome
                💻  WebPack
                💻  RESTfulAPI
                💻  YouTube
                💻  PDF
                💻  Heroku"
                login="None" 
                pass="None"
                rating={5}
                icons={iconsTwo}
                />
               
                </div>
                
                <div className="home__col2">
                <Product
                id={5}
                header="Facebook clone"
                title="A mvp of faceebook alike social network website"
                price={18.55}
                demolink="https://fb-clone-365a0.web.app/"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1670191207/Screen_Recording_12-4-2022_4-56-07_PM_nobpmv.mp4"
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1670684322/facebook.clone_qypytf.png"
                rating={5}
                description="A fullstack webapp build with React Js with Firebase Db."
                description1= "This is a mvp, like Facebook social media website that takes users through the login process to the home page."
                description2= "User passes autentification with Gmail to get on to the Profile page that pulls user's profile image and username from Google. On the home page user can add a post with text copy and image that is pulled from the URL. All the Posts are gathered into the feed wich user can interact with. Integrated with React widget for Facebook to allow displaying news from FB mainpage.  "
                description3="The website is deployed on Firebase that gives an easy acces to back-end and allows admin to add, edit and delete Posts from the Feed as well as Addind and Deleting users profiles."
                features="
                💻  ReactJs
                💻  React Hooks  
                💻  React widget
                💻  React Router
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Firebase 
                💻  FontAwesome
                💻  Gmail Auth
                💻  RESTfulAPI
                💻  Real time DB
                💻  DOM"
                login="Google auth" 
                pass="None"
                icons={iconsFive}
                />
                </div>
          </div> 

        <div className="row home_row3 mx-auto">
                <div className="  home__col3">
                <Product
                id={6}
                header="AirBnB clone"
                title="Realtor webapp like AirBnB clone on ReactJs"
                demolink="https://air-bnb-d9522.web.app/"
                price={28.57}
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1671031228/airbnb_tlxhd0.mp4"
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1671032353/airBnb_rlktek.png"
                description="A fullstack realtor webapp like AirBnB build with React Js with Firebase Db."
                description1= "This mvp, is build by AirBnb example and has features like Search for available dates, appartments and add number of guests. User have to login with google email, that pulls user's info from google and can scroll throuh feed and look up for different housing options."
                description3="The website is deployed on Firebase that gives an easy acces to back-end and allows admin to add, edit and delete housing options on the Feed as well as tune in the analytics."
                features="
                💻  ReactJs
                💻  React Hooks  
                💻  React widget
                💻  React Router
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Firebase 
                💻  FontAwesome
                💻  Gmail Auth
                💻  RESTfulAPI
                💻  Real time DB
                💻  DOM"
                login="Google auth" 
                pass="None"
                icons={iconsFive}
                rating={5}
                />
                </div>

                <div className=" home__col3">
                <Product
                id={6}
                header="WhatsApp/Slack Clone"
                title="FullStack web chat ispired by Slack and WhatsApp app"
                price={28.57}
                demolink="https://watsup-clone-f4f91.web.app/"
                image="https://res.cloudinary.com/div5hqtbd/image/upload/v1671044408/watsup_yppqpv.png"
                play="https://res.cloudinary.com/div5hqtbd/video/upload/v1671042934/watsupp_12-14-2022_1-31-14_PM_unsqks.mp4"
                description="A fullstack WebChat inspired by Slack like chats build on React Js with Firebase Db."
                description1= "ReactJs chat clone, can be implemented as a component in a ready-made webapp. This application icludes features like google authentication, create/join the room and chat with online users. "
                description3="The website is deployed on Firebase that gives an easy acces to back-end and allows to control the rooms and users messages"
                features="
                💻  ReactJs
                💻  React Hooks  
                💻  React widget
                💻  React Router
                💻  NodeJs  
                💻  JavaScript  
                💻  BootStrap 
                💻  JSON  
                💻  HTML  
                💻  CSS  
                💻  SCSS  
                💻  SAAS  
                💻  Firebase 
                💻  FontAwesome
                💻  Gmail Auth
                💻  RESTfulAPI
                💻  Real time DB
                💻  DOM"
                login="Google auth" 
                pass="None"
                icons={iconsFive}
                rating={5}
                />
             
            </div>
        </div>

            </div>
        </div>
    )
}

export default Home
