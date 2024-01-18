import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./../Other/Loading.jsx";
import ErrorMessage from "./../Other/ErrorMessage.jsx";
import { login } from "../../Redux/actions/subuserActions";

// function LoginScreen({ history }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.subuserLogin);
//   const { loading, error, userInfo } = userLogin;

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/user/Dashbord");
//       window.location.reload(false);
//     }
//   }, [history, userInfo]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   return (
//     <div>
//       <Container fluid className="w-100">
//         <Row className="justify-content-md-center">
//           <Col className="col-sm-12 col-lg-6">
//             {/* <MainScreen > */}
//             <div className="loginContainer ">
//               {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//               {loading && <Loading />}
//               <h3>Login</h3>

//               <Form onSubmit={submitHandler}>
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     className="p-2"
//                     placeholder="Enter email"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword" className="mb-2">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     className="p-2"
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="p-2">
//                   Submit
//                 </Button>
//               </Form>
//             </div>
//             {/* </MainScreen> */}
//           </Col>
//           <Col className="col-sm-12 col-lg-6">
//             <div className=" d-flex justify-content-center align-items-center align-item-center mt-15">
//               <div className="">
//                 <a href="/#">
//                   <img
//                     src="https://email.uplers.com/blog/wp-content/uploads/2022/07/1-Signatures-blog.gif"
//                     class="w-25"
//                     alt=""
//                   />{" "}
//                 </a>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default LoginScreen;

import "./../../style/login.css"; // Make sure to replace with the actual path to your styles

const SignUpForm = ({ history }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.subuserLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/user/Dashbord");
      window.location.reload(false);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <body>
      <div className="form-container">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <form onSubmit={submitHandler} className="form">
          <h1>Login For User</h1>
          {/* <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
          /> */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="p-2"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            className="p-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <i
            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            id="eye-icon"
            onClick={togglePassword}
          ></i>
          <input
            type="checkbox"
            className="term"
            id="terms"
            name="terms"
            required
          />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
          <button type="submit">Create Account</button>
          <a href="/signup">
            Already have an account? <span>Sign in</span>
          </a>
        </form>
        <div className="image-container">
          <img
            src="https://cdn-lite.ip2location.com/img/sign-up.png"
            alt="Signup"
          />
        </div>
      </div>
    </body>
  );
};

export default SignUpForm;
