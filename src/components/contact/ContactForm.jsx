"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const messageInputRef = useRef();

  async function formSubmitHandler(e) {
    e.preventDefault();

    setIsLoading(true);

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    try {
      const res = await fetch(`https://next-14-blog.vercel.app/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          phone: enteredPhone,
          message: enteredMessage,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.status === "error") {
        // toast en error
        toast.error(data.message);
        setIsLoading(false);
      } else if (data.status === "success") {
        // toast a success
        toast.success(data.message);
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        phoneInputRef.current.value = "";
        messageInputRef.current.value = "";
        setIsLoading(false);
      }
    } catch (error) {
      // Toast an error
      toast.error("Something went wrong!");
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <ul className="space-y-5">
        <li>
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            type="text"
            id="name"
            placeholder="Please enter your name"
            ref={nameInputRef}
          />
        </li>
        <li>
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            type="text"
            id="email"
            placeholder="Please enter your email"
            ref={emailInputRef}
          />
        </li>
        <li>
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            type="text"
            id="phone"
            placeholder="Please enter your phone number (Optional)"
            ref={phoneInputRef}
          />
        </li>
        <li>
          <textarea
            rows="10"
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            id="message"
            placeholder="Please type your message"
            ref={messageInputRef}
          ></textarea>
        </li>
        <li>
          <button
            disabled={isLoading}
            className="px-5 py-2.5 rounded-xl bg-amber-500 w-full text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:bg-zinc-700 disabled:text-white disabled:cursor-wait"
          >
            {isLoading ? "Sending your message..." : "Submit your message"}
          </button>
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
