import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "../components/Container";

export default (props) => {
  let { id } = useParams();
  return (
    <Layout>
      <Container>
        <div style={{ width: "100%", maxWidth: 600 }}>
          <div>
            <h1>Dragon {id}</h1>
          </div>
          <div>
            <td>Create&nbsp;At:</td>
            <td>asdfare</td>
          </div>
          <div>
            <td>Tipo</td>
            <td>Luz</td>
          </div>
          <div>
            <td>História</td>
            <td>
              Luz sdfasdfa asdfasdf asdfasdfafa Luz sdfasdfa asdfasdf asdfasdfafa Luz sdfasdfa asdfasdf
              asdfasdfafa Luz sdfasdfa asdfasdf asdfasdfafa Luz sdfasdfa asdfasdf asdfasdfafa
            </td>
          </div>
        </div>

        <Link to={"/dashboard"}>{`<<< Teste`}</Link>
      </Container>
    </Layout>
  );
};
