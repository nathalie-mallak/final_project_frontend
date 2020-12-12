import React, { useState } from 'react';
import { Modal } from './modal'
import './section.css'



export default function Section() {

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
  return (
<div>
    <div className="container mt-4 mb-3 align-items-center justify-content-center" id="contain">
   
          <div className="row row-content mb-2">
              <h5>Welcome To Our Event</h5>
              </div>
              <div className="row row-content">
                  <div className="col-6 col-md-5">
                  {show ? <div onClick={closeModalHandler}></div> : null }
                  <button  onClick={() => setShow(true)} type="button" className="btn btn-danger btn2"> Join us</button>
                  </div>
                  <div className="col-6 col-md-5">
                  <button onClick={() => setShow(true)} type="button" className="btn btn-danger btn2">Read More</button>
                  </div>
          </div>
     </div>
     <Modal show={show} close={closeModalHandler}/>
  </div>


  


  )
  }
