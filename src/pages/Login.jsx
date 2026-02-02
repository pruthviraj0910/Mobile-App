const Login = () => {
  return (
    <div className="page">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <label>Email Address</label>
      <input placeholder="Enter email address" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <button className="btn primary">Login</button>
    </div>
  );
};

export default Login;
