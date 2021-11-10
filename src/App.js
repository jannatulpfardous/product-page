


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Shop from './Components2/Shop';
import Admin from "./Components2/Admin/Admin";
import Review from "./Components2/Review/Review";
import Pay from "./Components2/Pay/Pay";
import MyOrder from "./Components2/MyOrder/MyOrder";
import Dashboard from "./Components2/Dashboard/Dashboard";
import AddProduct from "./Components3/AddProduct/AddProduct";
import MakeAdmin from "./Components3/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components3/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Components3/ManageProducts/ManageProducts";













function App() {


  return (


    <div className="App">

      <Router>



        <div>
       

        <Navbar></Navbar>

          <Switch>

          <Route exact path="/">
            <Header></Header>
          </Route>

          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/dashboard">
           <Dashboard></Dashboard>
          </Route>
          <Dashboard>

          <Route exact path="/myOrder">
            <MyOrder></MyOrder>
          </Route>

          <Route exact path="/review">
         <Review></Review>
          </Route>

          

          <Route exact path="/admin">
            <Admin></Admin>
          </Route>


          <Route exact path="/pay">
            <Pay></Pay>
          </Route>

       

          <Route exact path="/addProduct">
           <AddProduct></AddProduct>
          </Route>

          <Route exact path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
          </Route>

          <Route exact path="/ManageAllOrders">
          <ManageAllOrders></ManageAllOrders>
          </Route>
          
          <Route exact path="/ManageProducts">
          <ManageProducts></ManageProducts>
          </Route>

          </Dashboard>

         

          

          



          </Switch>
        
          {/* <Footer></Footer> */}


        </div>



      </Router>




    </div>


  );


}

export default App;
