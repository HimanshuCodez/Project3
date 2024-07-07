import 'dotenv/config'
import mongoose from 'mongoose';
import express from 'express'
const app = express()

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connect to mongdb
try {
  mongoose.connect(URI)
  console.log("connected to Database");
} catch (error) {
  console.log("DB error",error);
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})