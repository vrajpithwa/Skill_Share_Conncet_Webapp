import { useState } from 'react'
import NavigationBar from '../components12/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../components12/Posts';
import LeftBar from '../components12/LeftBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../style.scss";


function MainScreen() {

  return (
    <>
      <div>
       
<NavigationBar></NavigationBar>

<div style={{padding: "100px"}}>
<Row>  
  {/* import row */}
  <Col md={8}>
<LeftBar></LeftBar>
</Col>
  <Col md={8}>
  <Posts></Posts>
</Col>

</Row>


</div>
       </div>
    </>
  )
}

export default MainScreen;
