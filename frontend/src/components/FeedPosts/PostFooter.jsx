import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const PostFooter = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(10000);

    const handleLike = () => {
        // call API
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }


    return (
        <Box mb={10}>
            <Flex
                alignItems={'center'}
                gap={4}
                w={'full'}
                pt={0}
                mb={2}
                mt={4}
            >
                <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
                    {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
                </Box>
                <Box cursor={'pointer'} fontSize={17}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={'sm'}>
                {likes} likes
            </Text>
            <Text fontWeight={600} fontSize={'sm'}>
                fandix.2519_{" "}
                <Text fontWeight={400} as={'span'}>
                    Feeling Good
                </Text>
            </Text>
            <Text color={'gray'} fontSize={'sm'}>
                View all 1000 comments
            </Text>

            <Flex
                alignItems={'center'}
                gap={2}
                justifyContent={'space-between'}
                w={'full'}
            >
                <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14} flex={1}/>
                <Button
                    fontSize={14}
                    color={'blue.500'}
                    fontWeight={600}
                    cursor={'pointer'}
                    _hover={{ color: 'white' }}
                    bg={'transparent'}
                    size={'sm'}
                >
                    Post
                </Button>
            </Flex>
        </Box>
    )
}

export default PostFooter
