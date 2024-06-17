import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {FcTodoList} from 'react-icons/fc'
import { useDispatch, useSelector } from "react-redux";
import { actionAddTodo } from "../redux/action/action";

export const TodoInput = () => {

  const [task,setTask] = useState("")

  const store = useSelector((s)=>s.todoReducer)
  const todos = store?.todo;
  const dispatch = useDispatch();

  function handleChange(e){
    setTask((task)=>e.target.value)
  }

  const dark={color:"white",background:"black"}
  const light = {color:"black",background:"white"}

  function AddTodo(e){
    e.preventDefault();
    if(task.length==0){
      return alert("Please Enter Task to add")
    }
    let id = todos[todos.length-1]?.id;
    
    let todoid = id ? id+1 : 1;
    let todo = {
      id: todoid,
      task:task,
      date: Date.now(),
      completed:"",
      status:false
    }
   // console.log(todo)
    dispatch(actionAddTodo(todo))
    
  }

  useEffect(()=>{
    setTask("")
  },[todos])

  return (
    <Box border='1px solid' borderRadius='8px'>
      <form onSubmit={AddTodo}>
        <InputGroup w='100%'>
          <InputLeftAddon style={store.darkTheme ? dark : light} children={<FcTodoList />} />
          <Input type="text" value={task} placeholder="Your Task"  onChange={handleChange} />
        </InputGroup>
      </form>
    </Box>
  );
};
