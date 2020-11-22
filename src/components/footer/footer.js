import React from 'react'
import './footer.css'
import MailIcon from '@material-ui/icons/Mail';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
export default function Footer() {
   
    
    return (
        <>
     
            <div className="w-100 p-4 d-flex justify-content-center align-items-center" id="footer"  >
                
                <div className=" row w-100 d-flex justify-content-around align-items-center mt-4">
                    <div classNames="w-50 d-flex justify-content-around align-items-center" id="Raafat">
                        <div >
                            <h2 className="h2">Raafat Nasrdine</h2>
                        </div>
                        <div className="col w-100 h-100 d-flex justify-content-around align-items-center">
                            <>
                            <p>
                            <a href="mailto:Raafatnasrdine@gmail.com"><MailIcon className="icons"/></a>
                        
                            </p>
                            <p>
                            <a href="tel:+96176674225"><PhoneInTalkIcon className="icons"/></a>
                            </p>
                            <p>
                           <a href="https://www.linkedin.com/in/raafat-nasrldine"><LinkedInIcon className="icons"/></a> 
                            </p>
                            </>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-around align-items-center mt-4">
                    <div classNames="w-50 d-flex justify-content-around align-items-center" id="Raafat">
                        <div >
                            <h2 className="h2">Natalie Mallak</h2>
                        </div>
                        <div className="col w-100 h-100 d-flex justify-content-around align-items-center">
                            <>
                            <p>
                            <a href="mailto:nathalie.mallak@gmail.com"><MailIcon className="icons"/></a>
                        
                            </p>
                            <p>
                            <a href="tel:+96176466567"><PhoneInTalkIcon className="icons"/></a>
                            </p>
                            <p>
                            <a href="https://www.linkedin.com/in/nathalie-mallak"><LinkedInIcon className="icons"/></a> 
                            </p>
                            </>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-around align-items-center mt-4">
                    <div classNames="w-50 d-flex justify-content-around align-items-center" id="Raafat">
                        <div >
                            <h2 className="h2">Wissam Mahmoud</h2>
                        </div>
                        <div className="col w-100 h-100 d-flex justify-content-around align-items-center">
                            <>
                            <p>
                            <MailIcon className="icons"/>
                        
                            </p>
                            <p>
                            <PhoneInTalkIcon className="icons"/>
                            </p>
                            <p>
                            <LinkedInIcon className="icons"/>
                            </p>
                            </>
                        </div>
                    </div>
              </div>

            
            
            </div>
            <div  id="copyright">
                <p>Welcome To Our Gorgeous FlowerShop<CopyrightIcon/></p>
                
            </div>
       </>
       
       
    )
}
