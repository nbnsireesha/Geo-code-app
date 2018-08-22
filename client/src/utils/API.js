import axios from "axios";
export default {
  // Finds articles from NYT api
  searchAddress: function(addressData) {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:addressData,
          key:'AIzaSyARonr8hONblrmsYbB_flNzrLDggm348aE'
        }
    })
  },
  // Gets all address from DB
  getAddress: function(page) {
    return axios.get("/api/address?page="+page);
  },
  // save address from DB
  saveAddressInDb: function(addressInfo){
    console.log(addressInfo);
    return axios.post("/api/address", addressInfo);
  },
  // Delete all records from db 
  deleteAllAddress : function(){
    return axios.delete('/api/address/');
  },
  getNextAddress: function(){
    return axios.get("/api/articles/next")

  }
};