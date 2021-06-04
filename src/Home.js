import './App.css';

function Home() {
  return (
    <div className = 'web-banner'>
      <div className = 'web-text'>
      <h1>{'We help and cares for helpless'}</h1>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod modi cum accusamus porro officia atque voluptas veritatis doloremque autem dignissimos sed eius tenetur, tempora dolores dolorem natus veniam soluta?'}</p>
      <button className='donate'>{'DONATE NOW'}</button>
      </div>

      <div className = 'web-text'>
      <img className = 'web-img' src = {'web-img.JPG'} alt = 'web-img'></img>
      </div> 
    </div>
    
  );
}

export default Home;
