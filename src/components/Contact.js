import './hero.css';
import React, { useState } from "react";
import firebase from '../firebase';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Access Firestore using firebase.firestore()
    const db = firebase.firestore();

    try {
      // Add the form data to Firebase Firestore
      await db.collection("contacts").add({
        name: name,
        email: email,
        message: message,
      });

      // Clear the form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="bg1 py-8">
      <h1 className="uppercase text-center text-3xl md:text-5xl font-bold mt-8 text-emerald-700 animate-bounce">
        Contact
      </h1>
      <hr className="w-[10vw] m-auto bg-emerald-500 h-2 mt-2 animate-pulse" />
      <p className="text-center w-[90vw] text-xl md:text-2xl md:w-[70vw] m-auto mt-8 text-slate-600">
        Feel free to contact me by submitting the form below, and I will get back to you as soon as possible
      </p>
      <div className="bg-[#fff] w-[90vw] lg:w-[40vw] m-auto mt-8 rounded shadow transform transition-transform hover:scale-105">
        <div className="p-8">
          <form onSubmit={handleFormSubmit}>
            <div className="p-4">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="p-4">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="p-4">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-start pb-4 pl-4">
              <button
                type="submit"
                className="uppercase bg-emerald-700 w-[35vw] lg:w-[10vw] font-semibold text-white h-12 transition transform ease-in-out delay-150 hover:-translate-y-2 rounded"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
