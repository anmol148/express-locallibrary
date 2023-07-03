const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const GenreSchema= new Schema({
    name:{type:String,minLength:3,maxLength:100},
});

// GenreSchema.virtual('url').get(()=>{
//     return `/catalog/Genre/${this._id}`;
// });
GenreSchema.virtual("uri").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/Genre/${this._id}`;
  });
module.exports = mongoose.model("Genre", GenreSchema);