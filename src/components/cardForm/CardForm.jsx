import { useState } from "react";
import "./CardForm.scss";

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState(null);
  const [cardName, setCardName] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [cvc, setCVC] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const handleChange = (e) => {
  //   setCardName(e.target.value);
  // };

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
          <p className="cardNumber">0000 0000 0000 0000</p>
          <div className="cardDesc">
            <p className="cardName">{cardName}</p>
            <p className="cardDate">00/00</p>
          </div>
        </div>
      </div>

      <div className="backCard">
        <img
          src="https://user-images.githubusercontent.com/70451928/183109655-42c570a8-16d3-47b6-b366-c9e70f101491.png"
          alt=""
        />

        <div className="backCardInfo">
          <p>000</p>
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
            onChange={(e) => setCardName(e.target.value)}
            required
            type="text"
            placeholder="e.g. Jane Appleseed"
          />
          <label htmlFor="">CARD NUMBER </label>
          <input
            required
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
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
                min={0}
              />
              <input required className="year" type="number" placeholder="YY" />
              <input
                required
                className="cvc"
                type="number"
                placeholder="e.g. 123"
                max={3}
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
