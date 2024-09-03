import Navbar from './ui/navbar';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import eqip1 from '@/public/car.webp';
import eqip2 from '@/public/car2.webp';
import eqip3 from '@/public/car3.webp';
import eqip4 from '@/public/car4.webp';
import eqip5 from '@/public/car5.webp';
import eqip6 from '@/public/car6.webp';
import eqip7 from '@/public/car7.webp';
import eqip8 from '@/public/car8.webp';
import eqip9 from '@/public/car9.webp';
import eqip10 from '@/public/car10.webp';
import eqip11 from '@/public/car11.webp';
import eqip12 from '@/public/car12.webp';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100 heroContainer">
        <video autoPlay loop muted className="hero-video">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-text-container">
          <div>
            <h1 className="text-white text-center">
              Explore Dubai in Style with Our Premium Cars
            </h1>
            <p className="text-white text-center">
              Choose from a wide range of luxury, sports, and economy vehicles
              to suit your needs. Enjoy competitive rates, flexible options, and
              exceptional service. Book today and explore the city’s iconic
              landmarks in style and comfort.
            </p>
            <button className="mx-auto d-block hero-button">Get started</button>
          </div>
        </div>
      </div>
      <h2 className="text-center text-white bg-black py-5">Best Collections</h2>
      <div className="d-flex justify-content-around flex-wrap productsContainer">
        <div>
          <Image
            src={eqip1}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Thermocare</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$499</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip2}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Microbiaz</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$899</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip3}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Lepu</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$799</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip4}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip5}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip6}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip7}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip8}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip9}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip10}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip11}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
          </p>
          <button className="order-button">Order Now</button>
        </div>
        <div>
          <Image
            src={eqip12}
            alt="product image"
            width={250}
            height={150}
            className="productImage"
          />
          <h5 className="text-center bold-text m-1">Shenzhen</h5>
          <p className="text-secondary text-center my-1 mx-2">
            <small>
              This is the best equiment now. Take it without hesitation
            </small>
          </p>
          <p className="text-center m-1 bold-text">$699</p>
          <p className="text-center  w-50 d-flex mx-auto justify-content-around px-2">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar />
          </p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </>
  );
}
