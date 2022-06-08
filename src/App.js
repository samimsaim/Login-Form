import React,{useState} from 'react';
import LoginForm from "./component/LoginForm";
import Cod from "./component/cod";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user,setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged In");
    setUser({
      name:details.name,
      email: details.email
    });
  } else {
    console.log("details not match");
    setError("details not match");
  }
  }



  return (
    <div className="App">
    {(user.email != "") ? (
      <Cod />
    ) : (
      <LoginForm Login={Login} error={error} />
    )}
    </div>
  );
}

export default App;
