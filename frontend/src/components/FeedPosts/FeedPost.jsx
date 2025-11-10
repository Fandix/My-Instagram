import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const FeedPost = ({ post }) => {
    return (
        <>
            <PostHeader post={post} />
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image  src='/whilebear_profile.jpg' alt={"FEED POST IMG"} />
			</Box>
			<PostFooter post={post}/>
        </>
    )
}

export default FeedPost