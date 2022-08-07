import "./CardForm.scss";

const CardForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="cardForm">
      <div className="cardFormLeft">
        <img
          src="https://user-images.githubusercontent.com/70451928/183109770-900aace1-1b25-49b9-ae87-a071a5a21863.png"
          alt=""
        />
      </div>

      <div className="cardFormRight">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">CARDHOLDER NAME</label>
          <input type="text " placeholder="e.g. Jane Appleseed" />
          <label htmlFor="">CARD NUMBER </label>
          <input type="number " placeholder="e.g. 1234 5678 9123 0000" />

          <div className="cardFormDate">
            <div className="top">
              <label htmlFor="">EXP. DATE(MM/YY)</label>
              <label htmlFor="">CVC</label>
            </div>

            <div className="bottom">
              <input type="number" placeholder="e.g. 123" />
              <input type="number" placeholder="MM" />
              <input type="number" placeholder="YY" />
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
