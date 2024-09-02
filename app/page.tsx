import Navbar from "./ui/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-100 heroContainer">
        <video autoPlay loop className="hero-video">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-text-container">
          <h1 className="text-white text-center">
            Leading car renters in Dubai
          </h1>
          <p className="text-white text-center">
            Wa are the leading car renters in Dubai with the greatest Luxury
            set. Come visit dubay to get the latest of our collection
          </p>
          <button className="mx-auto d-block hero-button">Get started</button>
        </div>
      </div>
    </>
  );
}
