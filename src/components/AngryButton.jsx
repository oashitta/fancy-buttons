import { useState } from "react";
import { useReducer } from "react";
{
  /*import React, { useState } from "react"; - if we had to import react explicitly this would be how we would have imported useState. */
}

function AngryButton() {
  {
    /*const [anger, setAnger] = useState(0);
    
     const handleClick = (amount) => {
    if (anger < 1) {
      setAnger(anger + amount);
    } else {
      setAnger(0);
    }
  };*/
  }

  const [anger, dispatch] = useReducer((anger, action) => {
    if (anger < 1) {
      return anger + action;
    } else {
      return 0;
    }
  }, 0);

  {
    /* may use tenary operator instead return anger > 1 ? 0 : anger + action;*/
  }

  return (
    <button
      className="AngryButton"
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      onClick={() => dispatch(0.1)}
    >
      {/* If you have NOT reached the maximum */}
      {anger < 1 && <span>Don't click me too much! </span>}

      {/* If you HAVE reached the maximum */}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
