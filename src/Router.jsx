import { useEffect, useState } from "react"
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom/cjs/react-router-dom.min"

import Home from "./Compo/Home"
import Contact from "./Compo/Contact"
import Work from "./Compo/Work"
import logo from "./Compo/assets/logo.png"

function Router() {
  const [ loading, setLoading ] = useState(false)
  const [ open, setOpen ] = useState(false)

  const location = window.location.hash
  useEffect(() => {
    setLoading(true)
    setTimeout(()=> setLoading(false), 2000)
  }, [location])

  return (
    <>
      <nav className={open? "navbar flex open": "navbar flex"}>
        <div>
        <Link to="/" className="name">Abdenour Mez</Link>
        </div>
        <div>
          <Link to="/#about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <button className="menu" onClick={()=> setOpen(!open)}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34px" height="30px" viewBox="0 0 34 27" enableBackground="new 0 0 34 27" xmlSpace="preserve" >
<rect fill="#000" width="34" height="5"/>
<rect y="11" fill="#000" width="34" height="5"/>
<rect y="23" fill="#000" width="34" height="5"/>
</svg>
      </button>
      {loading? <div className="loading"><div/></div>:
      <div className="effect">
      <Switch>
        <Route path="/contact"> <Contact/> </Route>
        <Route path="/work"> <Work/> </Route>
        <Route path="/"> <Home/> </Route>
        <Route path="*"> <Redirect to="/"/> </Route>
      </Switch>
      <footer className="footer">
      <div className="links"></div>
      <h1 className="title">
        <img src={logo} alt="logo" style={{background: "#000",padding: "10px",height: "50px",borderRadius: "10px"}}/>
        Abdennour Mez <small style={{"fontWeight": "100"}}>- © All Rights Reserved.</small>
      </h1>
    </footer>
      </div>}
    </>
  );
}

export default withRouter(Router);
