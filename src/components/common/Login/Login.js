import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../Login/Login.css'

const Login = ({ login,createAccount, onChange }) => {
    const initialUserState ={
        newEmail:"",
        newPass:"",
        confPass:""
    } 
    const [user,setUser] = useState(initialUserState)
    const [create,setCreate]=useState(false)
    
    const onChangeNew = e => {
        const value = e.target.value
        const name = e.target.name
    
        setUser({ ...user, [name]: value })
      }

    const checkAccount = (e)=>{
        e.preventDefault()
       

        if(user.newPass === user.confPass){
            createAccount(user)
            setCreate(true)
        }
        else{
            alert("Sus contraseñas no coinciden")
        }
        
    }


  return (
    <div className="container-login">
        <>
      <Form onSubmit={login}>
          <h3>Sign In</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChange}
            name="name"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChange}
            name="pass"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>

      {/* //-----------------REGISTER------------------// */}
      <>
      <Form onSubmit={checkAccount}>
        <h3>If you don't have an account,please sign up </h3>
        <Form.Group >
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={onChangeNew}name="newEmail"type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group >
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={onChangeNew} name="newPass" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group >
          <Form.Label>Confirm your Password</Form.Label>
          <Form.Control onChange={onChangeNew} name="confPass"type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      </>
    </div>
  );
};

export default Login;
