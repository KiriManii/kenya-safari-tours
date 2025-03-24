import { useEffect } from 'react';
import Button from '../components/common/Button';

const About = () => {
  useEffect(() => {
    document.title = "Eleanor's Safari Tours | About Me";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 bg-earth-brown/10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-safari text-center mb-8">Meet Your Guide</h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="/src/assets/images/about/eleanor.jpg" 
                    alt="Eleanor Thompson, Safari Tour Guide" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <h2 className="text-2xl font-safari text-earth-brown mb-2">Eleanor Thompson</h2>
                  <p className="text-safari-green font-medium mb-4">Professional Safari Guide & Wildlife Conservationist</p>
                  <div className="space-y-4 text-earth-brown/80">
                    <p>Born and raised in Nanyuki, at the foothills of Mount Kenya, I've always had a deep connection to the incredible wildlife of East Africa. My British parents moved to Kenya in the early 1980s, falling in love with the country's natural beauty and deciding to make it their permanent home.</p>
                    <p>After completing my early education at the prestigious Pembroke House School in Gilgil, I moved to North London at age 16 to live with my grandparents and complete my A-levels at Highgate School. The contrast between London's urban landscape and Kenya's vast savannas only deepened my appreciation for the unique beauty of my homeland.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-safari text-earth-brown mb-8 text-center">My Journey</h2>
          
          <div className="space-y-6">
            <div className="bg-beige/30 p-6 rounded-lg">
              <h3 className="text-xl font-safari text-safari-green mb-3">Education & Training</h3>
              <p className="mb-3">I pursued a BSc in Wildlife Conservation at University College London, where I specialized in East African ecosystems. During my studies, I was fortunate to participate in a field research program with the Amboseli Elephant Research Project, working alongside renowned conservationists.</p>
              <p>After graduating, I completed the Kenya Professional Safari Guide certification through the Kenya Professional Safari Guides Association, followed by specialized training in wilderness first aid and wildlife photography guidance.</p>
            </div>

            <div className="bg-beige/30 p-6 rounded-lg">
              <h3 className="text-xl font-safari text-safari-green mb-3">Finding My Passion</h3>
              <p className="mb-3">In 2015, I returned to Kenya permanently, drawn back by the call of the wild. While initially working at the Lewa Wildlife Conservancy, I discovered my true passion lay in sharing Kenya's natural wonders with visitors from around the world.</p>
              <p>A pivotal moment came during the Great Migration of 2016, when I guided a small group of tourists across the Mara River. Witnessing their awe as thousands of wildebeest crossed the crocodile-infested waters, I knew this was my calling – to be a bridge between Kenya's wilderness and those eager to experience it responsibly.</p>
            </div>

            <div className="bg-beige/30 p-6 rounded-lg">
              <h3 className="text-xl font-safari text-safari-green mb-3">Creating Eleanor's Safari Tours</h3>
              <p className="mb-3">After several years working with established tour companies, I founded Eleanor's Safari Tours in 2019. My vision was to create intimate, conservation-focused safari experiences that benefit local communities while providing guests with authentic connections to Kenya's wildlife and cultures.</p>
              <p>Based in the Maasai Mara, I've built relationships with local Maasai communities, partnering with them to offer cultural experiences that respect their traditions while providing sustainable income opportunities. My tours emphasize responsible wildlife viewing, conservation education, and unforgettable moments in nature.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-earth-brown text-beige py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-safari mb-8 text-center">My Safari Philosophy</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-safari-gold/20 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-safari mb-3">Conservation First</h3>
                <p>Every safari contributes to local conservation efforts. 10% of proceeds go directly to wildlife protection initiatives in the Maasai Mara.</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-safari-gold/20 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🦁</span>
                </div>
                <h3 className="text-xl font-safari mb-3">Respectful Encounters</h3>
                <p>We observe wildlife from appropriate distances, respecting their space and natural behaviors. No baiting or disruption ever.</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-safari-gold/20 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-safari mb-3">Educational Focus</h3>
                <p>Every safari is an opportunity to learn about ecosystems, conservation challenges, and success stories in African wildlife protection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-safari text-earth-brown mb-8 text-center">Credentials & Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-safari text-safari-green mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Kenya Professional Safari Guide Level III</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>BSc Wildlife Conservation, University College London</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Wilderness First Responder Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Advanced Tracking & Navigation, EcoTraining Kenya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Conservation Leadership Program Graduate, KWS</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-safari text-safari-green mb-4">Special Knowledge</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Big Cat Behavior Specialist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Bird Identification Expert (450+ species)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Maasai Cultural Liaison & Basic Maa Language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Wildlife Photography Instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-safari-gold mr-2">✓</span>
                  <span>Specialized in Great Migration Patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-safari-green/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-safari text-earth-brown mb-4">Ready for an Unforgettable Safari?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-earth-brown/80">Join me in exploring the wonders of Kenya's wildlife. Every journey is customized to your interests, whether you're passionate about photography, bird watching, or simply soaking in the magic of the savanna.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/tours" variant="primary" size="large">Explore Safari Tours</Button>
            <Button to="/contact" variant="outlined" size="large">Contact Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;