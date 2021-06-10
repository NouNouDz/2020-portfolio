import { useEffect, useState } from "react"
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom/cjs/react-router-dom.min"

import Home from "./Compo/Home"
import Contact from "./Compo/Contact"
import Work from "./Compo/Work"

function Router() {
  const [ loading, setLoading ] = useState(false)
  const location = window.location.pathname
  useEffect(() => {
    setLoading(true)
    setTimeout(()=> setLoading(false), 2000)
  }, [location])

  return (
    <>
      <nav className="navbar flex">
        <Link to="/" className="name">Abdenour Mez</Link>
        <div>
          <Link to="/#about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      {loading? <div className="loading"><div/></div>:
      <div className="effect">
      <Switch>
        <Route path="/contact"> <Contact/> </Route>
        <Route path="/work"> <Work/> </Route>
        <Route path="/"> <Home/> </Route>
        <Route path="*"> <Redirect to="/"/> </Route>
      </Switch>
      </div>}
    </>
  );
}

export default withRouter(Router);
