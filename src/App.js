import logo from './logo.svg';
import './App.css';
import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';
import icon4 from './images/icon-4.png';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';
import img6 from './images/img-6.png';
import img7 from './images/img-7.jpg';
import img8 from './images/img-8.jpg';
import img9 from './images/img-9.jpg';
import img10 from './images/img-10.png';
import img11 from './images/img-11.png';
import img12 from './images/img-12.png';
import pic1 from './images/pic-1.png';
import pic2 from './images/pic-2.png';
import pic3 from './images/pic-3.png';
import pic4 from './images/pic-4.jpg';
import contact from "./images/contact-img.svg";
import payment from "./images/payment.png";
// import video from "./images/about-vid.mp4 ";







function App() {
  return (
    <div className="App">
      <header>


        <input type='checkbox' name='' id='toggler'></input>
        <label htmlFor="toggler" className='fas fa-bars'></label>
         <a href='#' className='logo'>flower<span>.</span></a> 
         <nav className='navbar'>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>

          </nav>    

          <div className='icons'>
            <a hre="#" className='fas fa-heart'></a>
            <a hre="#" className='fas fa-shopping-cart'></a>

            <a hre="#" className='fas fa-user'></a>

            </div>   
      </header>
      {/* <!--Header section ends--> */}


     {/* <!--Home section starts--> */}
     <section className="home" id="home">
        <div className="content">
            <h3>Fresh Flowers</h3>
            <span>Natural & beautiful flowers</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet aliquid accusamus culpa adipisci excepturi, Itaque, molestiae voluptatem!</p>
            <a href="#products" className="btn"> Shop Now</a>
        </div>
     </section>


    {/* <!--Home section ends--> */}


  {/* <!--About section starts--> */}
<section className="about" id="about">
    <h1 className="heading"><span>about</span> us</h1>
    <div className="row">
        <div className="video-container">
            <video src= "./images/about-vid.mp4" loop autoPlay muted></video>
            <h3>best flowers sellers</h3>
        </div>
        <div className="content">
            <h3>why choose us?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nam cumque quasi autem blanditiis eaque laboriosam, neque alias sequi! Minus voluptatem expedita incidunt amet vel repellendus rem nisi minima animi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo illum perferendis sapiente iusto distinctio! Esse maxime laborum vero, eligendi, sint impedit nulla fugit fugiat qui harum sapiente natus cum.</p>
            <a href="#" className="btn">Learn More</a>

        </div>
    </div>
</section>

  {/* // <!--About section ends--> */}

{/* // <!--icons section starts--> */}

<section className="icons-container">
    <div className="icons">
        <img src={icon1} alt=""/>
        <div className="info">
            <h3>Free delivery</h3>
            <span>on all orders</span>
        </div>
    </div>

    <div className="icons">
        <img src={icon2} alt=""/>
        <div className="info">
            <h3>10 days returns</h3>
            <span>Moneyback guarantee</span>
        </div>
    </div>

    <div className="icons">
        <img src={icon3} alt=""/>
        <div className="info">
            <h3>offer & gits</h3>
            <span>on all orders</span>
        </div>
    </div>

    <div className="icons">
        <img src={icon4} alt=""/>
        <div className="info">
            <h3>secure paymens</h3>
            <span>protected by paypal</span>
        </div>
    </div>
</section>

{/* <!--icons section ends--> */}

{/* <!--Products section stars--> */}

<section className="products" id="products">
    <h1 className="heading">latest <span>products</span></h1>
    <div className="box-container">
        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img1} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$17.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-15%</span>
            <div className="image">
                <img src={img2} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$13.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-5%</span>
            <div className="image">
                <img src={img3} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$14.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-20%</span>
            <div className="image">
                <img src={img4} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$12.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-17%</span>
            <div className="image">
                <img src= {img5} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$14.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-3%</span>
            <div className="image">
                <img src={img6} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$18.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-18%</span>
            <div className="image">
                <img src={img7} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$15.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src={img8} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$17.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-5%</span>
            <div className="image">
                <img src={img9} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$11.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-11%</span>
            <div className="image">
                <img src={img10} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$11.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-9%</span>
            <div className="image">
                <img src={img11} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$13.99 <span>$15.99</span></div>
            </div>
        </div>

        <div className="box">
            <span className="discount">-5%</span>
            <div className="image">
                <img src={img12} alt=""/>
                <div className="icons">
                    <a href="#" className="fas fa-hea=rt"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>Flower pot</h3>
                <div className="price">$18.99 <span>$15.99</span></div>
            </div>
        </div>
    </div>
</section>
{/* <!--Products section ends--> */}


{/* <!--review section starts--> */}
<section className="review" id="review">
    <h1 className="heading">customer's <span>review</span></h1>
    <div className="box-container">
        <div className="box">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur voluptas quibusdam voluptate aperiam eligendi, at velit enim? Odit quibusdam possimus necessitatibus atque at quia ut omnis, sunt corrupti! Id!</p>
            <div className="user">
                <img src={pic1}alt=""/>
                <div className="user-info">
                    <h3>charles Deco</h3>
                    <span>Happy Customers</span>
                </div>
            </div>
            <span className="fas fa-quote-right"></span>
        </div>

        <div className="box">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur voluptas quibusdam voluptate aperiam eligendi, at velit enim? Odit quibusdam possimus necessitatibus atque at quia ut omnis, sunt corrupti! Id!</p>
            <div className="user">
                <img src={pic2} alt=""/>
                <div className="user-info">
                    <h3>sharon michel</h3>
                    <span>Happy Customers</span>
                </div>
            </div>
            <span className="fas fa-quote-right"></span>
        </div>

        <div className="box">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur voluptas quibusdam voluptate aperiam eligendi, at velit enim? Odit quibusdam possimus necessitatibus atque at quia ut omnis, sunt corrupti! Id!</p>
            <div className="user">
                <img src={pic3} alt=""/>
                <div className="user-info">
                    <h3>Abdullahi Ali</h3>
                    <span>Happy Customers</span>
                </div>
            </div>
            <span className="fas fa-quote-right"></span>
        </div>

        <div className="box">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur voluptas quibusdam voluptate aperiam eligendi, at velit enim? Odit quibusdam possimus necessitatibus atque at quia ut omnis, sunt corrupti! Id!</p>
            <div className="user">
                <img src={pic4} alt=""/>
                <div className="user-info">
                    <h3>Sofia wick</h3>
                    <span>Happy Customers</span>
                </div>
            </div>
            <span className="fas fa-quote-right"></span>
        </div>
    </div>
</section>

{/* <!--review section ends--> */}

[]
{/* <!--contact section starts--> */}
<section className="contact" id="contact">
    <h1 className="heading"><span>contact</span> us</h1>
    <div className="row">
        <form action="">
            <input type="text" className="box" placeholder="Name"/>
            <input type="email" className="box" placeholder="Email"/>
            <input type="number" className="box" placeholder="Number"/>
            <textarea name="" className="box" placeholder="Message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send massage" className="btn"/>
        </form>
        <div className="image">
            <img src={contact} alt=""/>
        </div>
    </div>
</section>
{/* <!--contact section ends--> */}

{/* <!--footer section starts--> */}
<section className="footer">
    <div className="box-container">
        <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">products</a>
            <a href="#">review</a>
            <a href="#">contact</a>
        </div>
        <div className="box">
            <h3>Extra links</h3>
            <a href="#">my account</a>
            <a href="#">my order</a>
            <a href="#">my favorites</a>
        </div>
        <div className="box">
            <h3>Locations</h3>
            <a href="#">india</a>
            <a href="#">USA</a>
            <a href="#">France</a>
            <a href="#">Japan</a>
            <a href="#">Ukraine</a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#">+123-456-7890</a>
            <a href="#">fushionflower@gmail.com</a>
            <a href="#">Kampala, Uganda - 500203</a>
          <img src={payment} alt=""/>
       
        </div>
    </div>
    <div className="credit">
        &copy; Created by <span> Indraja Pola </span> All Right Reserved.
    </div>
</section>

{/* <!--footer section ends--> */}


    </div>
);
};


export default App;
