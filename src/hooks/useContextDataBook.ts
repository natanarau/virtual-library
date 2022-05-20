import { useContext } from "react";
import { BookContext } from "../context/ContextDataBook";

export const useBookContext = () => {
    const context = useContext(BookContext);
    return context;
}