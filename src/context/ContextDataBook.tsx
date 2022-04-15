import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DataBook } from "../services/api1";

interface Book {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  infoLink: string;
  bookCover: string;
}

interface books {
  volumeInfo: Book;
  id: string;
}

interface BookContextProps {
  setSearch: Dispatch<SetStateAction<string | undefined>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pages: number;
  books: books[];
  setFavoriteBooks: Dispatch<SetStateAction<books[]>>;
  favoriteBooks: books[];
  setBooks: Dispatch<SetStateAction<books[]>>;
}

interface BookContextProviderProps {
  children: ReactNode;
}
export const BookContext = createContext({} as BookContextProps);

export const BookContextProvider = ({ children }: BookContextProviderProps) => {
  const [search, setSearch] = useState<any>();
  const [currentPage, setCurrentPage] = useState<any>();
  const [pages, setPages] = useState(0);
  const [books, setBooks] = useState<books[]>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<books[]>([]);

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
        setBooks,
        pages,
        books,
        favoriteBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
