import React , {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../../image/Slider7.jpg'
import Slider2 from '../../image/commercial.jpg'
import Slider3 from '../../image/Slider3.jpg'
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
                <img className='d-block w-100 animation' src={Slider3} alt='Second image' style={{ height:'80vh' }}/>
                    <Carousel.Caption className='slider3'>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className='d-block w-100 animation' src={Slider1} alt='first image' style={{ height:'80vh' }}/>
                    <Carousel.Caption className='slider1'>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className='d-block w-100 animation' src={Slider2} alt='Second image' style={{ height:'80vh' }}/>
                    <Carousel.Caption className='slider2'>
                      
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    )
}
