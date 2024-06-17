import {useSelector} from 'react-redux'
import {Box, Flex, Heading} from '@chakra-ui/react'
import { TodoInput } from './TodoInput'
import { TodoNav } from './TodoNav'
import { TodoList } from './TodoList'
import { TodoFilter } from './TodoFilter'
export const Todo = () => {





  return (
    <Box  w={{base:'90vw',sm:"85vw",md:"75vh",lg:'70vw',xl:'65vw'}} m="auto"  border="1px solid" p='20px' >
      <TodoNav/>
      <br/>
      <TodoInput/>
      <br/>
      <TodoFilter/>
     
      <TodoList/>
      
    </Box>
  )
}
