import React from 'react'

import { Form, Col, Container, Row,Button } from 'react-bootstrap';


function Modal({showModal,setShowModal}) {
    return (
        <>
         {showModal ?    
        <Container  fluid style={{position:"fixed",top:"0%", left:"0%",width:"100%",height:"100vh",display:"flex",background:"#9993",justifyContent:"center",alignItems:"center"}} >
           <Row  style={{backgroundColor:"#fff", width:"35vh",height:"60vh",justifyContent:"center",alignItems:"center",padding:"0% 1%"}}>
               <Button  onClick={()=>{setShowModal(prev=>!prev)}} style={{width:"2.5vh",height:"5vw",borderRadius:"5px"}}>X</Button>
                <Form style={{height:"30vh"}}>
                <Form.Group className="mb-8" controlId="formBasicName">
                    <Form.Label style={{color:"#242424",fontSize:"2vh"}}>Name</Form.Label>
                    <Form.Control style={{color:"#242424",fontSize:"1.4vh"}} type="text" placeholder="Enter name" />
                   
                </Form.Group>

                <Form.Group className="mb-8" controlId="formBasicEmail">
                    <Form.Label style={{color:"#242424",fontSize:"2vh"}}>Email</Form.Label>
                    <Form.Control style={{color:"#242424",fontSize:"1.4vh"}} type="email" placeholder="Enter Email" />
                </Form.Group>
                
                <Button variant="primary" type="submit" download style={{padding:"3% 4%",margin:"3% 0%",fontSize:"1.7vh",borderRadius:"5px"}}>
                    DOWNLOAD  SYLLABUS AND SUBMIT
                </Button>
            </Form>
           </Row>
        </Container>
            

       
            
        :null}   
        </>
    )
}

export default Modal
