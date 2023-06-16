import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ImBooks,
  ImClubs,
  ImKeyboard,
  ImMusic,
  ImProfile,
} from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 900px)");

  return isMobileDevice ? (
    <Flex flexDirection="row" justifyContent="baseline" bgColor="black">
      <Menu>
        <MenuButton
          as={IconButton}
          m="20px"
          aria-label="Options"
          icon={<HamburgerIcon />}
          bgColor="white"
        />
        <MenuList>
          <Link to="/about">
            <MenuItem icon={<ImProfile />}>About Jack</MenuItem>
          </Link>
          <Link to="/developer">
            <MenuItem icon={<ImKeyboard />}>Software Developer</MenuItem>
          </Link>
          <Link to="/educator">
            <MenuItem icon={<ImBooks />}>Educator</MenuItem>
          </Link>
          <Link to="/musician">
            <MenuItem icon={<ImMusic />}>Musician</MenuItem>
          </Link>
          <Link to="/designer">
            <MenuItem icon={<ImClubs />}>Game Designer</MenuItem>
          </Link>
        </MenuList>
      </Menu>{" "}
      <Flex color="white" direction="row" alignItems="center">
        <Heading size="lg">
          <Link to="/">JACK CONWAY | Portfolio</Link>
        </Heading>
      </Flex>
    </Flex>
  ) : (
    <Flex flexDirection="row" justifyContent="baseline" bgColor="black">
      <Heading size="md" m="20px" color="white">
        <Link to="/">JACK CONWAY | Portfolio</Link>
      </Heading>{" "}
      <Text m="20px" color="white">
        <Link to="/about">About Jack</Link>{" "}
      </Text>
      <Text m="20px" color="white">
        <Link to="/developer">Software Developer</Link>{" "}
      </Text>
      <Text m="20px" color="white">
        <Link to="/educator">Educator</Link>{" "}
      </Text>
      <Text m="20px" color="white">
        <Link to="/musician">Musician</Link>{" "}
      </Text>
      <Text m="20px" color="white">
        <Link to="/designer">Game Designer</Link>
      </Text>
    </Flex>
  );
};
export default Navbar;
