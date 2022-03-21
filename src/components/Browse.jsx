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
        
        <div class="col-lg-3">
        <h4>Filter</h4>
         <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Old Products
            </label>
          </div>

           <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              E-waste
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Lighting waste
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Cash for trash
            </label>
          </div>
          </div>

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
          <h4 className style={{ fontFamily: "Arial", fontWeight: 'normal'}}>Recycle Lighting Waste today</h4>
          <p className style={{ textAlign: 'justify'}}>Lighting recycling is getting easier
Recycling light bulbs keeps toxic metals like mercury out of landfill, where it can contaminate the environment and waterways. It also recovers a variety of materials such as glass, ceramic, aluminium and phosphor that can be reused in products like aluminium cans and fertiliser.</p>  
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
              src="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/12/1030_recycling_clothes.jpg"
              alt=""
              width="300"
              height='200'
            />
          </ul>
          </div>
        <div class="col-lg-5">
          <h4 className style={{ fontFamily: "Arial", fontWeight: 'normal'}}>Cash For Trash</h4>
          <p className style={{ textAlign: 'justify'}}>Cash-for-Trash is an incentive programme by Public Waste Collectors, where residents may bring their recyclables to the Cash-for-Trash stations and cash is given in exchange for recyclables. For more information on the rebates, please contact your Public Waste Collector.
          </p>  
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
              src="https://blog.ijugaad.com/file/2017/02/old-jeans-e1499247390705.jpg"
              alt=""
              width="300"
              height='200'
            />
          </ul>
          </div>
        <div class="col-lg-5">
          <h4 className style={{ fontFamily: "Arial", fontWeight: 'normal'}}>Recycle old products</h4>
          <p className style={{ textAlign: 'justify'}}>There are numerous places you can recycle your old products! 
From Salvation Army to Minds, the possibilities are endless.
          </p>  
          <NavLink className="nav-link" to="/start">
                  <Button>SEE MORE</Button>
          </NavLink>  
        </div>

      
        
        
        </div>
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