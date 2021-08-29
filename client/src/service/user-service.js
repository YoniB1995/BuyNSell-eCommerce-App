import axios from 'axios'

const API =
  process.env.NODE_ENV === "production"
    ? `https://buynsell-ecommerce-app.herokuapp.com/`
    : "http://localhost:3000";

export const registerUser = async (userData) => {

    const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

    try {
      const { data } = await axios.post(
        "./userauth/register",
        userData,
        config
      );
    localStorage.setItem("authToken", data.token);
    

    } catch (error) {
      console.log(error);
    }
  };


const LoginUser = async (articleData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(articleData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/articles/new`, options);
  } catch (error) {
    console.log(error);
  }
};

const resetPassUser = async (articleData) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(articleData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    await fetch(`${API}/articles/edit/${articleData["_id"]}`, options);
  } catch (error) {
    console.log(error);
  }
};


