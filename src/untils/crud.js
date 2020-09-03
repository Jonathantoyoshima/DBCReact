export const CreateDragon = (dragon) => {
  return fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dragon),
  });
};
export const UpdateDragon = (dragon) => {
  return fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dragon),
  });
};
export const GetAllDragons = () => {
  return fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", { method: "GET" });
};

export const GetDragon = (id) => {
  return fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, { method: "GET" });
};

export const DeleteDragon = (id) => {
  return fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, { method: "DELETE" });
};
