import React, { useContext} from 'react';
import styled from 'styled-components';

import PostItem from 'components/molecules/PostItem';
import { PostsContext } from '../../../context/PostsContext';

const StyledWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns:1fr 1fr;

  flex-wrap: wrap;
  gap: 80px;
  width: 100%;
  @media screen and (max-width:600px){
    grid-template-columns:1fr;
  }

`;

function PostList() {
  const { posts } = useContext(PostsContext);

  return (
    <StyledWrapper>
      {posts.reverse().map((post) => <PostItem key={post.id} post={post} />)}
    </StyledWrapper>
  );
}

export default PostList;
