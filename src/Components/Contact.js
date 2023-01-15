import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import image from "../assets/contact.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm("service_zxblubb", "template_e978ymi", form.current, "sMKLDD5lg_u6LsqGQ").then(
      (result) => {
        console.log(result.text);
        toast.success("Thank you. Your Mail Sent Seccessful.");
      },
      (error) => {
        console.log(error.text);
        toast.error("Something is wrong. please try it again.");
      }
    );
  };
  return (
    <div id="contacts" className="max-w-[1240px] md:h-screen mx-auto p-4">
      <div data-aos="fade-right" data-aos-duration="1500">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact Me</p>
        <h2 className="py-4">Get In Touch</h2>
      </div>
      <div className="bg-gray-400 rounded-2xl p-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div data-aos="fade-up" data-aos-duration="1500">
            <img className="p-5" src={image} alt=""></img>
          </div>
          <form
            data-aos="fade-up"
            data-aos-duration="1500"
            ref={form}
            onSubmit={sendEmail}
            className=" p-5 rounded-lg"
          >
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 my-5">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="input w-full"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                className="input w-full"
              />
            </div>
            <textarea
              name="message"
              className="textarea mt-2 w-full h-48"
              placeholder="Your Message"
            ></textarea>

            <div type="submit" value="Send" className="text-center mt-4">
              <button className="btn btn-wide">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
