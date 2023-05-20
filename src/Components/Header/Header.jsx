import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <section className="header__top">
        <h1 className="header__title">ISSUE</h1>
        {/*  */}
        {/* SEVERITY SECTION */}
        {/*  */}
        <section className="severity">
          <input type="radio" name="rdo" id="yes" />
          <input type="radio" name="rdo" id="no" />
          <div className="switch">
            <label for="yes">Urgent</label>
            <label for="no">Typical</label>
          </div>
        </section>
      </section>
      {/*  */}
      {/* DEPARTMENT SECTION */}
      {/*  */}
      <div className="categories">
        <h2 className="groupe__title">Relating to what department</h2>
        <div className="radio-title-group">
          <div className="input-container">
            <input
              id="administrative"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="administrative" className="radio-title-label">
                Administrative
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="finance"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="finance" className="radio-title-label">
                Finance
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="accounting"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="accounting" className="radio-title-label">
                Accounting
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="sales"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="sales" className="radio-title-label">
                Sales
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="marketing"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="marketing" className="radio-title-label">
                Marketing
              </label>
            </div>
          </div>
          <div className="input-container">
            <input
              id="logistic"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="logistic" className="radio-title-label">
                Logistic
              </label>
            </div>
          </div>
          <div className="input-container">
            <input
              id="human-resources"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="human-resources" className="radio-title-label">
                Human Resources
              </label>
            </div>
          </div>
          <div className="input-container">
            <input
              id="supplier"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="supplier" className="radio-title-label">
                Supplier
              </label>
            </div>
          </div>
          <div className="input-container">
            <input
              id="security"
              className="radio-button"
              type="radio"
              name="radio"
            />
            <div className="radio-title">
              <label for="security" className="radio-title-label">
                Security
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
