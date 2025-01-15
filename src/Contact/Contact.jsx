import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='container'>
      <h1 className='text-center contactTitle pt-3'>CONTACT SECTION</h1>
      <div className="star-icon-contact">
        <i className="fa-solid fa-star mb-2"></i>
      </div>
      <div className="container mt-5">
      <div className=' w-75 mx-auto pb-5'>
   

      <div className="form-floating mb-5">
  <input type="text" className="form-control" id="floatingInput" placeholder="ex.Fares"/>
  <label to="floatingInput">userName</label>
            </div>


      <div className="form-floating mb-5">
  <input type="number" className="form-control" id="floatingInput" placeholder="ex.25"/>
  <label to="floatingInput">userAge</label>
            </div>


<div className="form-floating mb-5">
  <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
  <label to="floatingEmail">userEmail</label>
</div>


<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label to="floatingPassword">userPassword</label>
</div>


<button type="submit" className="btn btn-success">send Message</button>
      
      </div>
    </div>
    </div>
  )
}
