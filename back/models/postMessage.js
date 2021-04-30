import mongoose from 'mongoose'

//Schemas are like template documents
const postSchema = mongoose.Schema({
title: String,
message: String,
creator: String,
breed: [String],
image: String,
likeCount: {
    type: Number,
    default: 0
},
time: {
    type: Date,
    default: new Date()
}
});
//turning shema into a model
const postMessage = mongoose.model('postMessage', postSchema)
export default postMessage