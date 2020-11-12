import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import PostList from 'components/organisms/portfolio/PostList';
import { PostsContext } from 'context/PostsContext';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BlogPage = () => {
  const { posts } = useContext(PostsContext);
  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>

      <StyledWrapper>
        <PostList posts={posts} />
      </StyledWrapper>
    </>
  );
};

export default BlogPage;
