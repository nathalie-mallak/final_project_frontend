import React, {useState} from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Modal } from '../section/modal'

import Grid from '@material-ui/core/Grid'
import MailIcon from '@material-ui/icons/Mail'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'
import CopyrightIcon from '@material-ui/icons/Copyright'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'

const Footer = () => {

    const [show, setShow] = useState(false)

    const closeModalHandler = () => setShow(false)
    
    return (
        <>
            <div className='footer'>
                <Grid container spacing={3} justify='center'>
                    <Grid item xs={8} sm={4}>
                        <h4 className='h4'> Get To Know Us </h4>
                        <p className='info'><span><FilterVintageIcon size='small'/></span> About Us </p>
                        <p className='info' onClick={() => setShow(true)}><span><FilterVintageIcon size='small'/></span> Events </p>
                        <p className='info'><span><FilterVintageIcon size='small'/></span> Discounts </p>
                    </Grid>
                    <Grid item xs={8} sm={4}>
                        <h4 className='h4'> Contact Information </h4>
                        <h6 className='h6'><span><LocationOnIcon /></span> Address </h6>
                        <p className='contactInfo'> Baakline, Shouf, Lebanon </p>
                        <h6 className='h6'><span><PhoneIcon/></span> Phone </h6>
                        <p className='contactInfo'> +961 71 234 567 </p>
                        <h6 className='h6'><span><MailIcon/></span> Email </h6>
                        <p className='contactInfo'> customerservice@flowersforyou.com </p>
                        <h6 className='h6'><span><QueryBuilderIcon/></span> Working Days/Hours</h6>
                        <p className='contactInfo'> Mon - Sun/9:00Am - 6:00Pm </p>
                    </Grid>
                    <Grid item xs={8} sm={4}>                      
                        <h4 className='h4'> Legal </h4>
                        <p><Link to='/terms&conditions' className='info'><span><FilterVintageIcon size='small'/></span> Terms and Conditions </Link></p>
                        <p><Link to='/privacy' className='info'><span><FilterVintageIcon size='small'/></span> Privacy Policy </Link></p>
                        <p><Link to='/shoppingPolicy' className='info'><span><FilterVintageIcon size='small'/></span> Shopping Policy </Link></p>
                    </Grid>
                </Grid>
                <div id='copyright'>
                <p>Welcome To Our Gorgeous FlowerShop<span><CopyrightIcon style={{fontSize: 16}}/>2020</span></p>
            </div>
            </div>
            <Modal show={show} close={closeModalHandler}/>
        </>
    )
}

export default Footer
