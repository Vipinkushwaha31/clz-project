import styled from "styled-components";
import React from "react";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Feel Free to Contact us</h2>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.686475956469!2d80.17585019792274!3d28.549588459986353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1cdd54807c833%3A0x1a918473ea316cf!2sAnandpur%20Urf%20Bhagwantpur%2C%20Uttar%20Pradesh%20262122!5e0!3m2!1sen!2sin!4v1744220781845!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          title="home"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/meoavebj"
              method="post"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="Your username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
