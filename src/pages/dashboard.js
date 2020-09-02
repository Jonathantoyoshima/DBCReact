import React from "react";
import "../styles/dashboard.scss";
import Layout from "../components/Layout";
import Container from "../components/Container";
import DragonItem from "../components/dragonItem";
export default (props) => {
  return (
    <Layout>
      <Container>
        <h1>Meus Incríveis Dragões</h1>
        <p>Selecione um dragão para mais detalhes</p>
        <div className={"ListOfDragons"}>
        <DragonItem name={"Dragon 1"}/>
        <DragonItem name={"Dragon 1"}/>
        <DragonItem name={"Dragon 1"}/>
        </div>
      </Container>
    </Layout>
  );
};
