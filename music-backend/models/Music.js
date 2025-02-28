const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  type: { type: String, enum: ['western', 'indian', 'rabindra'], required: true },
  title: { type: String, required: true },
  composer: { type: String }, // For Western
  ragaTime: { type: String }, // For Indian
  ragaSeason: { type: String }, // For Indian
  mood: { type: String, required: true },
  tags: [String],
  youtubeLink: String,
  listenCount: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Music', musicSchema);