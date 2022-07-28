import { useState } from "react";
import Coin from "./Coin";
import "./CoinContainer.css"; 
import { choice } from "./helpers";

/** CoinContainer: holds state about number of flips, number of heads, tails and the current coin */

function CoinContainer(props) {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const handleClick = () => {
    const newCoin = choice(props.coins);
    setCoin(newCoin);
    if (newCoin.side === 'head') {
      setHeadCount(oldCount => oldCount + 1);
    } else {
      setTailCount(oldCount => oldCount + 1);
    }
  };

  const currCoin = coin ? 
    (<Coin side={coin.side} imgSrc={coin.imgSrc} />) : null;

    return (
      <div className="CoinContainer">
        <h3>Let's flip a coin</h3>
        {currCoin}
        <button onClick={handleClick}>Flip Me!</button>
        <p>Out of {headCount + tailCount} flips, there have been {headCount} heads and {tailCount} tails.</p>
      </div>
    );
}

CoinContainer.defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/1994-P_Washington_quarter_obverse.jpg/220px-1994-P_Washington_quarter_obverse.jpg"
      },
      {
        side: "tail",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/5/5a/98_quarter_reverse.png"
      }
    ]
};

export default CoinContainer;
