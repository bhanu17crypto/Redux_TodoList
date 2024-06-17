import React from "react";
import {Box, Flex, Heading} from '@chakra-ui/react'
import {FaMoon} from "react-icons/fa"
import {BsFillSunFill} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { actionChangeTheme } from "../redux/action/action";

export const TodoNav = () => {
    const store = useSelector((s)=>s.todoReducer)
    const dispatch = useDispatch();

    const gradientStyle = {
      backgroundImage: "linear-gradient(304deg, rgba(245,162,6,1) 0%, rgba(237,255,0,0.6000525210084033) 100%)",
      WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    };


    function handleTheme(){
        dispatch(actionChangeTheme(!store.darkTheme))
    }

  return (
    <Box>
      <Flex justify="space-between">
        <Box>
          <Heading letterSpacing='5px' style={store.darkTheme? gradientStyle : null}>TODO</Heading>
        </Box>
        <Box  display="grid" placeItems="center"  onClick={handleTheme} _hover={{cursor:"pointer"}}>
          {!store.darkTheme ? (
            <FaMoon  size="20px" />
          ) : (
            <BsFillSunFill color={store.darkTheme ? "#FBC02D" : null} size="25px" />
          )}
        </Box>
      </Flex>
    </Box>
  );
};
