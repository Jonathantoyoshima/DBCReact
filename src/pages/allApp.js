import React from "react";
import TextField from "../components/TextField";

export default () => {
  const [ListOfDragons, setListOfDragons] = React.useState([]);
  const [Dragon, setDragon] = React.useState({});
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
  };

  React.useEffect(() => {
    GetAllDragons();
  }, []);
  console.log(ListOfDragons);

  const GetAllDragons = () => {
    fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", { method: "GET" }).then((res) => {
      res.json().then((data) => {
        setListOfDragons(data);
      });
    });
  };

  const SelectDragon = (id) => (e) => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, { method: "GET" }).then((res) => {
      res.json().then((data) => {
        setDragon(data);
      });
    });
  };

  const DeleteDragon = (id) => (e) => {
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, { method: "DELETE" }).then(
      (res) => {
        GetAllDragons();
      }
    );
  };

  const EditDragon = (id) => (e) => {
    if (Dragon.name && Dragon.type && Dragon.history) {
      console.log("Edit Dragon");
    } else {
      console.log("Not Data");
    }
  };

  const AddDragon = (e) => {
    const timestamp = new Date();
    if (Dragon.name && Dragon.type && Dragon.history) {
      setDragon({ ...Dragon, createAt: timestamp.toISOString() });
    } else {
      console.log("Not Data");
    }
  };

  return (
    <div>
      Nome <TextField name='Nome' type='text' onChange={handleChange} />
      Password <TextField name='Password' type='password' onChange={handleChange} />
      <ul>
        {ListOfDragons.length !== 0
          ? ListOfDragons.map((dragon) => {
              return (
                <li key={dragon.id}>
                  <button onClick={SelectDragon(dragon.id)}>{dragon.name}</button>
                  <button onClick={DeleteDragon(dragon.id)}>Delete</button>
                </li>
              );
            })
          : ""}
      </ul>
      <ul>
        <li>{Dragon.createAt}</li>
        <li>{Dragon.name}</li>
        <li>{Dragon.type}</li>
        <li>{Dragon.history}</li>
      </ul>
      <button onClick={EditDragon}>Edit Dragon</button>
      Nome: <input onChange={(e) => setDragon({ ...Dragon, name: e.currentTarget.value })} />
      tipo: <input onChange={(e) => setDragon({ ...Dragon, type: e.currentTarget.value })} />
      History: <input onChange={(e) => setDragon({ ...Dragon, history: e.currentTarget.value })} />
      <button onClick={AddDragon}>Add Dragon</button>
    </div>
  );
};
