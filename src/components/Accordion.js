import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components'
import { IconContext, Icontext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import './component.css'
const AccordionSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
height: 30vh;
background:white;


`;

const Container = styled.div`
position:absolute;
top:20%;
box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);
width:40%;
height:30px;
`;

const Wrap = styled.div`
background: lightblue;
color: white;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
text-align:center;
cursor:pointer;
height:70px;

h3{

    padding: 2rem;
    font-size: 1.2rem;
}


`;

const Dropdown = styled.div`
background:white;
border: 1px solid lightblue;

`;

const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {

        if (clicked == index) {

            return setClicked(null)

        }

        setClicked(index)
    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <AccordionSection>
                <Container style={{display:"flex",alignItems:"center",position:"relative",height:"80vh",background:"linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);",flexDirection:"column"}}>

                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index} >
                                    <h3>{item.topic}</h3>
                                    <span>{clicked === index ? <FiMinus style={{ color: "black", marginRight: "30px" }} /> : <FiPlus style={{ color: "black", marginRight: "30px" }} />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.description}</p>
                                    </Dropdown>
                                ) : null}

                            </>

                        )

                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    )



}
export default Accordion