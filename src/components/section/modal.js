import React from 'react';
import ReactDom from 'react-dom'
import './modal.css';
import {Form,Button,ButtonGroup,Col} from 'react-bootstrap'

export const Modal = ({ show, close }) => {
    return ReactDom.createPortal (
      <div className='modal-wrapper'   
                style={{
                transform: show ? 'translateY(-130vh)' : 'translateY(-50vh)',
                opacity: show ? '1' : '0'
            }}>
       
            <div className='modal-header'>
                    <p>Welcome To Our Shop</p>
                    <span onClick={close} className='close-modal-btn'>x</span>
            </div>   
            <div className='modal-content'>
                <div className='modal-body'>
               <Form>

  <Form.Group as={Col} controlId='formGridAddress2'>
    <Form.Label> Full Name </Form.Label>
    <Form.Control placeholder='Full Name' />
  </Form.Group>

    <Form.Group as={Col} controlId='formGridEmail'>
      <Form.Label>Email</Form.Label>
      <Form.Control type='email' placeholder='Enter email' />
    </Form.Group>

    <Form.Group as={Col} controlId='formGridPassword'>
      <Form.Label> Phone Number</Form.Label>
      <Form.Control placeholder='961 70 123 456' />
    </Form.Group>

  <Form.Group controlId='formGridAddress1'>
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder='1234 Main St' />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId='formGridCity'>
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId='formGridState'>
      <Form.Label>State</Form.Label>
      <Form.Control as='select' defaultValue='Choose...'>
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <div className='modal-footer justify-content-around align-items-even  mr-3'>
                <Button type='submit' className='btn-danger'> Reserve A table NOW! </Button>
                <button onClick={close} className=' btn-danger ' id='btn4'>Close</button>
                </div>
</Form>
                </div>
               
              
            </div>    
            
     </div>,document.getElementById('portal')
     
      
     )
  }
