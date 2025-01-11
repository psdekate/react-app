import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({ name, email, message });

    setName = "";
    setEmail = "";
    setMessage = "";
  }

  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <div className="title-and-desc">
            <h2>Submit a form</h2>
            <p>Your queries will be reviewed later</p>
            <form action="" className="form" onSubmit={handleSubmit}>
              <div className="form-section">
                <label htmlFor="formField">Name</label>
                <input
                  type="text"
                  id="formField"
                  placeholder="Enter your name here"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-section">
                <label htmlFor="formField">Email</label>
                <input
                  type="email"
                  id="formField"
                  placeholder="Enter your email here"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-section">
                <label htmlFor="formField">Message</label>
                <textarea
                  name=""
                  id="formField"
                  placeholder="Enter your message here"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button>Submit</button>
              {submittedData && (
                <div>
                  <h2>Name you entered: {submittedData.name}</h2>
                  <p>Email you entered: {submittedData.email}</p>
                  <p>Message you entered: {submittedData.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
