import { useState } from 'react'
import NavigationBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from '../components/Posts';


function MainScreen() {

  return (
    <>
      <div>
       
<NavigationBar></NavigationBar>
<div style={{padding: "100px"}}>
<Posts></Posts>

</div>
       </div>
    </>
  )
}

export default MainScreen;
