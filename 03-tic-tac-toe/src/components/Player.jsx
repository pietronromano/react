import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  //playerName state, default to initialName prop
  const [playerName, setPlayerName] = useState(initialName);
  //isEditing state, default to false
  const [isEditing, setIsEditing] = useState(false);

  //handler for edit button click
  function handleEditClick() {
    //toggle isEditing state:  NOTE: WE WHEN BASING STATE ON A PREVIOUS VALUE... 
    // WE MUST USE THE FUNCTION VERSION OF setState here: (because react schedules state updates)
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;


  if (isEditing) {
    // TWO-WAY BINDING: input value is playerName state, onChange updates playerName state
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
