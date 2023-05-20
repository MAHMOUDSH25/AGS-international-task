import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="text__inputs">
          <div className="form__container">
            <div className="form">
              <input
                type="text"
                id="issue"
                className="form__input"
                placeholder="Issue..."
              />
            </div>
            <div className="choice__inputs">
              <div className="form">
                <input
                  type="text"
                  id="choice"
                  className="form__input"
                  placeholder="Choice"
                />
              </div>
              <div className="form">
                <input
                  type="text"
                  id="choice"
                  className="form__input"
                  placeholder="Choice"
                />
              </div>
              <div className="form">
                <input
                  type="text"
                  id="choice"
                  className="form__input"
                  placeholder="Choice"
                />
              </div>
            </div>
            <div className="form">
              <input
                type="text"
                id="note"
                className="form__input"
                placeholder="Note"
              />
            </div>
            <div className="upload__btn">
              <label for="upload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="28"
                  viewBox="0 0 38 28"
                  fill="none"
                >
                  <path
                    d="M17.3334 27.3333H9.83335C7.30558 27.3333 5.14558 26.4583 3.35335 24.7083C1.56113 22.9583 0.665577 20.8194 0.666688 18.2917C0.666688 16.125 1.31947 14.1944 2.62502 12.5C3.93058 10.8056 5.63891 9.72222 7.75002 9.25C8.44447 6.69444 9.83335 4.625 11.9167 3.04167C14 1.45833 16.3611 0.666666 19 0.666666C22.25 0.666666 25.0072 1.79889 27.2717 4.06333C29.5361 6.32778 30.6678 9.08444 30.6667 12.3333C32.5834 12.5556 34.1739 13.3822 35.4384 14.8133C36.7028 16.2444 37.3345 17.9178 37.3334 19.8333C37.3334 21.9167 36.6039 23.6878 35.145 25.1467C33.6861 26.6056 31.9156 27.3344 29.8334 27.3333H20.6667V15.4167L23.3334 18L25.6667 15.6667L19 9L12.3334 15.6667L14.6667 18L17.3334 15.4167V27.3333Z"
                    fill="black"
                  />
                </svg>
              </label>
              <input id="upload" type="file" name="filename" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="deadline">
          <label for="date__input" id="date__label">
            Deadline
          </label>
          <input type="date" id="date__input" />
        </div>
        {/*  */}
        <div className="frame">
          <button className="custom-btn delete">
            <span>DELETE</span>
          </button>

          <button className="custom-btn save">
            <span>SAVE</span>
          </button>

          <button className="custom-btn submit">
            <span>SUBMIT</span>
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
