import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footersec">
          © {new Date().getFullYear()}. All rights reserved by Aditya Jain
        </section>
      </footer>
    </>
  );
}
