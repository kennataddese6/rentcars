import Navbar from './ui/navbar';
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
    </>
  );
}
