import Card from 'react-bootstrap/Card';
import Product from './Product';
import {Typewriter} from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index.css'

function Home() {
  return (
    <div className="hero">
        <Card className="bg-dark text-wh border-0">
      <Card.Img className="opacity-50" src="/images/hd_bg.jpg" alt="Card image" height="550px" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        <div className="container">
        <Card.Title className='display-3 fw-bolder MS-0 text-white'>NEW SESSION ARRIVALS</Card.Title>
        <Card.Text className="text-white display-5 ">
          CHECK OUT ALL TRENDS <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['MENS', 'WOMENS', 'JEWELERY','ELECTRONICS']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
        </Card.Text>
        </div>   
      </Card.ImgOverlay>
    </Card>
    <Product/>
    </div>
  );
}

export default Home;