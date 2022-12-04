import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='#7743DB' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Estatery</Link>
    </Box>
    <Box fontSize='2xl' color='#7743DB' fontWeight='bold' marginLeft="50px" marginTop="5px">
      <Link href='/search?purpose=for-sale' marginLeft='2'>Buy</Link>
    </Box>
    <Box fontSize='2xl' color='#7743DB' fontWeight='bold' marginLeft="20px" marginTop="5px">
      <Link href='/search?purpose=for-rent' marginLeft='2'>Sell</Link>
    </Box>
    <Box fontSize='2xl' color='#7743DB' fontWeight='bold' marginLeft="20px" marginTop="5px">
      <Link href='/search' marginLeft='2'>Search</Link>
    </Box>
    <Spacer />
    {/* <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box> */}
  </Flex>
);

export default Navbar;