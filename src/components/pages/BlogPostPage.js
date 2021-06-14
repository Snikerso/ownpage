import React, { useContext, lazy } from 'react';
import Helmet from 'react-helmet';
import { PostsContext } from 'context/PostsContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const BreadcrumbsNav = styled.div`
  margin-bottom:40px;
  color:${({theme}) => theme.first};
  font-weight:bold;

  a{
    color:${({theme}) => theme.first};
    :hover{
      color:${({theme}) => theme.second};
    }
  }

`

const StyledWrapperMeta = styled.article`

  p{
    margin-top:20px;
    color: ${({theme})=>theme.third}
  }
  
`
const StyledWrapperArticle = styled.article`
  margin: 100px 0 ;
`


function BlogPostPage({ match }) {
  const {posts} = useContext(PostsContext)
  const Breadcrumbs = match.url.split('/')
  const param = match.params.id
  const post = posts.filter(item => item.slug === param)

  const Post = lazy(()=> import(`assets/posts/${post[0].source}`));

  return (
    <>
      <div>
        {
          post.map(item=> {
            return(
              <>
              <Helmet>
                <title>{item.title}</title>
                <meta name="description" content={item.description}/>
              </Helmet>

              <BreadcrumbsNav>
                <NavLink to={`/${Breadcrumbs[1]}`}>  {Breadcrumbs[1]} > </NavLink> {param}
              </BreadcrumbsNav>
              <StyledWrapperMeta>                
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </StyledWrapperMeta>


              <StyledWrapperArticle>
                <Post/>
              </StyledWrapperArticle>

            </>
            )
          })
        }
      </div>
    </>
  );
}

export default BlogPostPage;
