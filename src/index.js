import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Browse,
  Contact,
  Forum,
  // Posts,
  // Post,
  Profile,
  Account,
  Login,
  NotLoggedIn,
  Filter,
  Filter2,
  Ewaste,
  LightingWaste,
  CreatePost,
  Thread,
<<<<<<< HEAD
  Login
=======
  Cash,
  OldProducts,
  MapEwaste,
  MapLwaste,
  Map2ndHand,
>>>>>>> temp1
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/GreenPirates" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/start" element={<Filter />} />
      <Route path="/start2" element={<Filter2 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
      <Route path="/forum" element={<Forum />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
=======
      <Route path="/notlogin" element={<NotLoggedIn/>} />
      <Route path="/forum" element={<Forum />}/>
        {/* <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} /> */}
      {/* </Route> */}
>>>>>>> temp1
      <Route path="/createPost" element={<CreatePost/>} />
      <Route path="/thread/:id" element={<Thread/>} />
      <Route path="/ewaste" element={<Ewaste/>} />
      <Route path="/lightingwaste" element={<LightingWaste/>} />
      <Route path="/cash" element={<Cash/>} />
      <Route path="/OldProducts" element={<OldProducts/>} />
      <Route path="/mapewaste" element={<MapEwaste />} />
      <Route path="/maplwaste" element={<MapLwaste />} />
      <Route path="/map2ndhand" element={<Map2ndHand />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

