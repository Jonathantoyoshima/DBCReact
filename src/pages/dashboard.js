import React from "react";
import { Link } from "react-router-dom";
import { GetAllDragons, DeleteDragon } from "../untils/crud";
import "../styles/pages/dashboard.scss";
import Layout from "../components/Layout";
import Container from "../components/Container";
import DragonItem from "../components/dragonItem";

export default () => {
  const [ListOfDragons, setListOfDragons] = React.useState([]);

  React.useEffect(() => {
    if (ListOfDragons.length <= 0) {
      GetAllDragons()
        .then((res) => res.json())
        .then((data) => {
          setListOfDragons(data);
        });
    }
  }, [ListOfDragons.length]);

  const handleDragon = (id) => {
    DeleteDragon(id).then(() =>
      GetAllDragons()
        .then((res) => res.json())
        .then((data) => setListOfDragons(data))
    );
  };

  return (
    <Layout>
      <Container>
        <h1>Meus Incríveis Dragões</h1>
        <div className={"ListOfDragons"}>
          <div className={"header"}>
            <p>Selecione um dragão para mais detalhes</p>
            <Link className={"NewDragon"} to={"/dragon"}>
              Criar um novo Dragão
            </Link>
          </div>
          <div>
            {ListOfDragons.length !== 0
              ? ListOfDragons.map((dragon, index) => {
                  return <DragonItem name={dragon.name} id={dragon.id} key={index} remove={handleDragon} />;
                })
              : ""}
          </div>
        </div>
      </Container>
    </Layout>
  );
};
