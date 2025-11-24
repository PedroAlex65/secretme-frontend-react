import { useEffect, useState } from "react";
import ImgMessagem from "../assets/mensagem.png";
import userMessage from "../assets/usermessagem.png"
import expandir from "../assets/expandir.png"
import { Container } from "./messages";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BodySecret from "../components/BodySecret.jsx";



const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  const [searchParams] = useSearchParams();
  const secretToken = searchParams.get('token');
  const [isLoading, setIsLoading] = useState(true);

  const getMessages = async () => {
    if (!secretToken) return;

    try {
      const res = await axios.get(`https://secretme-api-springboot.onrender.com/api/mensagens/recebidas?token=${secretToken}`);

      setMessages(res.data);
      setIsLoading(false)
    } catch (error) {
      console.error("Erro ao carregar mensagens", error);
      setIsLoading(false)

      if (error.response && error.response.status >= 400) {
        toast.error("Token de acesso inválido. Redirecionando...");
        // Limpa o localStorage e redireciona (perdeu a sessão)
        localStorage.removeItem("secretToken");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    getMessages();

    if (secretToken) {
      getMessages()
    }else{
      const savedToken = localStorage.getItem("secretToken")
      if(savedToken){
        navigate(`/messages?token=${savedToken}`)
      }else{
        navigate("/")
      }
    }
  }, [secretToken, navigate]);

  const notify = () => toast("Mensagem Copiada");



  return (

    <Container className="conteudos">
            <BodySecret>
                <ul>
                    {messages.length === 0 ? (
                        <p>Você ainda não recebeu mensagens secretas.</p>
                    ) : (
                        messages.map((item, i) => (
                            <div className="fieldMessage" key={i}>
                                <img src={userMessage} alt="" />
                                <div className="container-li">
                                    {/* ⚠️ O campo correto é item.mensagem (ou item.message, se corrigiu o DTO/Entidade) */}
                                    <li>{item.mensagem}</li> 
                                </div>
                                <img src={expandir} alt="" className="imagem-expandir" />
                            </div>
                        ))
                    )}
                </ul>
            </BodySecret>
            <ToastContainer />
        </Container>

  );
};

export default Messages;
