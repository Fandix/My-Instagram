import { Avatar, Box, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { InstagramLogo, InstagramMobileLogo, CreatePostLogo, NotificationsLogo, SearchLogo } from "../../assets/constants"
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { Tooltip } from '../ui/tooltip'

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: '/'
        },
        {
            icon: <SearchLogo />,
            text: "Search"
        },
        {
            icon: <NotificationsLogo />,
            text: "Notification"
        },
        {
            icon: <CreatePostLogo />,
            text: "Create"
        },
        {
            icon: <Avatar.Root size="sm"><Avatar.Image src='/whilebear_profile.jpg' /></Avatar.Root>,
            text: "Profile",
            link: "/"
        }
    ]

    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }}
        >
            <Flex direction={"column"} gap={10} w='full' height={"full"}>
                <Box as={RouterLink} to={"/"} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
                    <InstagramLogo />
                </Box>
                <Box
                    as={RouterLink}
                    to={"/"}
                    p={2}
                    display={{ base: "block", md: "none" }}
                    borderRadius={6}
                    _hover={{
                        bg: "whiteAlpha.200",
                    }}
                    w={10}
                    cursor='pointer'
                >
                    <InstagramMobileLogo />
                </Box>

                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {sidebarItems.map((item, index) => (
                        <Tooltip
                            key={index}
                            showArrow
                            content={item.text}
                            positioning={{ placement: 'right' }}
                            openDelay={500}
                            disabled={!item.link}
                        >
                            {item.link ? (
                                <Box
                                    as={RouterLink}
                                    to={item.link}
                                    display={'flex'}
                                    alignItems={'center'}
                                    gap={4}
                                    _hover={{ bg: 'whiteAlpha.400' }}
                                    borderRadius={6}
                                    p={2}
                                    w={{ base: 10, md: 'full' }}
                                    justifyContent={{ base: 'center', md: 'flex-start' }}
                                    color={'white'}
                                    _visited={{ color: 'white' }}
                                >
                                    {item.icon}
                                    <Box display={{ base: 'none', md: 'block' }}>
                                        {item.text}
                                    </Box>
                                </Box>
                            ) : (
                                <Flex
                                    alignItems={'center'}
                                    gap={4}
                                    _hover={{ bg: 'whiteAlpha.400' }}
                                    borderRadius={6}
                                    p={2}
                                    w={{ base: 10, md: 'full' }}
                                    justifyContent={{ base: 'center', md: 'flex-start' }}
                                >
                                    {item.icon}
                                    <Box display={{ base: 'none', md: 'block' }}>
                                        {item.text}
                                    </Box>
                                </Flex>
                            )}
                        </Tooltip>
                    ))}
                </Flex>

                <Tooltip
                    showArrow
                    content={"Logout"}
                    positioning={{ placement: 'right' }}
                    openDelay={500}
                >
                    <Box
                        as={RouterLink}
                        to={'/auth'}
                        display={'flex'}
                        alignItems={'center'}
                        gap={4}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        borderRadius={6}
                        p={2}
                        w={{ base: 10, md: 'full' }}
                        mt={"auto"}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        color={'white'}
                        _visited={{ color: 'white' }}
                    >
                        <BiLogOut size={25} />
                        <Box display={{ base: 'none', md: 'block' }}>Logout</Box>
                    </Box>
                </Tooltip>

            </Flex>
        </Box>
    )
}

export default Sidebar
