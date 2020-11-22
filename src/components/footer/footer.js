import React from 'react'
import './footer.css'
import MailIcon from '@material-ui/icons/Mail'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CopyrightIcon from '@material-ui/icons/Copyright'

const Footer = () => {
    return (
        <>
            <div className='w-100 p-4 d-flex justify-content-center align-items-center' id='footer'  >
                
                <div className=' row w-100 d-flex justify-content-around align-items-center mt-4'>
                    <div classNames='w-50 d-flex justify-content-around align-items-center' id='Raafat'>
                        <h4 className='h4'>Raafat Nasrdine</h4>
                        <div className='col w-100 h-100 d-flex justify-content-around align-items-center'>
                            <p><MailIcon className='icons'/></p>
                            <p><PhoneInTalkIcon className='icons'/></p>
                            <p><LinkedInIcon className='icons'/></p>
                        </div>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-around align-items-center mt-4'>
                    <div classNames='w-50 d-flex justify-content-around align-items-center' id='Raafat'>
                        <h4 className='h4'>Nathalie Mallak</h4>
                        <div className='col w-100 h-100 d-flex justify-content-around align-items-center'>
                            <p><MailIcon className='icons'/></p>
                            <p><PhoneInTalkIcon className='icons'/></p>
                            <p><LinkedInIcon className='icons'/></p>
                        </div>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-around align-items-center mt-4'>
                    <div classNames='w-50 d-flex justify-content-around align-items-center' id='Raafat'>
                        <h4 className='h4'>Wissam Mahmoud</h4>
                        <div className='col w-100 h-100 d-flex justify-content-around align-items-center'>
                            <p><MailIcon className='icons'/></p>
                            <p><PhoneInTalkIcon className='icons'/></p>
                            <p><LinkedInIcon className='icons'/></p>
                        </div>
                    </div>
              </div>
            </div>
            <div id='copyright'>
                <p>Welcome To Our Gorgeous FlowerShop  <span><CopyrightIcon style={{fontSize: 16}}/>2020</span></p>
            </div>
       </>
    )
}

export default Footer