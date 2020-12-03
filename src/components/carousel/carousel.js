import React , {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../../image/Slider1.jpg'
import Slider2 from '../../image/Slider2.jpg'
import Slider3 from '../../image/Slider3.jpg'
import Slider4 from '../../image/slider4.jpg'
import './carousel.css'

export default function Slider() {

    const [index,setIndex] = useState(1);

    const handleSelect = (SelectedIndex,e) =>{
        setIndex(SelectedIndex);
    };

    return (
        <>
            <Carousel fade='true' activeIndex={index} onSelect={handleSelect} className='carouselBody'>
                <Carousel.Item>
                <img className='d-block w-100' src={Slider3} alt='Second image' style={{ height:'80vh' }}/>
                    <Carousel.Caption className='slider3'>
                        Flowers are love's true language
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className='d-block w-100' src={Slider1} alt='first image' style={{ height:'80vh' }}/>
                    <Carousel.Caption className='slider1'>
                        Christmas isn't a season it's a Feeling!
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className='d-block w-100' src={Slider2} alt='Second image' style={{ height:'80vh' }}/>
                    <Carousel.Caption className='slider2'>
                        Sign Up TODAY for a 15% discount on all our products
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    )
}
