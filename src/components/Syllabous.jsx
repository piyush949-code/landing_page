import { Collapse } from './Collapse';
import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Accordion from './Accordion';
import AnotherModal from './AnotherModal';
export const Syllabous = (props) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
    <h3 className="spotlight-heading">SYLLABUS</h3>
      <div className="Syllabus-main-parent-container">
        <div className="Accordion-parent-container">
          <Accordion></Accordion>
        </div>
        <div className="button-parent-container">
          <Button variant="contained" color="primary" className="download_button"  onClick={openModal}>
            Download Pdf
          </Button>
          <AnotherModal style={{ height: "100vh", width: "100vw", position: "fixed" }} showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  )
}
