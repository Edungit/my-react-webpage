import React from 'react';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css';

class About extends React.Component {
  render () {
    return (
      <>
      <Navbar />
      <div className = 'web-banner'>
      <div className = 'web-text'>
      <h1>{'We help the helplessly'}</h1>
      <h3>Our mission. Our vision</h3>
      <div className ="green-div">
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      </div>
      </div>

      <div className = 'webpic3'>
      </div> 
    </div>
    <div className= 'grey-bg'>
    <div className = 'mission'>
    <p>{'Our Team'}</p>
    <h1>{'Great Team in help'}</h1>
    </div>
    <div className = 'web-banner'>
      <div className = 'web-text'>
      <p>{'Executive director'}</p>
      <h3 className= 'green'>{'Dr. Murindahabi Emmanuel'}</h3>
      <div className='resize'>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      </div>
      </div>

      <div className = 'girl'>
      </div> 
    </div>
    <div className = 'web-banner'>
      <div className='empty'>
      </div> 
      <div className = 'web-left'>
      <p>{'Executive director'}</p>
      <h3 className= 'green'>{'Dr. Murindahabi Emmanuel'}</h3>
      <div className='resize'>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      </div>
      </div>

      
    </div>
    <div className = 'web-banner'>
      
      <div className = 'web-left'>
      <p>{'Executive director'}</p>
      <h3 className= 'green'>{'Dr. Murindahabi Emmanuel'}</h3>
      <div className='resize'>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      </div>
      </div>
      <div className='empty'>
      </div>       
    </div>
    </div>

    <div className = 'mission'>
    <p>{'Our Blog'}</p>
    <h1>{'Latest News'}</h1>
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
    <h3>{'Help The Helpless'}</h3>
    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
    </div>
    <div className = 'box2'>
    <h3>{'Help The Helpless'}</h3>
    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
    </div>
    <div className = 'box2'>
    <h3>{'Help The Helpless'}</h3>
    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}</p>
    </div>
    </div>
      <Footer />
      </>      
    )
  }
}

export default About;