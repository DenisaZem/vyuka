import "./Form.css"
import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {

const[wordCz, setWordCz]=useState("")
const[wordNj, setWordNj]=useState("")
const[sentenceNj, setSentenceNj]=useState("")
const[sentenceCz, setSentenceCz]=useState("")

const submitForm = (e)=>{
  e.preventDefault()


  // console.log(wordCz)
  // console.log(wordNj)
  // console.log(sentenceCz)
  // console.log(sentenceNj)

  const newWord ={
    slovoCz: wordCz, 
    slovoNj: wordNj, 
    vetaCz: sentenceCz, 
    vetaNj: sentenceNj}

    projectFirestore.collection("nemcina").add(newWord)

    setWordCz("")
    setWordNj("")
    setSentenceNj("")
    setSentenceCz("")
}




  return <form onSubmit={submitForm}>
    <input 
      type="text"
      placeholder="Nové slovíčko v čestině"
      value={wordCz}
      onChange={(e)=>setWordCz(e.target.value)}
       />
       <br />

    <input 
      type="text"
      placeholder="Nové slovíčko v němčině"
      value={wordNj}
      onChange={(e)=>setWordNj(e.target.value)}
       />
       <br />

    <input 
      type="text"
      placeholder="Paměťová věta v němčině" 
      value={sentenceNj}
      onChange={(e)=>setSentenceNj(e.target.value)}
      />
      <br />

    <input 
      type="text"
      placeholder="Překlad věty" 
      value={sentenceCz}
      onChange={(e)=>setSentenceCz(e.target.value)}
      />
      <br />
    <input type="submit" value="Přidat nové slovíčko do databáze" />
      

  </form>
}

export default Form
