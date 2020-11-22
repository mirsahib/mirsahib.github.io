import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    comments: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const validate = () => {
    let result = true;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!state.name || !state.email || !state.subject || !state.comments) {
      result = false;
      setErrorMsg("Field is empty");
    } else {
      if (!pattern.test(String(state.email).toLowerCase())) {
        result = false;
        setErrorMsg("Invalid Email");
      }
    }
    return result;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!validate()) {
        return;
      }
      //emailjs start
      const templateParams = {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.comments,
      };

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            notify("The e-mail has been sent successfully ");
          },
          (err) => {
            console.log("FAILED...", err);
            notify("Oops Something went wrong");
          }
        );
      //emailjs end

      console.log("emailjs");
      setState({ name: "", email: "", subject: "", comments: "" });
    } catch (error) {
      console.log("Default error", error);
    }
  };

  const notify = (message) => {
    toast.dark(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group mt-2">
            <input
              name="name"
              id="name"
              type="text"
              class="form-control"
              placeholder="Your Name*"
              required=""
              onChange={handleOnChange}
              value={state.name || ""}
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-group mt-2">
            <input
              name="email"
              id="email"
              type="email"
              class="form-control"
              placeholder="Your Email*"
              required=""
              value={state.email || ""}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group mt-2">
            <input
              name="subject"
              type="text"
              class="form-control"
              id="subject"
              placeholder="Your Subject.."
              required=""
              value={state.subject || ""}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group mt-2">
            <textarea
              name="comments"
              id="comments"
              rows="4"
              class="form-control"
              placeholder="Your message..."
              value={state.comments || ""}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-right">
          <input type="submit" class="btn btn-custom" value="Send Message" />
        </div>
      </div>
    </form>
  );
}

export default Form;
