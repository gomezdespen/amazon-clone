import React from 'react';
import './Home.css';
import Product from './Product';

function Home () {
    return (
        <div className="home">

            <div className="home_container">

                <img className="home_image" src="https://lrmonline.com/wp-content/uploads/2019/07/the-boys-THBY_S1_PR_Screener_1280x720_rgb.jpg" alt="#"/>
                
                <div className="home_row">
                    <Product 
                        id="43758593"
                        title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
                        rating={4}/>

                    <Product 
                        id="43758593"
                        title='Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Black' 
                        price={329.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51ntWa1Q0sL._AC_SX569_.jpg" 
                        rating={5}/>
                    
                </div>

                <div className="home_row">

                    <Product 
                        id="43758593"
                        title='Xbox Series X' 
                        price={499.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51A41nLe5IL._SX522_.jpg" 
                        rating={5}/>


                    <Product 
                        id="43758593"
                        title='LG 34 inch 21:9 Curved UltraWide WQHD IPS Monitor' 
                        price={429.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81KPOPH0FhL._AC_SL1500_.jpg" 
                        rating={4}/>

 
                    <Product 
                        id="43758593"
                        title=' Apple iPad Air 10.9-inch' 
                        price={649.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71ammbDB5EL._AC_SX522_.jpg" 
                        rating={3}/>


                    <Product 
                        id="43758593"
                        title='Apple Pencil (2nd Generation)' 
                        price={109.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41S3MKU9TjL._AC_SX522_.jpg" 
                        rating={4}/>

                </div>

                <div className="home_row">

                    <Product 
                        id="43758593"
                        title='PRVKE Travel and DSLR Camera Backpack with Laptop/Tablet Sleeve - Rugged Photography Bag (21 L, Black)' 
                        price={184.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71AbwiK5XZL._AC_SX522_.jpg"  
                        rating={5}/>
                    
                </div>


            </div>
        </div>
    )
}

export default Home;
