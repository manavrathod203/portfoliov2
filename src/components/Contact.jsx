import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineEmail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Contact() {
  const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   toast('Sending .....', {
  //     icon: '⌛',
  //   });
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "8de1ffb2-b13f-4f3d-a291-0390d688658f");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     toast.success("Message sent successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //     toast.error("Error sending message");
  //   }
  // };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_Web3Forms_API_KEY);

    const sendMessage = new Promise((resolve, reject) => {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve("Form Submitted Successfully");
            event.target.reset();
          } else {
            reject(data.message);
          }
        })
        .catch((error) => {
          reject("Error sending message");
          console.error("Error:", error);
        });
    });

    toast.promise(sendMessage, {
      loading: "Sending .....",
      success: "Message sent successfully",
      error: "Error sending message",
    });
  };

  return (
    <div
      id="contact"
      className="w-full  bg-[#e8e8e3] py-12 md:py-16 xl:py-28 px-5 md:px-10 lg:px-20  text-[#252422]"
    >
      <div className="">
        <h2 className="font-['Clash_Display']  text-4xl md:text-6xl xl:text-7xl whitespace-nowrap uppercase">
          Contact Me
        </h2>

        <div className="flex items-center justify-start mt-10">
          <div className="w-full lg:w-4/5 xl:w-3/5 ">
            <form
              onSubmit={onSubmit}
              className="flex flex-col items-start gap-2 text-[#252422]"
            >
              <input
                type="text"
                name="name"
                className="text-xl rounded-md px-3 py-2 border-2 border-[#ccc5b9] focus:outline-none w-full"
                placeholder="your name"
                required
              />
              <input
                type="email"
                name="email"
                className="text-xl rounded-md px-3 py-2 border-2 border-[#ccc5b9] focus:outline-none w-full"
                placeholder="your email address"
                required
              />
              <input
                type="text"
                name="subject"
                className="text-xl rounded-md px-3 py-2 border-2 border-[#ccc5b9] focus:outline-none w-full"
                placeholder="subject"
                required
              />
              <textarea
                name="message"
                className="text-xl rounded-md px-3 py-2 border-2 border-[#ccc5b9] focus:outline-none h-56 w-full"
                placeholder="message"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#252422] text-sm md:text-xl text-[#e8e8e3] uppercase px-5 py-2 rounded-md"
              >
                send message
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
