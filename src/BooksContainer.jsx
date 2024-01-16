import { Book } from "./Book";


const booksData = [
  {
    "id": 1,
    "title": "JavaScript and JQuery",
    "author": "Jon Duckett",
    "price": 62,
    "rating": 4,
    "image": "/src/assets/book.png"
  },
  {
    "id": 2,
    "title": "JavaScript and JQuery",
    "author": "Jon Duckett",
    "price": 62,
    "rating": 4,
    "image": "/src/assets/book.png"
  },
  {
    "id": 3,
    "title": "JavaScript and JQuery",
    "author": "Jon Duckett",
    "price": 62,
    "rating": 4,
    "image": "/src/assets/book.png"
  },
  {
    "id": 4,
    "title": "JavaScript and JQuery",
    "author": "Jon Duckett",
    "price": 62,
    "rating": 4,
    "image": "/src/assets/book.png"
  },
  {
    "id": 5,
    "title": "JavaScript and JQuery",
    "author": "Jon Duckett",
    "price": 62,
    "rating": 4,
    "image": "/src/assets/book.png"
  },


  // Add more books as needed
];

export default function BooksContainer() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {booksData.map(book => (
            <Book key={book.id} book={book}/>

        // <div key={book.id} className="space-y-3">
        //   <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        //     <img className="max-w-[144px]" src={book.image} alt={book.title} />
        //   </div>
        //   <div className="space-y-3">
        //     <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
        //     <p className="text-xs lg:text-sm">By: <span>{book.author}</span></p>
        //     <div className="flex items-center justify-between">
        //       <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
        //       {/* Stars */}
        //       <div className="flex items-center space-x-1">
        //         {[...Array(book.rating).keys()].map((_, index) => (
        //           <img key={index} src="/src/assets/star.svg" alt={`Star ${index + 1}`} />
        //         ))}
        //         <span className="text-xs lg:text-sm">({book.rating} Star)</span>
        //       </div>
        //       {/* Stars end */}
        //     </div>
        //     <div className="flex items-center gap-3 text-xs lg:text-sm">
        //       <button
        //         className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
        //       >
        //         <svg
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 24 24"
        //           strokeWidth="1.5"
        //           stroke="currentColor"
        //           className="h-5 w-5"
        //         >
        //           {/* Add to Cart icon */}
        //         </svg>
        //         Add to Cart
        //       </button>
        //       <button
        //         className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
        //       >
        //         <svg
        //           width="16"
        //           height="14"
        //           viewBox="0 0 21 19"
        //           fill="none"
        //           xmlns="http://www.w3.org/2000/svg"
        //         >
        //           {/* Favorite icon */}
        //         </svg>
        //         Favourite
        //       </button>
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
}
