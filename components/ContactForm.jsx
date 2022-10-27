import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqrggkq");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <font className="text-xl">Contact Form</font>
      <div className=" flex flex-col space-y-3">
        <input
          className="bg-gray-200  text-black rounded-sm px-4 h-9 outline-cyan-600 outline-offset-4  border-2"
          placeholder="Full Name"
          type="text"
          name="name"
          id=""
          autoComplete="off"
          required
        />
        <input
          className="bg-gray-200  text-black rounded-sm px-4 h-9 outline-cyan-600 outline-offset-4  border-2"
          placeholder="Email"
          type="text"
          name="email"
          id=""
          autoComplete="off"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="bg-gray-200 text-black rounded-sm px-4 h-32 md:h-44 outline-cyan-600 outline-offset-4  border-2"
          placeholder="Message"
          name="message"
          id=""
          cols="30"
          rows="10"
          autoComplete="off"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          disabled={state.submitting}
          type="submit"
          className="bg-cyan-600 h-9 rounded-sm hover:scale-95 transition-all text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
