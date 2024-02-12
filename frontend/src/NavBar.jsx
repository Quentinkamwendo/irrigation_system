import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Flex
        as={"nav"}
        align={"center"}
        justify={"space-between"}
        bg={"indigo"}
        color={"white"}
      >
        <Box p={4}>
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          />
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }} alignItems={'center'}>
          <>
            <Link className="hover:bg-violet-400 p-2" to={"/home"}>
              <Text mr={4} cursor={"pointer"}>
                Home
              </Text>
            </Link>
            <Link className="hover:bg-violet-400 p-2" to={"/irrigation"}>
              <Text mr={4} cursor={"pointer"}>
                Irrigate
              </Text>
            </Link>
          </>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            mt={{ base: 4, md: 0 }}
            ml={{ md: "auto" }}
          >
            <Link className="p-2" to={"/home"}>Home</Link>
            <Link className="p-2" to={"/irrigation"}>Irrigate</Link>
          </Flex>
        </Collapse>
      </Flex>
      <Outlet />
    </div>
  );
};

export default NavBar;
