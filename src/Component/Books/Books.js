import { useEffect } from "react";
import AddBooks from '../AddBooks/AddBooks';
import { useDispatch, useSelector } from "react-redux";
import BookCard from './BookCard';
import fetchTodos from "../../redux/books/thunk/fetchTodos";
import { statusChanged } from "../../redux/filter/actionCreator";

const Books = () => {
    const books = useSelector((state) => state.books)
    const filters = useSelector((state) => state.filters)
    const { status } = filters;
    const dispatch = useDispatch();

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    };

    const filterByStatuss = (book) => {
        const { status } = filters;
        switch (status) {
            case "All":
                return book;
            case "Featured":
                return book.featured;
            default:
                return true;
        }
    };
    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);
    return (
        <div>
            <main className="py-12 2xl:px-6">
                <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                    <div className="order-2 xl:-order-1">
                        <div className="flex items-center justify-between mb-12">
                            <h4 className="mt-2 text-xl font-bold">Book List</h4>

                            <div className="flex items-center space-x-4">
                                <button className={`filter-btn    ${status === "All" && "active-filter"}`} id="lws-filterAll" onClick={() => handleStatusChange("All")}>All</button>
                                <button className={`filter-btn    ${status === "Featured" && "active-filter"}`} id="lws-filterFeatured" onClick={() => handleStatusChange("Featured")}>Featured</button>
                            </div>
                        </div>
                        <div className="lws-bookContainer">
                            {/* <!-- Card 1 --> */}
                            {
                                books
                                    .filter(filterByStatuss)
                                    .map(book => <BookCard book={book} key={book.id} />)
                            }

                        </div>
                    </div>
                    <div>
                        <AddBooks />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Books;