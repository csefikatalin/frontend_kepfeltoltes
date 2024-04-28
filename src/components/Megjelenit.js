import useFileContext from "../contexts/FileContext";
import Card from "./Card";


export default function Megjelenit() {
  const { kepekLista } = useFileContext();
  //console.log(kepekLista);
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-around g-4">
        {kepekLista.map((kep, index) => {
          return <Card kep={kep} key={index} />;
        })}
      </div>
    </div>
  );
}
