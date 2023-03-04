import { ADDED, DELETED, EDITED, LOADED } from "./actionType";


export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books,
    };
};

export const added=(book)=>{
    return{
        type:ADDED,
        payload:book
    }
}
export const edited=(bookId,book)=>{
    return{
        type:EDITED,
        payload:{
            bookId,
            book
        }
    }
}
export const deleted=(bookId)=>{
    return{
        type:DELETED,
        payload:bookId
    }
}