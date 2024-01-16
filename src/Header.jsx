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
      price: 620,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
      year: 1996
    },
    {
      id: 2,
      title: "Python",
      author: "Jon Duckett",
      price: 120,
      rating: 5,
      image: "/src/assets/book.png",
      isFavorite: true,
      year: 2000
    },
    {
      id: 3,
      title: "React",
      author: "subin",
      price: 220,
      rating: 2,
      image: "/src/assets/book.png",
      isFavorite: false,
      year: 2019
    },
    {
      id: 4,
      title: "Html",
      author: "Jon Duckett",
      price: 620,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: true,
      year: 2017
    },
    {
      id: 5,
      title: "JavaScript and JQuery",
      author: "Jon Duckett",
      price: 520,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
      year: 2016, 
    },
    {
      id: 6,
      title: "Java",
      author: "Jon Duckett",
      price: 420,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
      year: 2022, 
    },
    {
      id: 7,
      title: "JavaScript and JQuery",
      author: "Jon Duckett",
      price: 62,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
      year: 2014, 
    },
    {
      id: 8,
      title: "Python",
      author: "bappa saha",
      price: 262,
      rating: 4,
      image: "/src/assets/book.png",
      isFavorite: false,
      year: 2024, 
    },
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
