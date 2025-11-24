import { useEffect, useState } from "react";
import { Container } from "./addLink";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate, useParams } from "react-router-dom";
import BodySecret from "../components/BodySecret.jsx";
import "./links.css";
//Imagem que eu quero deixarn o NavBox
import Link from "../assets/link.png";

import Whats from "../assets/whatsapp.png"
import Insta from "../assets/instagram.png"
import MensagensRecebidas from "../assets/bate-papo.png"
import LinkQuebrado from "../assets/link-quebrado.png"

function AddLinks() {
  const navigate = useNavigate();
  const parametros = useParams();
  const tokenCompartilhado = parametros.token;

  useEffect(() => {
    if (localStorage.getItem("secretToken") !== parametros.token) {
      navigate("/");
    }
  }, [tokenCompartilhado, navigate]);

  const [inputValue, setInputValue] = useState(
    `http://localhost:5173/leaveMessage?token=${tokenCompartilhado}`
  );

  function handleBtn() {
    navigate(`/messages?token=${tokenCompartilhado}`);
  }

  return (
    <>
      <Container>
        <BodySecret>
          <div >
            <h1>Compartilhe seu link!</h1>
            <h2>Envie para amigos, colegas e fãns</h2>

            <button>{inputValue}</button>

            <CopyToClipboard text={inputValue}><a className="copyLink"> <img src={LinkQuebrado} alt="" />Copiar link</a></CopyToClipboard>

            <a><img src={Whats}  alt="" />Compartilhar no WhatsApp</a>
            <a> <img src={Insta} alt="" />Compartilhar no Instagram</a>
            <a onClick={handleBtn} > <img src={MensagensRecebidas} alt="" />Ver Mensagens Recebidas</a>
          </div>


        </BodySecret>

      </Container>
    </>
  );
}

export default AddLinks;
