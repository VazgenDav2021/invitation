const { model, Schema } = require("mongoose")

const answerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
});


module.exports = model('Answer', answerSchema)