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
    

    } catch (error) {
      console.log(error);
    }
  };


export const LoginUser = async (userData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    const { data } = await axios.post(
        "./user/register",
        userData,
        options
      );

    localStorage.setItem("authToken", data.token);

  } catch (error) {
    console.log(error);
  }
};

export const resetPassUser = async (articleData) => {
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


