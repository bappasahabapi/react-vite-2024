import BooksContainer from "./BooksContainer";
import Filters from "./Filters";
import SearchAction from "./SearchAction";

export default function Header() {
  return (
    <main className="my-10 lg:my-14 bg-orange-200">
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <SearchAction />
          <Filters />
        </div>
      </header>
      <BooksContainer />
    </main>
  );
}
