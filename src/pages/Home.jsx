import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | Home";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen bg-hero-pattern bg-cover bg-center flex items-center justify-center text-white">
        <div className="text-center p-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-safari mb-4">Experience Kenya with a Local Expert</h1>
          <p className="text-xl mb-8">Unforgettable safari adventures in the heart of the Maasai Mara</p>
          <button className="btn-primary">Book Your Adventure</button>
        </div>
      </div>

      {/* Placeholder for the rest of the content */}
      <div className="section-container">
        <h2 className="text-3xl font-safari mb-6 text-center">Welcome to the Wild</h2>
        <p className="text-center">This is a placeholder for the home page content. We'll add more sections here.</p>
      </div>
    </div>
  );
};

export default Home;