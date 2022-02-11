import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";

const StyledNote = styled.div`
  max-width: 300px;
  background: cyan;
  padding: 7px;
  margin: 10px;
  position: relative;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const Note = ({ ourNote }) => {
  const [notes, setNotes] = useContext(NotesContext);

  const handleDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    
    setNotes(newNotes);
  };

  return (
    <StyledNote>
      <h2>{ourNote.title}</h2>
      <p>{ourNote.desc}</p>
      <StyledButton onClick={() => handleDelete(ourNote.id)}>
        <FaTimes />
      </StyledButton>
    </StyledNote>
  );
};

export default Note;
