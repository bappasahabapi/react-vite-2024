import { useState } from "react";
import BooksContainer from "./BooksContainer";
import Filters from "./Filters";
import SearchAction from "./SearchAction";

export default function Header() {
  const booksData = [
    {
      id: 1,
      title: "JavaScript and JQuery",
      author: "Jon Duckett",
      price: 62,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Python",
      author: "Jon Duckett",
      price: 62,
      rating: 5,
      image: "/src/assets/book.png",
      isFavorite: true,
    },
    {
      id: 3,
      title: "python",
      author: "Jon Duckett",
      price: 62,
      rating: 2,
      image: "/src/assets/book.png",
      isFavorite: false,
    },
    {
      id: 4,
      title: "JavaScript and JQuery",
      author: "Jon Duckett",
      price: 62,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: true,
    },
    {
      id: 5,
      title: "JavaScript and JQuery",
      author: "Jon Duckett",
      price: 62,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
    },

    // Add more books as needed
  ];

  const [books, setBooks] = useState(booksData);

  function handleFavorite(bookId) {
    // console.log('clicked',bookId)
    setBooks(
      books.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            isFavorite: !book.isFavorite,
          };
        } else {
          return book;
        }
      })
    );
  }

  function handleSearch(searchText) {
    // console.log(searchText)
    const filterSearch = booksData.filter((book) =>
      book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setBooks(filterSearch)
  }

  // function handleFilter(selectedOption){
  //   console.log(selectedOption)

  //   const sortedBooks =
  // }
  function handleFilter(selectedOption) {
    let sortedBooks =[];
  
    switch (selectedOption) {
      case "name_asc":
        sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name_desc":
        sortedBooks = [...books].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "year_asc":
        sortedBooks = [...books].sort((a, b) => a.year - b.year);
        break;
      case "year_desc":
        sortedBooks = [...books].sort((a, b) => b.year - a.year);
        break;
      default:
        sortedBooks = books;
        break;
    }
  
    setBooks(sortedBooks);
  }

  return (
    <main className="my-10 lg:my-14">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <SearchAction onSearch={handleSearch} />
          <Filters onFilter={handleFilter} />
        </div>
      </header>
      <BooksContainer books={books} onFav={handleFavorite} />
    </main>
  );
}
