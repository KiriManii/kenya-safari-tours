import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | About Me";
  }, []);

  return (
    <div className="pt-20">
      <div className="section-container">
        <h1 className="text-4xl font-safari mb-6 text-center">About Eleanor</h1>
        <p className="text-center">This is a placeholder for the about page content.</p>
      </div>
    </div>
  );
};

export default About;