import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Modal from "../components/Modal";
import { GetDragon, CreateDragon, UpdateDragon } from "../untils/crud";
import "../styles/pages/dragon.scss";

export default () => {
  let { id } = useParams();
  const [dragon, setDragon] = React.useState({});
  const [message, setMessage] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const inputName = React.useRef(null);
  const inputType = React.useRef(null);
  const inputHistory = React.useRef(null);

  React.useEffect(() => {
    if (id) {
      GetDragon(id)
        .then((res) => res.json())
        .then((data) => setDragon(data));
    }
  }, [id]);
  const CloseModal = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    if (dragon.name && dragon.type) {
      if (!dragon.id) {
        CreateDragon(dragon).then((res) => {
          if (res.ok) {
            setMessage({ title: "Parabéns!", text: "Dragão enviado." });
            setDragon({});
            inputName.current.value = "";
            inputType.current.value = "";
            inputHistory.current.value = "";
            setOpen(true);
          } else {
            setMessage({ title: "Ops!", text: "Não foi possível enviar seu Dragão." });
            setOpen(true);
          }
        });
      } else {
        UpdateDragon(dragon).then((res) => {
          if (res.ok) {
            setMessage({ title: "Muito bem!", text: "Dragão atualizado." });
            setOpen(true);
          } else {
            setMessage({ title: "Ops!", text: "Não foi possível enviar seu Dragão." });
            setOpen(true);
          }
        });
      }
    } else {
      setMessage({ title: "Informe um Dragão!", text: "Dê um nome ao Dragão e informe seu tipo." });
      setOpen(true);
    }
  };

  return (
    <Layout>
      <Container>
        <Link to={"/dashboard"} className={"btn _secondary"}>{`<<< Retornar`}</Link>
        <form style={{ width: "100%", maxWidth: 600 }}>
          <h1>Ficha Técnica</h1>
          <p>Criado em: {dragon.createdAt}</p>
          <div>
            <label>Dragão:</label> <br />
            <input
              ref={inputName}
              defaultValue={dragon.name}
              className={"TextField"}
              onChange={(e) => setDragon({ ...dragon, name: e.currentTarget.value })}
            />
          </div>
          <div>
            <label>Tipo:</label> <br />
            <input
              ref={inputType}
              defaultValue={dragon.type}
              className={"TextField"}
              onChange={(e) => setDragon({ ...dragon, type: e.currentTarget.value })}
            />
          </div>
          <div>
            História: <br />
            <textarea
              ref={inputHistory}
              defaultValue={dragon.history}
              className={"TextArea"}
              onChange={(e) => setDragon({ ...dragon, history: e.currentTarget.value })}
            />
          </div>
        </form>
        <button className={"btn _primary"} onClick={handleEdit}>
          {id ? "Editar um dragão" : "Criar um Dragão"}
        </button>
        <Modal open={open} message={message} handleClose={CloseModal} />
      </Container>
    </Layout>
  );
};
