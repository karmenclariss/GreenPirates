import React from "react";
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const RenderArticles = props =>{
  const { articles } = props;

  const renderArticles = articles.map(({ imgurl, title, text, link, category}) => {
    return (
      <><div class="col-lg-4">
        <ul> <img
          class="thumbnail"
          src= {imgurl}
          alt=""
          width="300"
          height='200' />
        </ul>
      </div><div class="col-lg-5">
          <h4 className style={{ fontFamily: "Arial", fontWeight: 'normal' }}>{title}</h4>
          <p className style={{ textAlign: 'justify' }}>{text}</p>
          <NavLink className="nav-link" to={link}>
            <Button>SEE MORE</Button>
          </NavLink>
        </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45vh' }}></div><div class="col-lg-3"></div></>
    );
  });

  return renderArticles;
};

export default RenderArticles;