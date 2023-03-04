import { useState } from "react";
import React from 'react';
import { useDispatch } from "react-redux";
import { added } from "../../redux/books/actionCreator";
const AddBooks = () => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    const handleCheckboxChange=()=> {
        setIsChecked(!isChecked);
      }
    const handelSubmit=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const author = e.target.author.value;
        const thumbnail = e.target.thumbnail.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const featured = e.target.featured.value;
        const booksInput={
            name,author,thumbnail,price,rating,featured
        }
        dispatch(added(booksInput))
    }
    return (
        <div>
            <div>
                <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                    <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form class="book-form" onSubmit={handelSubmit}>
                        <div class="space-y-2">
                            <label for="name">Book Name</label>
                            <input required class="text-input" type="text" id="input-Bookname" name="name"/>
                        </div>

                        <div class="space-y-2">
                            <label for="category">Author</label>
                            <input required class="text-input" type="text" id="input-Bookauthor" name="author" />
                        </div>

                        <div class="space-y-2">
                            <label for="image">Image Url</label>
                            <input required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                        </div>

                        <div class="grid grid-cols-2 gap-8 pb-4">
                            <div class="space-y-2">
                                <label for="price">Price</label>
                                <input required class="text-input" type="number" id="input-Bookprice" name="price" />
                            </div>

                            <div class="space-y-2">
                                <label for="quantity">Rating</label>
                                <input required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 
                            h-4"
                            value={isChecked}
                            checked={isChecked} onClick={handleCheckboxChange}/>
                            <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" class="submit" id="submit">Add Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;