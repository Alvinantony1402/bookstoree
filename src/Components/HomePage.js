import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../images/cover.jpg'; 
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import ImageCard2 from './ImageCard2';
import bgdown from "../images/finalbg.png";



const useStyles = makeStyles((theme) => ({

}));


const HomePage = (props) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const downContainerRef = useRef(null)
  useEffect(() => {
        setIsCollapsed(true);
    
  }, []);


  const handleExpandMoreClick = () => {
    // Scroll DownContainer
    if (downContainerRef.current) {
      downContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsCollapsed(!isScrolled);
    }
  };
  useEffect(() => {
    // Add a scroll event listener to track scrolling
    const handleScroll = () => {
      if (downContainerRef.current) {
        const { top } = downContainerRef.current.getBoundingClientRect();
        setIsScrolled(top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // Initial state for isCollapsed
    setIsCollapsed(false);
  }, []);
  return (
    
    <div>
    
    

      

      <Container>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              InvnSync
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active text-white font-weight-bold"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pos"
                    className="nav-link text-white font-weight-bold"
                  >
                    Books
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/About"
                    className="nav-link text-white font-weight-bold"
                  >
                    About Me
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
            <Content><BGimg/> 
            <CTA> 
          
            <Signup onClick={() => navigate("pos")}> GET IT ALL THERE </Signup>
            
           
           <Collapse in={isCollapsed} {...(isCollapsed ? { timeout: 2000 } : {})} CollapsedHeight={50}>
            <Description>“Bookshops are dreams built of wood and paper. They are time travel and escape and knowledge and power. They are, simply put, the best of places.” - Jen Campbell</Description>
            <IconButton style= {{fontSize: '4rem', padding: '12px',}}>
            <ExpandMoreIcon  style={{color: 'white',}}onClick={handleExpandMoreClick}/>
          
          </IconButton>
          <a style={{color: 'white',  fontFamily: 'Nunito, sans-serif'}}> Read More</a>
          </Collapse>
            </CTA>
            
            
            
            </Content>
        </Container>

        <BottomContainer ref={downContainerRef}>
        <DownContainer id="myDownContainerId">
          <ImageCard/>
          <div className="w-2 h-full bg-white absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
          <Paragraph> "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win."

          <p className="text-gold">- Stephen King</p></Paragraph>
          
        </DownContainer>
        

        <DownContainer2 id="myDownContainerId2">
          
        <ImageCard2/>
        <Paragraph> "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time" <p className="text-gold"> – Carl Sagan</p></Paragraph>
        </DownContainer2>
        </BottomContainer>
       
        
    </div>
  );
};

const Container = styled.section`
    overflow: visible;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: auto;



`;
const BottomContainer = styled.section`
background-image: url(${bgdown}); 
background-size: cover;
background-repeat: no-repeat;
background-position: center;
overflow: visible;
display: flex;
flex-direction: row;
flex-wrap: wrap;
text-align: center;
height: auto;


`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
flex-direction: column;
height: 100%;
min-height: 100vh;
align-items: center;
justify-content: center;
padding: 80px 40px;
display: flex;
box-sizing: border-box;
`;



const BGimg = styled.div`
background-image: url(${bgimg});
background-color: rgba(255, 255, 255, 1);
z-index :-1;
height: 115%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
top:0;
left:0;
right:0;
position: absolute;
opacity: 0.7;



`;

const CTA = styled.div`
margin-left : auto;
margin-right: auto;
display: flex;
flex-direction: column;
margin-top : 0;
margin-bottom: 50px;
text-align: center;
align-items: center;
justify-content: center;
max-width: 650px;
max-height: 650px;
flex-wrap: wrap;
position: absolute;
object-fit: contain;
`;


const Signup = styled.a`
font-weight: bold;
color: white;
background-color: #0066CC;
margin-botton: 12px;
width: 100%;
letter-spacing: 2px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 6px;
cursor: pointer;
 &:hover{
    background-color: #0483ee;
}
text-decoration: none;

`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%,1);
font-size: 19px;
margin: 0 0 15px;
line-height: 1.8;

`;

const Paragraph = styled.p`
color: hsla(0, 0%, 95.3%,1);
font-size: 19px;
font-style: italic;
margin : auto;
line-height: 1.8;
align-items: center;
@media (max-width: 768px) {
 display: none;
}


`;

const DownContainer = styled.div`

margin-bottom: 10px;
margin-left : 100px;
margin-right: auto;
width: 100%;
position: relative;
flex-direction: row;
height: 100%;
max-height: 100vh;
padding: 80px 40px;
display: flex;
box-sizing: content-box;

@media (max-width: 768px) {
  margin-left: 20px;
  margin-top: 20px;
  padding: 40px 20px;
}

@media (max-width: 480px) {
  margin-left: 10px;
  margin-top: 30px;
  padding: 20px 10px;
}



`;

const DownContainer2 = styled.div`

margin-bottom: 10vw;
margin-right : 100px;
margin-left: auto;
width: 100%;
position: relative;
flex-direction: row-reverse;
height: 100%;
max-height: 100vh;
padding: 80px 40px 80px;
display: flex;
box-sizing: content-box;

@media (max-width: 768px) {

  margin-top: 20px;
  padding: 40px 20px;
}

@media (max-width: 480px) {
 
  margin-top: 30px;
  padding: 20px 10px;
}



`;





export default HomePage;
