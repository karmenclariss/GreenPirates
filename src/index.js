import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Forum,
  Posts,
  Post,
  Profile,
  Filter,
  Filter2,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/GreenPirates" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/start" element={<Filter />} />
      <Route path="/start2" element={<Filter2 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forum" element={<Forum />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
