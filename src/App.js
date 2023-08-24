import { useState } from "react";
import "./App.css";

const App = () => {
  const [curr, setCurr] = useState("double");

  const onChangeInput = (e) => {
    setCurr(e.target.value);
  };

  const singleActive = curr === "single" ? "active" : null;
  const doubleActive = curr === "double" ? "active" : null;
  const trippleActive = curr === "tripple" ? "active" : null;

  return (
    <>
      <div className="main-container">
        <div className="top-container">
          <hr />
          <h3>Bundle & Save</h3>
          <hr />
        </div>

        <div className={`single-pair ${singleActive}`}>
          <div className="container">
            <input
              id="single"
              type="radio"
              name="pair"
              value={"single"}
              onChange={onChangeInput}
            />
            <label htmlFor="single">
              <span>1 Pair</span> <br />{" "}
              <span className="currency">DKK 195.00</span>
            </label>
          </div>
          <span className="discount">50% OFF</span>
        </div>

        <div className={`double-container ${doubleActive}`}>
          <div className="double-pair">
            <div className="container">
              <input
                id="pair"
                type="radio"
                name="pair"
                value={"double"}
                onChange={onChangeInput}
                defaultChecked
              />
              <label htmlFor="pair">
                <span>2 Pair</span> <br />
                <span className="currency">DKK 345.00</span>
              </label>
            </div>
            <span className="strike">
              <br />
              DKK 195.00
            </span>
            <span className="most-popular">
              Most Popular <br />
              <span className="discount">40% OFF</span>
            </span>
          </div>
          <div className="input-container">
            <div className="para-container">
              <p htmlFor="size">Size</p>
              <p htmlFor="color">Color</p>
            </div>
            <div className="select-container">
              <label>#1</label>
              <select className="size" name="size">
                <option value={"XS"}>XS</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
                <option value={"XXL"}>XXL</option>
                <option value={"XXL"}>XXL</option>
              </select>

              <select name="color">
                <option value={"Colour"}>Colour</option>
                <option value={"Black"}>Black</option>
                <option value={"Grey"}>Grey</option>
                <option value={"White"}>White</option>
                <option value={"Red"}>Red</option>
                <option value={"Green"}>Green</option>
                <option value={"Blue"}>Blue</option>
              </select>
            </div>
            <div className="select-container">
              <label>#2</label>
              <select className="size" name="size">
                <option value={"XS"}>XS</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
                <option value={"XXL"}>XXL</option>
                <option value={"XXL"}>XXL</option>
              </select>
              <select name="color">
                <option value={"Colour"}>Colour</option>
                <option value={"Black"}>Black</option>
                <option value={"Grey"}>Grey</option>
                <option value={"White"}>White</option>
                <option value={"Red"}>Red</option>
                <option value={"Green"}>Green</option>
                <option value={"Blue"}>Blue</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`single-pair ${trippleActive}`}>
          <div className="container">
            <input
              id="tripple"
              type="radio"
              name="pair"
              onChange={onChangeInput}
              value={"tripple"}
            />
            <label htmlFor="single">
              <span>3 Pair</span> <br />{" "}
              <span className="currency">DKK 528.00</span>
            </label>
          </div>
          <span className="discount">60% OFF</span>
        </div>

        <div className="shipping">
          <p className="para">free 2 day shipping</p>
          <p>
            total : <span className="total"> DKK 360.0</span>
          </p>
        </div>
        <div className="button-container">
          <button type="button" className="button">
            + add to cart
          </button>
          <p>&#169; powered by pumper</p>
        </div>
      </div>
    </>
  );
};

export default App;
