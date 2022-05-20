import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import { DataBook } from "../services/api";

interface BookCover {
  smallThumbnail: string;
  thumbnail: string;
}

interface Book {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  infoLink: string;
  imageLinks: BookCover;
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
  loading: boolean;
  currentPage: number;
  search: string;
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
  const [favoriteBooks, setFavoriteBooks] = useLocalStorage<books[]>(
    "favoritos",
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === undefined || search === "") {
      return;
    } else {
      setLoading(true);
      DataBook(search, currentPage)
        .then((res) => {
          setPages(Math.ceil(res.data.totalItems / 24));
          setBooks(res.data.items);
          setLoading(false);
        })
        .catch(() => {
          return;
        })
        .finally(() => {
          setLoading(false);
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
        loading,
        currentPage,
        search,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
