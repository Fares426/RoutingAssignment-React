import './Portfolio.css';
import imgCake from '../assets/cake.png';
import imgCircus from '../assets/circus.png';
import imgHut from '../assets/hut.png';

export default function Portfolio() {
  return (
    <div className="text-center portfolio">
      <h1 className="text-center pt-4 portTitle">PORTFOLIO COMPONENT</h1>
      <div className="star-icon-port">
        <i className="fa-solid fa-star mb-2"></i>
      </div>
      <div className="container">
        <div className="row g-5 pb-5">
          <div className="col-md-4 imgHolder position-relative overflow-hidden">
            <img src={imgHut} className="portImg" alt="Hut" />
            <div
              data-bs-toggle="modal"
              data-bs-target="#modalHut"
              className="layer position-absolute"
            >
              <i className="fa-solid fa-plus text-white position-absolute top-50 translate-middle-y translate-middle-x"></i>
            </div>
          </div>

          <div className="col-md-4 imgHolder position-relative overflow-hidden">
            <img src={imgCake} className="portImg" alt="Cake" />
            <div
              data-bs-toggle="modal"
              data-bs-target="#modalCake"
              className="layer position-absolute"
            >
              <i className="fa-solid fa-plus text-white position-absolute top-50 translate-middle-y translate-middle-x"></i>
            </div>
          </div>

          <div className="col-md-4 imgHolder position-relative overflow-hidden">
            <img src={imgCircus} className="portImg" alt="Circus" />
            <div
              data-bs-toggle="modal"
              data-bs-target="#modalCircus"
              className="layer position-absolute"
            >
              <i className="fa-solid fa-plus text-white position-absolute top-50 translate-middle-y translate-middle-x"></i>
            </div>
          </div>
          <div className="col-md-4 imgHolder position-relative overflow-hidden">
            <img src={imgHut} className="portImg" alt="Hut" />
            <div
              data-bs-toggle="modal"
              data-bs-target="#modalHut"
              className="layer position-absolute"
            >
              <i className="fa-solid fa-plus text-white position-absolute top-50 translate-middle-y translate-middle-x"></i>
            </div>
          </div>

          <div className="col-md-4 imgHolder position-relative overflow-hidden">
            <img src={imgCake} className="portImg" alt="Cake" />
            <div
              data-bs-toggle="modal"
              data-bs-target="#modalCake"
              className="layer position-absolute"
            >
              <i className="fa-solid fa-plus text-white position-absolute top-50 translate-middle-y translate-middle-x"></i>
            </div>
          </div>

          <div className="col-md-4 imgHolder position-relative overflow-hidden">
            <img src={imgCircus} className="portImg" alt="Circus" />
            <div
              data-bs-toggle="modal"
              data-bs-target="#modalCircus"
              className="layer position-absolute"
            >
              <i className="fa-solid fa-plus text-white position-absolute top-50 translate-middle-y translate-middle-x"></i>
            </div>
          </div>
        </div>

        {/* Modal for Hut */}
        <div
          className="modal fade"
          id="modalHut"
          tabIndex="-1"
          aria-labelledby="modalHutLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <img src={imgHut} className="w-100"  alt="Hut" />
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Cake */}
        <div
          className="modal fade"
          id="modalCake"
          tabIndex="-1"
          aria-labelledby="modalCakeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <img src={imgCake} className="w-100" alt="Cake" />
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Circus */}
        <div
          className="modal fade"
          id="modalCircus"
          tabIndex="-1"
          aria-labelledby="modalCircusLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <img src={imgCircus} className="w-100" alt="Circus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

