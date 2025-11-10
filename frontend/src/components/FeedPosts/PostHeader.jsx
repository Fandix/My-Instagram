import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = () => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
            <Flex gap={2} alignItems={'center'}>
                <Avatar.Root size="sm">
                    <Avatar.Image src='/whilebear_profile.jpg' alt='user profile pic' />
                </Avatar.Root>
                <Flex fontSize={12} fontWeight={'bold'} gap={2}>
                    Fandix.huang
                    <Box color={'gray.500'}>. 1w</Box>
                </Flex>
            </Flex>
            <Box cursor={'pointer'}>
                <Text
                    fontSize={12}
                    color={'blue.500'}
                    fontWeight={'bold'}
                    _hover={{ color: 'white' }}
                    transition={'0.2s ease-in0out'}
                >
                    Unfollow
                </Text>
            </Box>
        </Flex>
    )
}

export default PostHeader
