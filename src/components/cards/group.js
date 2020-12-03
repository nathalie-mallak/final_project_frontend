import React from 'react'
import Cards from './cards'
import Bouquet1 from '../../image/bouquet1.jpg'
import Bouquet2 from '../../image/bouquet2.jpg'
import Bouquet3 from '../../image/bouquet3.jpg'
import Bouquet4 from '../../image/bouquet4.jpg'
import Bouquet5 from '../../image/bouquet5.jpg'
import Bouquet6 from '../../image/bouquet6.jpg'
import Bouquet7 from '../../image/bouquet7.jpg'
import Bouquet8 from '../../image/bouquet8.jpg'
import './cards.css'

export default function Group() {
    return (
        <>
            <p className='productsTitle'> Order flower gifts for any occasion in Lebanon </p>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet1} title='Peaceful Day' price='30$'/>
                    </div>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet2} title='Mixy' price='40$'/>
                    </div>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet3} title='Floral Fancy' price='50$'/>
                    </div>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet4} title='Stylish Spring' price='60$'/>
                    </div>
                </div>
            </div>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet5} title='Simply Pink' price='30$'/>
                    </div>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet6} title='Red Romance' price='40$'/>
                    </div>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet7} title='Thank You' price='50$'/>
                    </div>
                    <div className='col-md-3 sm-6'>
                        <Cards imgsrc={Bouquet8} title='China Aster' price='60$'/>
                    </div>
                </div>
            </div>
        </>
    )
}
