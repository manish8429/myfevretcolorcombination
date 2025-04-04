import Marquee from 'react-fast-marquee';
import img1 from '../assets/one.png'; 
import img2 from '../assets/two.png';
import img3 from '../assets/three.png';
import img4 from '../assets/four.png';
import img5 from '../assets/five.png';
import img6 from '../assets/six.png';
import img7 from '../assets/seven.png';
import img8 from '../assets/eight.png';
import img9 from '../assets/nine.png';
import img10 from '../assets/ten.png';
// import css './MarqueeCards.css';

function MarqueeCards() {
  return (
    <div className="MarqueeCards">
      <div className="title">
        <h1></h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5} >
          <div className="image_wrapper">
            <img src={img1} alt="img1" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="img2" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="img3" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="img4" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="img5" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="img6" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="img7" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="img8" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="img9" style={{height: "50px"}} />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="img10" style={{height: "50px"}} />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeCards;
