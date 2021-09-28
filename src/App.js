import React from "react";

import { Link,Route,Switch } from "react-router-dom";
import Home from "./cmponents/Home";
import Login from "./cmponents/Login";
import Navbar from "./cmponents/navbar";
import Register from "./cmponents/Register";
import Product from "./cmponents/product";
import Payment from "./cmponents/payment";
import AdminHome from "./cmponents/AdminHome";
import OrderTable from "./cmponents/OrderTable";
import ViewCakesTable from "./cmponents/ViewCakesTable2";
import customercomplaint from "./cmponents/customercomplaint";
import ViewCakesTableUser from "./cmponents/ViewCakesTableUser";
import complaint from "./cmponents/complaint"
import confirmation from "./cmponents/confirmation";
import { ToastContainer } from 'react-toastify';
import ViewCakesTable2 from "./cmponents/ViewCakesTable2";
import updatecakedetails2 from "./cmponents/updatecakedetails2";
import customerdata from "./cmponents/customerdata";


export default function App() {
  return (

<React.Fragment>
  {/* <ToastContainer/> */}
  <Navbar/>
  
    <div>
      <div>
      <Switch>
  
        <Route path="/" component={Home} exact />
        
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
       
        <Route path="/product" component={Product} />
        {/* <Route path="/product/:cakeId" component={Product} /> */}

        <Route path="/payment" component={Payment} />
        <Route path="/adminhome" component={AdminHome} />
        {/* <Route path="/ViewCakesTable" component={ViewCakesTable} /> */}
        <Route path="/ViewCakesTable2" component={ViewCakesTable2} />
        <Route path="/ordertable" component={OrderTable} />
        <Route path="/viewcakestableUser" component={ViewCakesTableUser} />
        <Route path="/customercomplaint" component={customercomplaint} />
        <Route path = "/update-cake/:cakeId" component = {updatecakedetails2}></Route>
        <Route path="/updatecakedetails2" component={updatecakedetails2} />
        <Route path="/complaint" component={complaint} />
        <Route path="/customerdata" component={customerdata} />
        
        {/* <Route path = "/add-cake/:cakeId" component = {Product}></Route> */}


        <Route path="/confirmation" component={confirmation}  /> 
        
        </Switch>

      </div>
    </div>
    </React.Fragment>
  );
}

