import axios from "../MyAxios";
import { createContext, useContext, useEffect, useState } from "react";

const FileContext = createContext();
export const FileProvider = ({ children }) => {
  const [kepekLista, setKepekLista] = useState([]);

  const [errors, setErrors] = useState({});

  const getLista = async (vegpont, callBack) => {
    const { data } = await axios.get(vegpont);
    callBack(data);
  };

  const postAdat = async ({ ...adat }, vegpont) => {
    try {
      await axios
        .post(vegpont, adat, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          console.log(resp);
          setKepekLista(resp.data);
        });
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  useEffect(() => {
    getLista("/file-upload", setKepekLista);
  }, []);

  return (
    <FileContext.Provider value={{ kepekLista, postAdat, errors }}>
      {children}
    </FileContext.Provider>
  );
};

export default function useFileContext() {
  return useContext(FileContext);
}
