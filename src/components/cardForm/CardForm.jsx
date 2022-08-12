import { useState } from "react";
import "./CardForm.scss";

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jhon Doe");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCVC] = useState("000");
  const [focused, setFocused] = useState(false);
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(!submit);
  };

  function format(splitDigit) {
    return splitDigit.toString().replace(/\d{4}(?=.)/g, "$& ");
  }

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="cardForm">
      <div className="forMobileScreen">
        <img
          src="https://user-images.githubusercontent.com/70451928/183109779-2cdf23a6-9c83-4f3a-ae76-8a7fb86f899e.png"
          alt=""
        />
      </div>
      <div className="frontCard">
        <div className="topImg">
          <img
            src="https://user-images.githubusercontent.com/70451928/183109811-2895a694-4406-4cff-89fc-84072da77ce4.svg"
            alt=""
          />
        </div>

        <div className="frontImg">
          <img
            src="https://user-images.githubusercontent.com/70451928/183109745-b02ac54a-f22b-4399-b696-4f7701dfd0e5.png"
            alt=""
          />
        </div>

        <div className="frontCardInfo">
          <p className="cardNumber">{format(cardNumber)}</p>
          <div className="cardDesc">
            <p className="cardName">{cardName}</p>
            <p className="cardDate">{`${month}/${year}`}</p>
          </div>
        </div>
      </div>

      <div className="backCard">
        <img
          src="https://user-images.githubusercontent.com/70451928/183109655-42c570a8-16d3-47b6-b366-c9e70f101491.png"
          alt=""
        />

        <div className="backCardInfo">
          <p>{cvc}</p>
        </div>
      </div>

      <div className="cardFormLeft">
        <img
          src="https://user-images.githubusercontent.com/70451928/183109770-900aace1-1b25-49b9-ae87-a071a5a21863.png"
          alt=""
        />
      </div>

      <div className="cardFormRight">
        {submit ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="">CARDHOLDER NAME</label>
            <input
              required="true"
              className="cardHolderName"
              name="cardName"
              type="text"
              placeholder="e.g. Jane Appleseed"
              // pattern="(/^[A-Za-z]+$/)"
              focused={focused.toString()}
              onFocus={() => setFocused(true)}
              onChange={(e) => setCardName(e.target.value)}
            />
            <span>Wrong format, letter only</span>

            <label htmlFor="">CARD NUMBER </label>
            <input
              required="true"
              type="text"
              name="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
              pattern="[0-9\s]{13,19}"
              inputMode="numeric"
              maxLength={16}
              onChange={(e) => setCardNumber(e.target.value)}
              onBlur={handleFocus}
              onFocus={() => setFocused(true)}
              focused={focused.toString()}
            />
            <span>Wrong format, numbers only</span>

            <div className="cardFormDate">
              <div className="top">
                <label className="label">EXP. DATE (MM/YY)</label>
                <label className="cvcLabel label" htmlFor="cvc">
                  CVC
                </label>
              </div>

              <div className="bottom">
                <div className="monthYearInput">
                  <div className="monthYearInputWrapper">
                    <input
                      required="true"
                      className="month"
                      name="month"
                      type="number"
                      placeholder="MM"
                      pattern="[0-9]+"
                      min={0}
                      maxLength={2}
                      onChange={(e) => setMonth(e.target.value)}
                      onBlur={handleFocus}
                      onFocus={() => setFocused(true)}
                      focused={focused.toString()}
                    />
                    <input
                      required="true"
                      className="year"
                      type="number"
                      name="year"
                      placeholder="YY"
                      pattern="[0-9]+"
                      maxLength={2}
                      min={0}
                      onChange={(e) => setYear(e.target.value)}
                      onBlur={handleFocus}
                      onFocus={() => setFocused(true)}
                      focused={focused.toString()}
                    />
                    <span>Can't be blank</span>
                  </div>
                  <br />
                </div>

                <div className="cvcInput">
                  <input
                    required="true"
                    className="cvc"
                    type="tel"
                    name="cvc"
                    pattern="\d*"
                    placeholder="e.g. 123"
                    maxLength={3}
                    min={0}
                    onChange={(e) => setCVC(e.target.value)}
                    onBlur={handleFocus}
                    onFocus={() => setFocused(true)}
                    focused={focused.toString()}
                  />
                  <span>Can't be blank</span>
                </div>
              </div>
            </div>

            <button>Confirm</button>
          </form>
        ) : (
          <div className="submitResult">
            <img
              src="https://user-images.githubusercontent.com/70451928/183109818-fa7668a6-8c47-45bb-a59a-a2cd407d6eca.svg"
              alt=""
            />
            <h3>Thank You!</h3>
            <span>We've added your card details</span>
            <button onClick={handleSubmit}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardForm;
