import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import ReactMd from 'react-md-file';
import { ProjectsContext } from 'context/ProjectsContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ImageWithBorders from 'components/molecules/ImageWithBorders';


const StyledWrapper = styled.div`
  
  h1{
    margin-top:50px;
  }

`
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


function ProjectsItemPage({ match }) {

  const {projects} = useContext(ProjectsContext)
  const Breadcrumbs = match.url.split('/')
  const param = match.params.id
  const project = projects.filter(item => item.slug === param)

  return (
    <>
      <StyledWrapper>
        {
          project.map(item=> {
            return(
              <>
              <Helmet>
                <title>{item.title}</title>
              </Helmet>
               
                <BreadcrumbsNav>
                  <NavLink to={`/${Breadcrumbs[1]}`}>{Breadcrumbs[1]} </NavLink> > {param}
                </BreadcrumbsNav>

                <ImageWithBorders image={item.image}/>

                <h1>
                  {item.title}
                </h1>

                <article>
                  <ReactMd fileName={require(`assets/posts/${item.source}`)} />
                </article>
            </>
            )
          })
        }
      </StyledWrapper>
    </>
  );
}

export default ProjectsItemPage;
