import React from "react";

const Note = ({ NoteList, onRemove }) => {
  return (
    <div className="notesContainer">
      {NoteList.map((item) => (
        <div
          key={item.id}
          className="note"
          onClick={(e) => onRemove(item.id)}
          style={{ backgroundColor: `${item.randomColor}` }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Note;
