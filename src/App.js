import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";
// import { AppContext } from "./components/Context";
// import { useContext } from "react";
import { useGlobalContext } from "./components/Context";

const App = () => {
  const data = useGlobalContext();
  return (
    <>
      <h1>Welcome {data}</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
