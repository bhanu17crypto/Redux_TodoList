import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { actionClearTodo, actionFilterTodo } from "../redux/action/action";
import { useEffect, useRef, useState } from "react";

export const TodoFilter = () => {
  const todoStore = useSelector((s) => s.todoReducer);
  const todos = todoStore?.backupTodo || [];
  const dispatch = useDispatch();
  const [allRef, setallRef] = useState(true);
  const [activeRef, setActiveRef] = useState(false);
  const [completedRef, setCompletedRef] = useState(false);

  function handleActive() {
    let active = todos.filter((item) => !item.status);
    //console.log(active);
    setCompletedRef(false)
    setActiveRef(true)
    setallRef(false)
    dispatch(actionFilterTodo(active));
  }

  function handleAll() {
    // console.log(todos);
    setCompletedRef(false)
    setActiveRef(false)
    setallRef(true)
    dispatch(actionFilterTodo(todos));
  }

  function handleCompleted() {
    let completed = todos.filter((item) => item.status);
    // console.log(completed);
    setCompletedRef(true)
    setActiveRef(false)
    setallRef(false)
    dispatch(actionFilterTodo(completed));
  }

  function handleClearCompleted() {
    if (window.confirm("Are you sure you want to delete these item?")) {
      let completed = todos.filter((item) => !item.status);
      //console.log(completed);
      dispatch(actionClearTodo(completed));
    }
  }

  const liveSign = {color:'#6A1B9A',fontWeight:"1000"}

  useEffect(()=>{
      handleAll()
  },[])

  return (
    <Box bg="green.400" p="10px">
      <Flex
        justify="space-between"
        flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
        alignItems="center"
      >
        <Box border={{ base: "1px solid", lg: "none" }} p="5px 25px" mt="10px">
          <Text fontWeight="bold">{todoStore?.todo?.length} items</Text>
        </Box>
        <Flex
          w={{ base: "75vw", sm: "100%", lg: "25vw" }}
          justify="space-between"
          border={{ base: "1px solid", lg: "none" }}
          p="5px 25px"
          mt="10px"
          alignItems="center"
        >
          <Text
            fontWeight="500"
            _hover={{ cursor: "pointer" }}
            onClick={handleAll}
            style={allRef ? liveSign : null}
          >
            All
          </Text>
          <Text
            fontWeight="500"
            _hover={{ cursor: "pointer" }}
            onClick={handleActive}
            style={activeRef ? liveSign : null}
          >
            Active
          </Text>
          <Text
            fontWeight="500"
            _hover={{ cursor: "pointer" }}
            onClick={handleCompleted}
            style={completedRef ? liveSign : null}
          >
            Completed
          </Text>
        </Flex>
        <Box border={{ base: "1px solid", lg: "none" }} p="5px 25px" mt="10px">
          <Text
            fontWeight="500"
            _hover={{ cursor: "pointer" }}
            onClick={handleClearCompleted}
          >
            Clear Completed
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
