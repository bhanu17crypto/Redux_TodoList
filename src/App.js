import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./component/Todo";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { writeLocalStorage } from "./redux/action/action";

function App() {
  const store = useSelector((s) => s.todoReducer);

  useEffect(() => {
    writeLocalStorage("store", store);
  }, [store]);

  const dark = { color: "white", backgroundColor: "black" };
  const light = { color: "black", background: "white" };
  return (
    <Box
      className="App"
      style={store.darkTheme ? dark : light}
      h='100vh'
      pt="20vh"
      pb="38vh"
    >
      <Todo />
    </Box>
  );
}

export default App;
