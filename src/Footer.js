import './App.css';

function Footer() {
  return (
    <>
    <div className='footer-box'>
      <div className='sub'>
      <h1>{'Follow us For further information'}</h1>
      <input type='search' className='search' placeholder='Enter your Email..'></input>
      <button class='sub-btn'>{'Subscribe'}</button>
      </div>

    <div className='info-box'>
      <div className='logo-content'>
      <h1>{'LOGO'}</h1>
      <p>{'Build and Earn with your online store with lots of cool and exclusive wpo-features'}</p>
      </div>
      <div className='news'>
      <h1>{'Top News'}</h1>
      <div className='new-content'>

      </div>
      </div>
      <div className='links'>
        <h1>{'Useful Links'}</h1>
      <ul>
        <li>{'About Us'}</li>
        <li>{'Our Causes'}</li>
        <li>{'Our Mission'}</li>
        <li>{'Contact Us'}</li>
        <li>{'Our Event'}</li>
      </ul>
      </div>
      <div className='contact'>
      <h1>{'Contact'}</h1>
      <ul>
        <li>{'Lagos, Nigeria'}</li>
        <li>{'+234 812 582 7781'}</li>
        <li>{'edunhabeeb@gmail.com'}</li>
      </ul>
      
      </div>


    </div>
    <div className='right'>
      <h2>{'© 2021. All rights reserved'}</h2>
    </div>
    </div>
    </>
    
  );
}

export default Footer;
