import { useEffect, useState, useRef } from "react";
import SecretMessages from "./container/SecretMessages.jsx";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
function App() {
  const navigate = useNavigate();
  
  const ref = useRef();
  useEffect(() => {

    const minhaChave = "secretToken";
    const valor = localStorage.getItem(minhaChave);

    if (valor !== null) {
      // Existe um valor associado à chave
      return navigate(`/createLink/${valor}`);
    }
  }, [navigate]);





const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current.nick; 
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
    if (!user.value) {
        return; 
    } else {
        await axios
            // ⚠️ CORREÇÃO 1: Usar o endpoint correto /usuario
            .post(`${API_URL}/usuario, { nick: user.value }`) 
            .then((res) => {
                // ⚠️ CORREÇÃO 2: O Spring retorna o secretToken
                const secretToken = res.data.secretToken; 

                if (secretToken) {
                    console.log("Esté é o Token:", secretToken);
                    
                    // ⚠️ CORREÇÃO 3: Salva o TOKEN (chave de autorização)
                    localStorage.setItem("secretToken", secretToken);
                    
                    // ⚠️ CORREÇÃO 4: Redireciona usando o TOKEN
                    navigate(`/createLink/${secretToken}`);
                } else {
                    // Tratar caso onde o Spring não devolve o token (erro interno)
                    throw new Error("API não retornou o token secreto.");
                }
            })
            .catch((err) => {
                console.error("Erro na criação do link:", err);
                // Tratar erros (ex: nick muito curto)
            });
    }
};






  return (
    <div className="">
      <SecretMessages userRef={ref} handleSubmit={handleSubmit} />
      <Outlet />
    </div>
  );
}
export default App;
