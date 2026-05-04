"use client";

import React from "react";

export default function Contact() {
  return (
    <>
      <section className="page1-section4" id="contact">
        <h1>Contact</h1>
        <section className="page1-section4-1">
          <div className="page1-section4-left">
            <img src="/images/contactImg.8ddfbfd11798f881db54.png" alt="" />
            <br />
            <br />
            <div>
              <h3>Aditya Jain</h3>
            </div>

            <div>Email: adijain1106@gmail.com</div>
            <div>Phone: +91 **********</div>
          </div>
          <div className="page1-section4-right">
            <form method="POST" data-netlify="true">
              <h3>YOUR NAME</h3>
              <input type="text" id="username" name="username" placeholder="" required />
              
              <h3>YOUR EMAIL</h3>
              <input type="email" id="email" name="email" placeholder="" required />
              <h3>MESSAGE</h3>
              <textarea id="review" name="review" placeholder="" rows={10} cols={1}></textarea>
              <input className="contact-submit" type="submit" value="Submit" />
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
