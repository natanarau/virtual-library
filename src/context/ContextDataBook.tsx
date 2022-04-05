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
  setCurrentPage: Dispatch<SetStateAction<number>>;
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
  const [currentPage, setCurrentPage] = useState<any>();
  const [pages, setPages] = useState(0);
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

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
        setCurrentPage,
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
