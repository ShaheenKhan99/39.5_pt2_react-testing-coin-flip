import "./Coin.css";

/** Coin: simple and stateless - displays name and image of current coin */

function Coin(props) {
  return (
    <div className = "Coin">
      <img src={props.imgSrc}
        alt={props.side} />
    </div>
  );
}

export default Coin;