import { useDispatch, useSelector } from "react-redux";
import UserInfo from "./components/atoms/UserInfo"
import LoginButton from "./components/atoms/LoginButton"
import Order from "./components/atoms/Order";


function App() { 
  return (
    <div className="App">
      <UserInfo></UserInfo>
      <LoginButton></LoginButton>
      <Order></Order>
    </div>
  )
}

export default App;
