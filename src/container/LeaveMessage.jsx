import React, { useRef, useState } from "react";
import {  useSearchParams } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
} from "./leaveMessage";
import BodySecret from "../components/BodySecret.jsx";
import AviaoDePapel from "../assets/aviao-de-papel 1.png"



const LeaveMessage = () => {
  const [searchParams] = useSearchParams();
  const [valueTextArea, setValueTextArea] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = searchParams.get('token');
  const handleBtn = async (e) => {
    e.preventDefault();

    if (!valueTextArea || valueTextArea.trim() === "") {

      return;
    }

    setIsLoading(true);

    try {
      await axios
        .post(`http://localhost:8080/api/mensagens?token=${token}`, {
          "message": valueTextArea,
        })
        .then((res) => {
          setValueTextArea("");
          toast("Mensagem Enviada");
        });

    } catch (err) {
      console.log(err);
      toast.error("Erro ao enviar mensagem.");

    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container className="container">
      <BodySecret>
        <div>
          <h1>Envie uma mensagem Secreta para @Pedro</h1>
          <h2>Ele não saberá quem enviou a mensagem!</h2>
          <textarea
            value={valueTextArea}
            onChange={(e) => setValueTextArea(e.target.value)}
            name="text"
            id=""
            placeholder="Digite sua mensagem aqui..."></textarea>
          <a onClick={handleBtn} disabled={isLoading} >{
            isLoading ? (
              <span>Carregando...</span>
            ) : ('Enviar mensagem')
          }
            <img src={AviaoDePapel} alt="" />
          </a>

        </div>
        <a
          className="criarLink"
          href="/"
          style={{ fontSize: '1em', color: '#6C5CE7', textDecoration: 'underline' }}

        >
          Quer criar outro link? Volte para a página inicial.
        </a>
      </BodySecret>

      <ToastContainer />
    </Container>
  );
};

export default LeaveMessage;
