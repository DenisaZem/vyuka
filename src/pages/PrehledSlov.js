import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { Link } from "react-router-dom";
import "./PrehledSlov.css"

const PrehledSlov = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection("nemcina")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);

        if (snapshot.empty) {
          setError("Žádná slovíčka nebo věty k zobrazení");
        } else {
          let result = [];
          snapshot.docs.forEach((oneWord) => {
            result.push({ id: oneWord.id, ...oneWord.data() });
          });
          setData(result);
        }
      }, (err)=>setError(err.message))
      return ()=> unsubscribe()

  }, []);

  const deleteWord = (id)=>{
    projectFirestore.collection("nemcina").doc(id).delete()
  }

  return (
    <section>
      {error && <p>{error}</p>}
      {data.map((oneWord) => {
        const { id, slovoNj, slovoCz,vetaCz,vetaNj } = oneWord;

        return (
          <div key={id} className="slovoBorder">
            <p> <span>Slovo:</span> {slovoNj}</p>
            <p> <span>Překlad slova:</span> {slovoCz}</p>
            <p> <span>Pomocná věta:</span> {vetaNj}</p>
            <p> <span>Překlad pomocné věty:</span> {vetaCz}</p>
            <Link to={`/slovicko/:${id}`} className="Link">Zobrazit větu k slovíčku {slovoCz}</Link>
            <br />
            <button  type="button" onClick={() => deleteWord(id)} className="DeleteButton">Smazat slovíčko</button>
          </div>
        );
      })}
    </section>
  );
};

export default PrehledSlov;
