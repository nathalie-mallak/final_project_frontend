import React ,{Component} from 'react'
import Cards from './cards'
import Bouquet1 from '../../image/bouquet1.jpg'
import Bouquet2 from '../../image/bouquet2.jpg'
import Bouquet3 from '../../image/bouquet3.jpg'
import Bouquet4 from '../../image/bouquet4.jpg'

export default function Group() {
    return (
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
                <div className="col-md-3">
                    <Cards imgsrc={Bouquet1} title="sunflower" price="30$"/>
                </div>
                <div className="col-md-3">
                    <Cards imgsrc={Bouquet2} title="tulips" price="40$"/>
                </div>
                <div className="col-md-3">
                    <Cards imgsrc={Bouquet3} title="Roses" price="50$"/>
                </div>
                <div className="col-md-3">
                    <Cards imgsrc={Bouquet4} title="Flowers" price="60$"/>
                </div>
          </div>
            
        </div>
    )
}
