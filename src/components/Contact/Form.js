import React, { useState } from "react";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    comments: "",
  });

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.id]: value });
  };

  return (
    <form>
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
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group mt-2">
            <input
              type="text"
              class="form-control"
              id="subject"
              placeholder="Your Subject.."
              required=""
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
