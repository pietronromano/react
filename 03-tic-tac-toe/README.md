# 03-tic-tac-toe
## References
  - 04 Essentials Deep Dive: 07-tic-tac-toe-starting-project
  ->
  - 04 Essentials Deep Dive: 18-finished 

---

# Usage
How to run the samples:
- Regenerate the node_modules folder according to dependencies in package.json: 
```bash
cd 03-tic-tac-toe
npm install
```

- Start dev server:
```bash
npm run dev
```

---

# Key learning points

## Setting State correctly
- Reference: react-course-slides.pdf slides 88-89

- Play.jsx:
```javascript
  //handler for edit button click
  function handleEditClick() {
    //toggle isEditing state:  NOTE: WE WHEN BASING STATE ON A PREVIOUS VALUE... 
    // WE MUST USE THE FUNCTION VERSION OF setState here: (because react schedules state updates)
   
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
```

---


## ...
- Reference: 

- Play.jsx:
```javascript
   // TWO-WAY BINDING: input value is playerName state, onChange updates playerName state
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
```

---


## Update Object-State Immutably
- Reference: 
  - react-course-slides.pdf slide 90
  - https://academind.com/tutorials/reference-vs-primitive-values

- 12-updating-state-immutably: GambeBoard.jsx
```javascript
  <div>
  ...
  </div>
```

---


## Lifting State Up
- Reference: react-course-slides.pdf slide 91

```javascript
  <div>
  ...
  </div>
```

---
