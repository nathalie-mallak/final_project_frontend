import React , {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../../image/Slider1.jpg'
import Slider2 from '../../image/Slider2.jpg'
import Slider3 from '../../image/Slider3.jpg'

export default function Slider() {

    const [index,setIndex] = useState(1);

    const handleSelect = (SelectedIndex,e) =>{
        setIndex(SelectedIndex);
    };

    return (
        <>
          <Carousel fade='true' activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
              <img className='d-block w-100 ' src ={Slider1} alt='first image' style={{ height:'70vh' }}/>
                  <Carousel.Caption>
                     <h3 style={{ color:'red' }}>Flowers for you</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className='d-block w-100 ' src ={Slider2} alt='Second image' style={{ height:'70vh' }}/>
                  <Carousel.Caption>
                     <h3 style={{ color:'gold' }}>Happy days</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img className='d-block w-100 ' src ={Slider3} alt='Third image' style={{ height:'70vh' }}/>
                  <Carousel.Caption>
                     <h3 style={{ color:'gold' }}>Yellow Smile</h3>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>  
        </>
    )
}
