import React, {useRef} from 'react'
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import emailjs from "@emailjs/browser";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2byodpi", "template_bvnfdvm", form.current, {
        publicKey: "V9zzDoynjPinXgUYN",
      })
      .then(
        () => {
          setName("")
          setEmail("")
          setMessage("")
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error("Message failed!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 md:rounded-tl-[7em] md:rounded-tr-[7em]"
        id="contact"
      >
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md shadow-[#6F7CB2] w-full max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Sales
            </h2>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mx-auto mt-8 max-w-xl sm:mt-10"
          >
            <div className="sm:col-span-2">
              <div>
                <label
                  htmlFor="from-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Your name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="from_name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
                   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                   focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Your email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
                   ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                   focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <input
                type="submit"
                value="Send"
                className="block w-full rounded-md text-white bg-[#111B47] hover:bg-[#253168] px-3.5 py-2.5 
                text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact
