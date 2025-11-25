import { useEffect, useState, useRef } from "react";
import SecretMessages from "./container/SecretMessages.jsx";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 
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
    if (!user.value) return;
    try {
      setIsLoading(true);

      await axios
        .post(`${API_URL}/usuario`, { nick: user.value })
        .then((res) => {
          const secretToken = res.data.secretToken;

          if (secretToken) {
            console.log("Esté é o Token:", secretToken);
            localStorage.setItem("secretToken", secretToken);
            navigate(`/createLink/${secretToken}`);
          } else {
            throw new Error("API não retornou o token secreto.");
          }
        })
        .catch((err) => {
          console.error("Erro na criação do link:", err);
         
        });

    } catch (err) {
      
      console.error("Erro no submit:", err);
    } finally {
      setIsLoading(false); 
    }
  };






  return (
    <div className="">
      <SecretMessages userRef={ref} handleSubmit={handleSubmit} isLoading={isLoading} />
      <Outlet />
    </div>
  );
}
export default App;
