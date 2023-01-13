import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDeault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullName: fullName,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullName, email, subject, message);
  }

  return (
    <div className='container mx-auto flex flex-col justify-center items-center pt-10'>
      <div className='px-1 container mx-auto text-center font-semibold text-5xl text-gray-300'>
        Contact
      </div> 
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          name="fullname"
          placeholder='Full Name'
          className='m-10'
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          placeholder='Email'
          className='m-10'
        />
        <input
          type="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
            console.log(subject)
          }}
          name="subject"
          placeholder='Subject'
          className='m-10'
        />
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message"
          placeholder='Message'
          className='m-10'
        />
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
        >Submit</button>
      </form>
    </div>
  );
}

export default Contact