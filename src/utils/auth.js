export const BASE_URL = "https://api.karpovsite.ru";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {

      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {

      //   Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse)
    .then((data) => {
      localStorage.setItem('userId', data._id)
      return data;
    })

};

export const getContent = () => {

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',

  }).then((res) => checkResponse(res));
};