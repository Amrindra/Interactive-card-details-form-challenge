import { useState } from "react";
import "./CardForm.scss";

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jhon Doe");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCVC] = useState("000");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const handleChange = (e) => {
  //   setCardName(e.target.value);
  // };

  function format(splitDigit) {
    return splitDigit.toString().replace(/\d{4}(?=.)/g, "$& ");
  }

  console.log(cardName);

  return (
    <div className="cardForm">
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="">CARDHOLDER NAME</label>
          <input
            required
            className="cardHolderName"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setCardName(e.target.value)}
          />
          <label htmlFor="">CARD NUMBER </label>
          <input
            required
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            pattern="[0-9]+"
            maxLength={16}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <div className="cardFormDate">
            <div className="top">
              <label htmlFor="">EXP. DATE (MM/YY)</label>
              <label className="cvcLabel" htmlFor="">
                CVC
              </label>
            </div>

            <div className="bottom">
              <input
                required
                className="month"
                type="number"
                placeholder="MM"
                pattern="[0-9]+"
                min={0}
                maxLength={2}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                required
                className="year"
                type="number"
                placeholder="YY"
                pattern="[0-9]+"
                maxLength={2}
                onChange={(e) => setYear(e.target.value)}
              />
              <input
                required
                className="cvc"
                type="text"
                placeholder="e.g. 123"
                // value={cvc}
                maxLength={3}
                min={0}
                onChange={(e) => setCVC(e.target.value)}
              />
            </div>
          </div>

          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
