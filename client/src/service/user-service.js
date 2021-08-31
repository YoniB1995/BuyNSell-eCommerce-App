import axios from 'axios'

export const API =
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

  const loginUser = (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${API}/user/login`, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
};

// export const LoginUser = async (userData) => {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(userData),
//     headers: { "Content-Type": "application/json" },
//   };
//   try {
//     const { data } = await axios.post(
//         "./user/register",
//         userData,
//         options
//       );


//   } catch (error) {
//     console.log(error);
//   }
// };

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


