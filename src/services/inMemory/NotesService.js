const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class NotesService {
  constructor() {
    this._notes = [];
  }

  addNote({ title, body, tags }) {
    const noteId = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
      id: noteId,
      title,
      body,
      tags,
      createdAt,
      updatedAt,
    };

    this._notes.push(newNote);

    const isSuccess =
      this._notes.filter((note) => note.id === noteId).length > 0;

    if (!isSuccess) {
      throw new InvariantError('Catatan gagal ditambahkan');
    }
    return noteId;
  }

  getNotes() {
    return this._notes;
  }

  getNoteById(id) {
    const note = this._notes.filter((n) => n.id === id)[0];
    if (!note) {
      throw new NotFoundError('Catatan tidak ditemukan');
    }
    return note;
  }

  editNoteById(id, { title, body, tags }) {
    const indexNote = this._notes.findIndex((note) => note.id === id);
    if (indexNote === -1) {
      throw new NotFoundError('Gagal memperbarui catatan, Id tidak ditemukan ');
    }
    this._notes[indexNote] = {
      ...this._notes[indexNote],
      title,
      body,
      tags,
    };
  }

  deleteNoteById(id) {
    const indexNote = this._notes.findIndex((note) => note.id === id);
    if (indexNote === -1) {
      throw new NotFoundError('Catatan gagal dihapus, Id tidak ditemukan');
    }
    this._notes.splice(indexNote, 1);
  }
}

module.exports = NotesService;
