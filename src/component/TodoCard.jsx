import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSolidEditAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  actionRemoveTodo,
  actionUpdateTodo,
  actionUpdateStatusTodo,
  convertNormalTime,
  findCompleteTime,
} from "../redux/action/action";
import { useState } from "react";

function TodoCard({ task, status, id, date, completed }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedTask, setUpdatedTask] = useState(task || "");
  const store = useSelector((s) => s.todoReducer);
  const dark = { color: "white", background: "black" };
  const light = { color: "black", background: "white" };

  function handleRemove() {
    dispatch(actionRemoveTodo(task));
  }

  function handleChange(e) {
    setUpdatedTask(e.target.value);
  }

  function handelupdate() {
    console.log(updatedTask);
    let newTodo = {
      id,
      task: updatedTask,
      status,
      date: Date.now()
    };
    dispatch(actionUpdateTodo(newTodo));
  }

  function handelCheckBox(e) {
    dispatch(actionUpdateStatusTodo(id));
  }

  const styled = {
    textDecoration: "line-through",
    color: "#607D8B",
    fontWeight: "bold",
  };

  return (
    <Flex
      bg="#FFCCBC"
      justify="space-between"
      p="10px"
      border="1px solid gray"
      mt="5px "
      style={store.darkTheme ? { background: "#B39DDB" } : null}
      
    >
      <Flex>
        <Box>
          <input
            type="checkbox"
            checked={status}
            border="1px solid"
            onChange={handelCheckBox}
          />
        </Box>
        <Box ml="20px">
          <Text
            letterSpacing="1px"
            fontWeight="400"
            style={status ? styled : null}
          >
            {task}
          </Text>
        </Box>
        <Box ml="20px">
          <Text
            letterSpacing="1px"
            fontWeight="400"
            style={status ? styled : null}
          >
            {status ? findCompleteTime(completed) : convertNormalTime(date)}
          </Text>
        </Box>
      </Flex>
      <Flex justify="space-between" w="50px">
        {/* edit box  */}
        <Box _hover={{ cursor: "pointer" }} onClick={() => onOpen()}>
          <BiSolidEditAlt size="20px" />
        </Box>
        {/* delet box  */}
        <Box _hover={{ cursor: "pointer" }} onClick={handleRemove}>
          <RxCross2 size="20px" />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={store.darkTheme ? dark : light}>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={updatedTask} onChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handelupdate}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default TodoCard;
