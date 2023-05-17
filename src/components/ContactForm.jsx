import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setToast("error");
      const timeoutId = setTimeout(() => {
        setToast("");
      }, 3000);
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            setEmail("");
            setMessage("");
            setName("");
            setToast("success");
            const timeoutId = setTimeout(() => {
              setToast("");
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      className="flex flex-col flex-grow p-2"
      onSubmit={sendEmail}
    >
      {toast !== "" ? (
        <div className="toast duration-200 z-50">
          <div
            className={`alert ${
              toast === "error" ? "bg-red-400" : "bg-green-400"
            } text-white`}
          >
            <div>
              <span>
                {toast === "error"
                  ? "Please fill all the fields"
                  : "Message sent succesfully! You will recieve a response shortly 😁 "}
                <span
                  className="px-4 py-1 cursor-pointer"
                  onClick={() => setToast("")}
                >
                  &#10006;
                </span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <label className=" pl-1 font-semibold">Your Name</label>

      <input
        className="border border-zinc-300 bg-transparent focus:outline-none focus:ring-1 rounded-lg px-2 py-1  dark:border-zinc-600 dark:text-black dark:bg-zinc-200 mb-3"
        type="text"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className=" pl-1 font-semibold">Your Email</label>
      <input
        className="border border-zinc-300 bg-transparent focus:outline-none focus:ring-1 rounded-lg px-2 py-1  dark:border-zinc-600 dark:text-black dark:bg-zinc-200 mb-3"
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className=" pl-1 font-semibold">Message</label>
      <textarea
        className="border border-zinc-300 bg-transparent focus:outline-none focus:ring-1 rounded-lg px-2 py-1  dark:border-zinc-600 dark:text-black dark:bg-zinc-200 mb-3"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="submit"
        className="font-semibold text-white text-lg bg-accent cursor-pointer px-6 py-2 rounded-xl my-2 hover"
        value="SEND"
      />
    </form>
  );
};

export default ContactForm;
