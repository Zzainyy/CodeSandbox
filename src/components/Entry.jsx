import React from "react";

function Entry(props) {
  return (
    <div className="dictionary">
      <dl className="term">
        <dt>
          <span className="emoji">{props.emoji}</span>
          <span className="name">{props.name}</span>
        </dt>
        <dd className="meaning">{props.meaning}</dd>
      </dl>
    </div>
  );
}

export default Entry;
