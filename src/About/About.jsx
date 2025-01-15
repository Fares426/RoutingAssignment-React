import './About.css'
export default function About() { 
  return (
    <div className="row">
      <div className=' vh-100 d-flex align-items-center justify-content-center body-home '> 
          <div className='text-center  text-white '>
            <h1 className='about-title'>ABOUT COMPONENT</h1>
            <div className='star-icon1'><i className="fa-solid fa-star mb-2"></i></div>
            <div className='d-flex p-holder mt-4 w-75 mx-auto'>
            <p className='me-5 text-start '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='text-start '> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
