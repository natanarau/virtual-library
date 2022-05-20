import { BookContextProvider } from "./context/ContextDataBook";
import { Routes } from "./routes/index.routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BookContextProvider>
        <Routes />
      </BookContextProvider>
    </div>
  );
};
