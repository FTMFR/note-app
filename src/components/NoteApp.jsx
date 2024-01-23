import React, { useEffect, useState } from "react";
import ColorBox from "./ColorBox";
import { CiSquarePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { ColorPallete } from "./ColorBox";
import Note from "./Note";

const NoteApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [addNote, setAddNote] = useState("");
  const [addIcon, setAddIcon] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    setAddNote(inputValue);
  };

  const pickRandomColor = () => {
    const randomColor =
      ColorPallete[Math.floor(Math.random() * ColorPallete.length)];

    return randomColor;
  };

  const addNoteHandler = () => {
    if (inputValue.trim() !== "") {
      const newNote = {
        id: noteList.length + 1,
        title: inputValue,
        randomColor: pickRandomColor(),
      };
      setAddIcon(true);
      setNoteList([...noteList, newNote]);
      setInputValue("");
      setAddIcon(false);
    }
  };

  const onRemoveHandler = (id) => {
    setNoteList(noteList.filter((item) => item.id !== id));
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const emptyHandler = () => {
    setNoteList([]);
  };

  useEffect(() => {
    console.log(inputValue, addIcon, addNote, noteList);
  }, [inputValue, addIcon, addNote, noteList]);

  return (
    <>
      <h1>Note List App</h1>
      <div className="row1">
        <input
          type="text"
          placeholder="please enter note"
          value={inputValue}
          onChange={(e) => inputChangeHandler(e)}
          style={{ backgroundColor: selectedColor }}
        />
        <div className="bottom">
          <div className="icon">
            <CiEdit className="edit" onClick={emptyHandler} />
            <CiSquarePlus className="plus" onClick={addNoteHandler} />
          </div>
          <ColorBox onColorSelect={handleColorSelect} />
        </div>
      </div>
      <Note NoteList={noteList} onRemove={(id) => onRemoveHandler(id)} />
    </>
  );
};

export default NoteApp;
