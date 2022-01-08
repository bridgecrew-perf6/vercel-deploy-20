import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const nameRef = useRef(null);
  const fromRef = useRef(null);
  const msgRef = useRef(null);
  const form = useRef();

  const obj = {
    to_name: "Website Admin",
    from_name: nameRef.current.value,
    message: msgRef.current.value,
    reply_to: fromRef.current.value,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jnzo363",
        "template_2em5nrr",
        obj,
        "user_H9SfjstwHsFu7b7agHlVe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="container mx-auto border-[1px] drop-shadow-lg rounded-md border-blue-ramaiah my-2"
    >
      <h1 className="w-auto mx-auto font-bold text-blue-ramaiah text-center my-2 text-2xl">
        CONTACT FORM
      </h1>{" "}
      <br />
      <div class="form-control">
        <label class="input-group input-group-vertical input-group-lg w-1/2 mx-auto p-2">
          <span>Name</span>
          <input
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            class="input input-bordered input-lg w-full mx-auto"
          />
        </label>{" "}
        <br />
        <label class="input-group input-group-vertical input-group-lg w-1/2 mx-auto p-2">
          <span>Email</span>
          <input
            ref={fromRef}
            type="text"
            placeholder="Your Email"
            class="input input-bordered input-lg w-full mx-auto"
          />
        </label>{" "}
        <br />
        <label class="input-group input-group-vertical input-group-lg w-1/2 mx-auto p-2">
          <span>Message</span>
          <input
            ref={msgRef}
            type="text"
            placeholder="Your Message here"
            class="input input-bordered input-lg w-full mx-auto"
          />
        </label>{" "}
        <br />
        <button className="btn btn-primary w-auto mx-auto mb-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
