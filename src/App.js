import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import 'aos/dist/aos.css';


//    Pages
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./pages/main"
import About from "./pages/about"
import Contact from "./pages/contact"
import Faq from './pages/faq';
import Course from "./pages/Course"
// import DetailPageCard from './pages/detailpage/detailPageCards';

function App () {
  return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/course" component={Course} exact/>
            <Route path="/faq" component={Faq} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            {/* <Route path="/course/:courseId" component={DetailPageCard} exact/> */}
          </Switch>
        </main>
        <Footer />
      </Router>
    );
}

export default App;
