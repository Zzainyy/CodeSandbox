import React from "react";
import Entry from "../components/Entry";
import Header from "../components/Header";
import emojipedia from "../emojipedia";

function createCard(emojicard) {
  return (
    <div>
      <Entry
        key={emojicard.id}
        emoji={emojicard.emoji}
        name={emojicard.name}
        meaning={emojicard.meaning}
      />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
