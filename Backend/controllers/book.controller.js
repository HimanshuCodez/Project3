import Book from "../Models/book.model.js";

export const getBook= (res,req)=>{
    try {
        const book =Book.find().res.status(200).json(book)
    } catch (error) {
        console.log("err getBook",error).res.status(500).json(error)
    }

}

