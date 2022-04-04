import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DataBook } from "../services/api1";

interface BookContextProps {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
  seCurrentPage: Dispatch<SetStateAction<number>>;
  pages: number;
  books: never[];
  setFavoriteBooks: Dispatch<SetStateAction<never[]>>;
  favoriteBooks: never[];
}

interface BookContextProviderProps {
  children: ReactNode;
}
export const BookContext = createContext({} as BookContextProps);

export const BookContextProvider = ({ children }: BookContextProviderProps) => {
  const [search, setSearch] = useState<any>();
  const [currentPage, seCurrentPage] = useState<any>();
  const [pages, setPages] = useState(0);
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  console.log(search, currentPage);

  useEffect(() => {
    if (search === undefined || search === "") {
      return;
    } else {
      DataBook(search, currentPage)
        .then((res) => {
          setPages(Math.ceil(res.data.totalItems / 24));
          setBooks(res.data.items);
        })
        .catch(() => {
          return;
        });
    }
  }, [currentPage, search]);

  return (
    <BookContext.Provider
      value={{
        setSearch,
        seCurrentPage,
        setFavoriteBooks,
        pages,
        books,
        favoriteBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
