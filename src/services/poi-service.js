import axios from "axios";
import {user, place, category} from "../stores";
import {push} from "svelte-spa-router";


export class poiService {
  baseUrl = "";
  categoryList = [];
  placeList = []
  
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const placeCredentials = localStorage.place;
    if (placeCredentials) {
      const savedUser = JSON.parse(placeCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
        userid: savedUser.id
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
          userid: response.data.id
        });
        localStorage.place = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
      userid: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("place");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getPlaces() {
    try {
      const response = await axios.get(this.baseUrl + "/api/places");
      return response.data
     
    } catch (error) {
      return [];
    }
  }

  async getPlacesByCategoryId(parsedURL) {
    try {
      const response = await axios.get(this.baseUrl + "/api/categorys/"+parsedURL+"/places");
      return response.data
     
    } catch (error) {
      return [];
    }
  }

  async addPlace (place, parsedURL) {
    try {
      const response = await axios.post(this.baseUrl + "/api/categorys/" +parsedURL+ "/place", place);
      return response.status == 200;
    } catch (error) {
        return false;
    }
  }

  async getPlaceByPlaceId(parsedURL) {
    try {
      const response = await axios.get(this.baseUrl + "/api/places/" + parsedURL);
      place.set({
        id: response.data._id,
        name: response.data.name,
        description: response.data.description,
        lat: response.data.lat,
        lng: response.data.lng,
      });
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getCategorys() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categorys");
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getCategorysById() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categorys");
      return response.data
    } catch (error) {
      return [];
    }
  }


  async addCategory(name) {
    try {
      const categoryDetails = {
        name: name,
      };
      await axios.post(this.baseUrl + "/api/categorys", categoryDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getUsers() {
    try {
        const response = await axios.get(this.baseUrl + "/api/users")
        this.userList = await response.data;
        return this.userList;
    } catch (error) {
        return [];
    }
  }

  async addImage(place, formData) {
    const response = await axios.post(`${this.baseUrl}/api/places/${place}/images`, formData);
    return response.data
  }

  async deletePlace(parsedURL) {
    try {
        const response = await axios.delete(this.baseUrl + "/api/places/" + parsedURL);
        console.log(response.data)
        return true;
    } catch (error) {
        return false;
    }
  }

}

