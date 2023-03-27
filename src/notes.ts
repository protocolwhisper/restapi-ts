interface Note {
  noteId: string;
  userId: string;
  createdAt: number;
  content: string;
}

const notes: { [key: string]: Note } = {
  id1: {
    noteId: "id1",
    userId: "user1",
    createdAt: Date.now(),
    content: "Hola amigos",
  },
  id2: {
    noteId: "id2",
    userId: "user2",
    createdAt: Date.now(),
    content: "Hola amigos2",
  },
};

export default notes;
