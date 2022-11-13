import React from 'react'
export default function Modal () {
  return (
      <div className="modal fade" id="connectwallet" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Connect Wallet</h5>
              <button  className="btn-close border-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-3 px-4">
              <p className='modal-text'>Choose your preferred wallet:</p>
               <div className='d-flex justify-content-between mt-3 connect-option'>
                <img src='./images/metamaskwithtext.svg' alt='metamaskconnect'/>
                <img src='./images/Chevronarrowdown.svg' alt='chevron down'/>
               </div>
               <div className='d-flex justify-content-between mt-3 connect-option'>
                <img src='./images/walletconnectwithtext.svg' alt='walletconnect'/>
                <img src='./images/Chevronarrowdown.svg' alt='chevron down'/>
               </div>
            </div>
            <div className="modal-footer border-0">
              
            </div>
          </div>
        </div>
      </div>
  )
}

