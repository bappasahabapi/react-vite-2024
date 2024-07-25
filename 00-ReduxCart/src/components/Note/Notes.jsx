import NoteItem from "./NoteItem";
import classes from "./Notes.module.css";

const dummy_notes = [
  {
    id: "1",
    title: "Cricket",
    text: "01-lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: "2",
    title: "FootBall",
    text: "02-lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: "3",
    title: "Study",
    text: "03-lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: "4",
    title: "Web",
    text: "04-lorem ipsum dolor sit amet, consectetur adip",
  },
];
const Notes = () => {
  return (
    <div className={classes.notes}>
      <h2>
        Your Favourite <mark>Notes</mark>{" "}
      </h2>
      <ul>
        {dummy_notes.map((note) => (
          <NoteItem key={note.id} id={note.id} text={note.text} title={note.title} />
        ))}
      </ul>
    </div>
  );
};

export default Notes;
