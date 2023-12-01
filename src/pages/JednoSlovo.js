
import { useParams } from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react";


const JednoSlovo = () => {

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const{wordId} = useParams()

  useEffect(()=>{
    projectFirestore
      .collection("nemcina")
      .doc(wordId)
      .get()
      .then((document)=>{
        console.log(document)

      if(document.exists){
        console.log(document.data())
        setData(document.data())

      } else{
        setError("Nenašli jsme větu k danému slovu")
      }
    }).catch((err)=>{
      setError(err.message)
  })

  },[wordId])
  
  return  <section>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h1>{data.slovoCz}</h1>
          <p>{data.slovoNj}</p>
          <p>{data.vetaCz}</p>
          <p>{data.vetaNj}</p>
        </div>
      )}
    </section>
   
}

export default JednoSlovo


