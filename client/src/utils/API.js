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
    // .then(function(response){
    //   var address ={
    //     formatted_address: response.data.results[0].formatted_address,
    //     lat: response.data.results[0].geometry.location.lat,
    //     lng: response.data.results[0].geometry.location.lng
    //   }
    //   console.log("Address with lat, long " , address);
    //   return address;
    // })
    // .catch(function(error){
    //   console.log("error in API call: ", error);
    // })
  },
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles/");
  },
  //
  saveAddressInDb: function(addressInfo){
    return axios.post("/api/address", addressInfo);
  }
};