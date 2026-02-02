const Register = () => {
  return (
    <div className="page">
      <h1>Create your PopX account</h1>

      <label>Full Name*</label>
      <input placeholder="Marry Doe" />

      <label>Phone number*</label>
      <input placeholder="Marry Doe" />

      <label>Email address*</label>
      <input placeholder="Marry Doe" />

      <label>Password*</label>
      <input type="password" placeholder="Marry Doe" />

      <label>Company name</label>
      <input placeholder="Marry Doe" />

      <label>Are you an Agency?*</label>
      <div className="radio-group">
        <label><input type="radio" name="agency" defaultChecked /> Yes</label>
        <label><input type="radio" name="agency" /> No</label>
      </div>

      <button className="btn primary">Create Account</button>
    </div>
  );
};

export default Register;
