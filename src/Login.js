import { Button, Input, TextField, FormGroup } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlic";
import { auth } from "./firebase";
import linko from "./link.png";

function Login() {
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [photoUrl, setphoto] = useState("");
  const dispatch = useDispatch();

  const goto = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          id: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoURL: userAuth.user.photoURL,
        })
      );
    });
  };
  const register = () => {
    if (!name) {
      alert("name requires...");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: photoUrl,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  id: userAuth.user.uid,
                  displayName: name,
                  photoURL: photoUrl,
                })
              );
            });
        })
        .catch((error) => alert(error));
    }
  };
  return (
    <div className="login-head">
      {/* Login Page */}

      {/* <div className='login-img'> */}
      <img className="login-img" src={linko} />
      {/* </div> */}
      <br />
      <div className="login-form"></div>
      <form className="login-form" type="submit">
        <FormGroup className="login-form-group">
          <TextField
            className="login-text"
            type="text"
            placeholder="Full Name "
            value={name}
            variant="outlined"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <TextField
            className="login-text"
            type="text"
            placeholder="profile pic "
            value={photoUrl}
            variant="outlined"
            onChange={(e) => {
              setphoto(e.target.value);
            }}
          />
          <TextField
            className="login-text"
            type="email"
            placeholder="e-mail "
            value={email}
            variant="outlined"
            onChange={(e) => {
              setmail(e.target.value);
            }}
          />
          <TextField
            className="login-text"
            type="password"
            value={password}
            placeholder="Password"
            variant="outlined"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <Button
            className="login-button"
            type="submit"
            variant="contained"
            onClick={goto}
          >
            Sign In
          </Button>
        </FormGroup>
        <p>
          <a>
            Need an account ?
            <span className="login-span" onClick={register}>
              Register now
            </span>
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
