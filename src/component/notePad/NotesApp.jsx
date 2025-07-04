import React, { useState } from 'react';
import styles from "../notePad/noteApp.module.css"; // Assuming you have a CSS file for styles
function NotesApp() {
  // State to hold all notes
  const [notes, setNotes] = useState([]);
  // State for new note inputs
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  // State for search
  const [searchTerm, setSearchTerm] = useState('');

  // Handle adding a new note
  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      const newNote = {
        id: Date.now(),
        title,
        content,
      };
      setNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
    }
  };

  // Handle deleting a note
  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Handle starting edit
  const handleEdit = (note) => {
    setIsEditing(true);
    setCurrentNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  // Handle saving edits
  const handleSave = () => {
    setNotes(
      notes.map(note =>
        note.id === currentNoteId
          ? { ...note, title: editTitle, content: editContent }
          : note
      )
    );
    setIsEditing(false);
    setCurrentNoteId(null);
  };

  // Filtered notes based on search term
  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Simple Notes App</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Add New Note */}
      {!isEditing && (
        <div className="note-form">
          <h2>Add a new note</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea"
          />
          <button onClick={handleAddNote} className="add-button">Add Note</button>
        </div>
      )}

      {/* Edit Note Form */}
      {isEditing && (
        <div className="note-form">
          <h2>Edit Note</h2>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="input"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="textarea"
          />
          <button onClick={handleSave} className="save-button">Save</button>
          <button
            onClick={() => {
              setIsEditing(false);
              setCurrentNoteId(null);
            }}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      )}

      {/* List of Notes */}
      <div className="notes-list">
        {filteredNotes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          filteredNotes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-actions">
                <button onClick={() => handleEdit(note)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="delete-btn"
                >
                  &times;
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default NotesApp;