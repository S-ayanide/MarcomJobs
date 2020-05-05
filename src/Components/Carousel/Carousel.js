import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import DashboardImage1 from '../../assets/Dashboard/Dashboard1.jpeg'
import DashboardImage2 from '../../assets/Dashboard/Dashboard2.jpeg'
import DashboardImage3 from '../../assets/Dashboard/Dashboard3.jpeg'

const ControlledCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel_images"
                src={DashboardImage1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_images"
            src= {DashboardImage2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel_images"
            src={DashboardImage3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}
  
export default ControlledCarousel;