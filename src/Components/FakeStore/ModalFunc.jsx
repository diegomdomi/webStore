import React, { useEffect } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './ModalFunc.css'

const ModalFunc=({changeState})=> {
    
  useEffect(() => {
    M.AutoInit();
  }, [])
  
  
    return (
      <div>
        <button
          className="waves-effect waves-teal btn-flat modal-trigger"
          data-target="modal1"
        >
         Our cookies Policy
        </button>

        <div
        
          id="modal1"
          className="modal"
        >
         
          <div className="modal-content" style={{backgroundColor:"#89c0ba"}}>
            <h4>Our site uses cookies</h4>
            <p>We use cookies and similar tools to provide our services, 
             to understand how customers use our service so that we can make improvements,
             present advertisements, including interest-based advertisements,
             and to share information about your use of our site with social media, 
             advertising and analytics partners. If you do not want to accept all cookies, 
             or if you would like to learn more about how we use cookies, click Personalize cookies.
            </p>
          </div>
          <div className="modal-footer" style={{backgroundColor:"rgb(11 43 91 / 70%)"}}>
            <button className="modal-close waves-effect waves-red btn" style={{margin:"8px",backgroundColor:"none"}}>
              Disagree
            </button>
            <button onClick={changeState} className="modal-close waves-effect waves-green btn">
              Agree
            </button>
          </div>
        </div>
      </div>
    );
  
}

export default ModalFunc;
