import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Browse() {
  return (
    <div className="browse">
      <div class="container">
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '25vh'}}>
        <h1 class="font-weight-light">Activities</h1>
      </div>
     
        
      <div class ="row">
        <div class="col-lg-3">Filter</div>
        <div class="col-lg-4">
            <ul> <img
              class="thumbnail"
              src="https://images.unsplash.com/photo-1605493666596-f605022f28ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2FsbCUyMGV8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              width="300"
              height='200'
            />
          </ul>
          </div>
          
        <div class="col-lg-5">
          <h4 className style={{ fontFamily: "Arial", fontWeight: 'normal'}}>Recycle E-Waste today</h4>
          <p className style={{ textAlign: 'justify'}}>IT devices and equipment contain toxic substances like lead, mercury, cadmium, polybrominated flame retardants, barium and lithium. If not properly handled, these toxic substances can leach into soil or pollute our air and water supplies. It is thus vital that end-of-life IT equipment be only handled by trusted, professional recycling companies like METech.</p>  
          <NavLink className="nav-link" to="/start">
                  <Button>SEE MORE</Button>
          </NavLink>
        </div>

        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '45vh'}}></div>
        <div class="col-lg-3"></div>
        <div class="col-lg-4">
            <ul> <img
              class="thumbnail"
              size="small"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaVclbMGoINgjgtXPPPujyBH1OJUb7gXLZQ&usqp=CAU"
              alt=""
              width="300"
              height='200'
            />
          </ul>
          </div>
        <div class="col-lg-5">
          <h4 className style={{ fontFamily: "Arial", fontWeight: 'normal'}}>Recycle lighting waste today</h4>
          <p className style={{ textAlign: 'justify'}}>IT devices and equipment contain toxic substances like lead, mercury, cadmium, polybrominated flame retardants, barium and lithium. If not properly handled, these toxic substances can leach into soil or pollute our air and water supplies. It is thus vital that end-of-life IT equipment be only handled by trusted, professional recycling companies like METech.</p>  
          <NavLink className="nav-link" to="/start">
                  <Button>SEE MORE</Button>
          </NavLink>
        </div>

          
        <div class="col-lg-5">Activities</div>
        
        </div>
          {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div> */}
        </div>
      </div>

  );
}

export default Browse;

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;
  padding: 10px 145px;
  border-radius: 0px;
  margin: 1px 100px
  cursor: pointer;
`;