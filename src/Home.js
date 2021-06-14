import './App.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


function Home() {
  return (
    <>
    <Navbar />
    <div className = 'web-banner'>
      <div className = 'web-text'>
      <h1>{'We help and cares for helpless'}</h1>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <button className='donate2'>{'DONATE NOW'}</button>
      </div>

      <div className = 'webpic'>
      </div> 
    </div>

    <div className = 'mission'>
    <p>{'What we do?'}</p>
    <h1>{'We Are In A Mission To Help The Helpless'}</h1>
    </div>

    <div className = 'four-boxes'>
    <div className = 'box'>
    <h2>{'Clean Water'}</h2>
    <p>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus ex perferendis sapiente provident. A vel, iure sed dolorum quos voluptas'}</p>
    </div>
    <div className = 'box'>
    <h2>{'Caring & Loving'}</h2>
    <p>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus ex perferendis sapiente provident. A vel, iure sed dolorum quos voluptas'}</p>
    </div>
    <div className = 'box'>
    <h2>{'Become friendly'}</h2>
    <p>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus ex perferendis sapiente provident. A vel, iure sed dolorum quos voluptas'}</p>
    </div>
    <div className = 'box'>
    <h2>{'Helping Hands'}</h2>
    <p>{'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus ex perferendis sapiente provident. A vel, iure sed dolorum quos voluptas'}</p>
    </div>

    </div>
    <div className = 'web-banner'>
      <div className = 'web-text'>
      <p className = 'green'>{'What we do?'}</p>
      <h1>{'We Are In A Mission To Help The Helpless'}</h1>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <button className='donate2'>{'DONATE NOW'}</button>
      </div>

      <div className = 'webpic2'>
      </div> 
    </div>

    <div className = 'bg-text'>
    <div className = 'text-box'>
      <h1>{'6200+'}</h1>
      <p>{'Donation'}</p>
    </div>
    <div className = 'text-box'>
      <h1>{'6200+'}</h1>
      <p>{'Fundraisings'}</p>
    </div>
    <div className = 'text-box'>
      <h1>{'6200+'}</h1>
      <p>{'Volunteers'}</p>
    </div>
    <div className = 'text-boxl'>
      <h1>{'6200+'}</h1>
      <p>{'Projects'}</p>
    </div>
    </div>

        
    <div className = 'mission'>
    <p>{'Our Events'}</p>
    <h1>{'Upcoming Events'}</h1>
    </div>

    <div className = 'four-boxes'>
    <div className = 'edu'>
    <img className = 'edu-img' src= {image1} alt= {'edu'} />
    </div>
    <div className = 'edu'>
    <img className = 'edu-img' src= {image2} alt= {'edu'} />
    </div>
    <div className = 'edu'>
    <img className = 'edu-img' src= {image3} alt= {'edu'} />
    </div>
    </div>


    <div className = 'four-boxes-about'>
    <div className = 'box2'>
    <h2>{'Education for All Children'}</h2>
    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
    </div>
    <div className = 'box2'>
    <h2>{'Education for All Children'}</h2>
    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
    </div>
    <div className = 'box2'>
    <h2>{'Education for All Children'}</h2>
    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
    </div>
    </div>

    <Footer />
    </>
    
  );
}

export default Home;
