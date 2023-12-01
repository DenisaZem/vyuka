import{BrowserRouter, Routes, Route, Switch} from "react-router-dom"
import Login from "./login/Login";
import Profile from "./login/Profile";
import Home from "./pages/Home"
import PrehledSlov from "./pages/PrehledSlov"
import JednoSlovo from "./pages/JednoSlovo"
import LayOut from "./pages/LayOut"
import Form from "./pages/Form"
import Cviceni from "./pages/Cviceni"


const App = () => {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<Home />}></Route>
              <Route path="prehled" element={<PrehledSlov />}></Route>
              <Route path="slovicko/:wordId" element={<JednoSlovo />}></Route>
              <Route path="form" element={<Form />}></Route>
              <Route path="cviceni" element={<Cviceni />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>     
        </BrowserRouter>
}

export default App
