import React from 'react'
import "./Product.css";
import { Button } from 'react-bootstrap';
import {useStateValue} from "../StateProvider";
import { Link } from 'react-router-dom'

function Product({id, title, icons, image, price, rating,header, play,description, description1,  description2,  description3, description4, demolink,login, pass, features}) {
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    
    const addProd=()=>{
        
        dispatch(
            {
            type: 'SHOW_PRODUCT',
            item: {
                id: id,
                title: title,
                image: image,
                icons: icons,
                price: price,
                rating: rating,
                header:header,
                play:play,
                demolink:demolink,
                description:description,
                description1: description1,
                description2: description2,
                description3: description3,
                description4: description4,
                login:login,
                pass:pass,
                features:features,
            },
        })
    }
    return (
    <Link onClick={addProd} to={"/eachProduct/" + id} style={{textDecoration:"none"}}>
        <div className="product">
           
            <img src={image}/> 
            {/* <Button onClick={addToBasket} variant="dark" size="sm">Add to Basket</Button> */}
          
            <div className="product__info">
                <h3>{header}</h3>
                    <p>{title}</p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <h3>✭</h3>
                    ))}
                </div>
                  <Link to={"/eachProduct/" + id}>Learn More</Link>
            </div>   
        </div> </Link>  
    )
}

export default Product
