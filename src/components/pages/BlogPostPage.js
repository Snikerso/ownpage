import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import ReactMd from 'react-md-file';
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


function BlogPostPage({ match }) {
  const {posts} = useContext(PostsContext)
  const Breadcrumbs = match.url.split('/')
  const param = match.params.id
  const post = posts.filter(item => item.slug === param)

  return (
    <>
      <div>
        {
          post.map(item=> {
            return(
              <>
              <Helmet>
                <title>{item.title}</title>
              </Helmet>
                <BreadcrumbsNav>
                <NavLink to={`/${Breadcrumbs[1]}`}>{Breadcrumbs[1]} </NavLink> > {param}
                </BreadcrumbsNav>
              <h1>{item.title}
              
              </h1>
              <article>
                <ReactMd fileName={require(`assets/posts/${item.source}`)} />
              </article>
            </>
            )
          })
        }
      </div>
    </>
  );
}

export default BlogPostPage;
