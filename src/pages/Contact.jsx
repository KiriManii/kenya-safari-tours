import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | Contact";
  }, []);

  return (
    <div className="pt-20">
      <div className="section-container">
        <h1 className="text-4xl font-safari mb-6 text-center">Contact Eleanor</h1>
        <p className="text-center">This is a placeholder for the contact page content.</p>
      </div>
    </div>
  );
};

export default Contact;