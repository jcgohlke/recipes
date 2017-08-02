const booksSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true},
  pages: Number,
  author: { firstName: String, lastName: String },
  isbn: Number,
  genre: [{ type: String, lowercase: true }],
  synopsis: String,
  format: { type: String, lowercase: true, default: 'book' }
}); 