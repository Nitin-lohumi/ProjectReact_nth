import { useState } from "react";
import './App.css';
function  App(){
   const[darkmode,setDarkmode] = useState({
    background:"white",
    color:"black"
   });
   const [button,setbuttoncolor] = useState("dark mode");
   function changeMode(){
    if(darkmode.color=="black"){
      setDarkmode({
        background:"black",
        color:"white",
        textDecoration:"none",
        textTransform:"capitalize"
       });
       setbuttoncolor("light mode")
    }
    else{
      setDarkmode({
        background:"white",
        color:"black",
       });
       setbuttoncolor("Darkmode");
    }
   } 
  return(
    <>
         <div className="d-flex" id="wrapper" style={darkmode}>
            <div className="border-end bg-white" id="sidebar-wrapper" style={darkmode}>
                <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
                <div className="list-group list-group-flush" style={darkmode}>
                    <a style={darkmode} className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
                    <a style={darkmode} className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
                    <a style={darkmode} className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
                    <a style={darkmode} className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                    <a style={darkmode} className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                    <a style={darkmode} className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
                </div>
            </div>
            <div id="page-content-wrapper" style={darkmode}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={darkmode}>
                    <div className="container-fluid" style={darkmode}>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={darkmode}>
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0" style={darkmode}> 
                                
                                <li className="nav-item dropdown" style={darkmode}>
                                    <a  style={darkmode} className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div  className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={darkmode}>
                                        <a className="dropdown-item" href="#!" style={darkmode} >Action</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid" style={darkmode}>
                    <h1 className="mt-4">Simple Sidebar</h1>
                    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                    <p>
                        Make sure to keep all page content within the
                        <code>#page-content-wrapper</code>
                        . The top navbar is optional, and just for demonstration. Just create an element with the
                        <code>#sidebarToggle</code>
                        ID which will toggle the menu when clicked.
                    </p>
                </div>
                <div style={{textAlign:"center"}}><button onClick={changeMode} style={darkmode}>{button}</button></div>
            </div>
        </div>
    </>
  )
}
export default App;