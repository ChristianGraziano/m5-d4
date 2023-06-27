import React from 'react'
import {leftFooterPanelLinks, rightFooterPanelLinks} from './footerLinks'
import { nanoid } from 'nanoid';

const MyFooter = () => {
  return (
    <footer id='footer' className="page-footer font-small blue pt-4" style={{backgroundColor:'#F6F6F6'}}>
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <div class="col-6 m-auto d-flex justify-content-center ">
                              <a href="#">
                              <img className='w-50' src="https://www.nicepng.com/png/detail/344-3446948_related-wallpapers-logo-libro-abierto-png.png" alt="logo" />  
                              </a>

                                
                            </div>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Contatti</h5>
                            <ul className="list-unstyled">
                                {leftFooterPanelLinks.map((link) => {
                                    return(
                                        <li key={nanoid()}>{link.title}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">INFO</h5>
                            <ul className="list-unstyled">
                                {rightFooterPanelLinks.map((link) => {
                                        return(
                                            <li key={nanoid()}>{link.title}</li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://mdbootstrap.com/"> Epibooks.com</a>
                </div>
            </footer>
  );
}

export default MyFooter