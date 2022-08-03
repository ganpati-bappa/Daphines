import './App.scss';

import Navbar from './Navbar';

import Medicine_box from './Medicine_box';

import Filters from './Filters'

import { FiSearch } from 'react-icons/fi'
import {MdClose} from 'react-icons/md'

function App() {

  const medicines = [1,2,3,4,5,6]
  const date = new Date();

  const category = [{
    name : "Paracetomol Tablets",
    selected : false
  }, {
    name : "Paracetomol Syrup",
    selected : false
  }, {
    name : "Paracetomol Powder",
    selected : false
  }, {
    name : "Acelofanac", 
    selected : true
  }, {
    name : "Magalardete Simethicone oral Syrup",
    selected : false
  } , {
    name : "Mafenamic Paractomol Syrup",
    selected : false
  }]

  const Brands = [{
    name : "Ciphmol Paracetomol",
    selected : false
  }, {
    name :  "Pondal Paracetomol Tablets", 
    selected : false
  }, {
    name : "Combiflam",
    selected : false 
  }, {
    name : "Crocin Tablets",
    selected : false
  }, {
    name : "Calpol Paracetomol",
    selected : false
  }]

  const Buisness = [{
    name : "Wholesale",
    selected : false
   }, {
    name : "Manufacturer",
    selected : false
    }, {
      name : "Retailer",
      selected : false
    }, {
      name : "Exporter",
      selected : false
  }]

  const Strength = [{
    name : "500mg" ,
    selected : true
  }, {
    name : "600mg",
    selected : false
  }]
  const Manufacturer = [{
    name : "Intas Pharmaceutical Ltd",
    selected : false
   }, {
    name :  "Alkem Pharmaceutical Ltd",
    selected : false
   }]

  const filter = ["Acelofenac", "500mg"];

  const address = ["Medical Darpan", "Search", "Fabifu_tablets"]

  let count1 = 0,count2 = 0;

  return (
    <div className = "App">
      <Navbar/>
      <div className = 'location_bar'>
          <div className = "address_bar">
            {address.map((ele) => {
                return (
                  <span className = "address" key = {`address_${count1++}`}> {ele}</span>
                )
            })}
          </div>
          <div className = "Search_Bar">
            <div className = "Search_icon">
              <FiSearch/>
            </div>
            <input type = "text" ></input>
            <div className = "Search_button">
              Search
            </div>
          </div>
          <div className = "filter_results">
              <span className = "Search_name"> Paracetomol </span>
              <span className = "Search_number"> (128 products) </span>
              <span className = "filters">{filter.map((ele) => {
                  return (
                    <div className = "filter" key = {`filter_${count2++}`}>
                      <span>{ele}</span>
                      <span><MdClose/></span>
                    </div>
                  )
                })}
              </span>
              <span className = "Remove_filters"> Remove all </span>
          </div>
      </div>
      <div className = "App_body">
        <div className = "App_nav_bar">
          <Filters heading = "Related Category" filter = {category}/>
          <Filters heading = "Related Brands" filter = {Brands}/>
          <Filters heading = "Buisness Type" filter = {Buisness}/>
          <Filters heading = "Strength" filter = {Strength}/>
          <Filters heading = "Manufacturer" filter = {Manufacturer}/>

        </div>
        <div className= 'App_medicines'>
          {medicines.map((ele) => {
            return (
              <span className = "Medicine_boxes" key = {ele}>
                <Medicine_box/>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
