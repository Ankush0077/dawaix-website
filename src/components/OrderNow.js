import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import 'bootstrap/dist/css/bootstrap.min.css';

import { BsArrowRight } from 'react-icons/bs';

const OrderNow = ({btn_class, arrow_class}) => {
  const [show, setShow] = useState({showModal: false, showButton: true, showText: "Enter your pin code."});

  const handleClose = () => setShow({showModal: false, showButton: true, showText: "Enter your pin code."});
  const handleShow = () => setShow({showModal: true, showButton: true, showText: "Enter your pin code."});

  const handleShowButton = () => {
    // document.getElementById('pin-code').value === '208016' ? setShow({showModal: true, showButton: false, showText: "Available at this location."}) : setShow({showModal: true, showButton: true, showText: "Not available at this location."})
    parseInt(document.getElementById('pin-code').value) >= 110000 && parseInt(document.getElementById('pin-code').value) <= 999999 ? setShow({showModal: true, showButton: false, showText: "Available at this location."}) : setShow({showModal: true, showButton: true, showText: "Not available at this location."})
  }

  return (
    <>
        <button
            onClick={handleShow}
            type="button"
            className={btn_class}
            >
                Order Now
            <BsArrowRight className={arrow_class} />
        </button>

        <Modal show={show.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: "2.5vh"}}>Check Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  {show.showText} <br></br> <br />
          <input
            type="text"
            id='pin-code'
            class="form-control block w-full px-4 py-2 mb-4 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Enter PIN code."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button hidden={!show.showButton} variant="primary" onClick={
            handleShowButton
          }>
            Check Availability
          </Button>
          <Button hidden={show.showButton} variant="primary" onClick={
            (e) => {
                  e.preventDefault();
                  window.location.href='https://wa.me/+919508744232?text=Hi,%20I%20need%20medicines.';
                  }
          }>
            Order Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OrderNow