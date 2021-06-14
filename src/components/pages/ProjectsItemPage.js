import React, { lazy, useContext } from 'react';
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
const StyledWrapperMeta = styled.article`

  p{
    margin-top:20px;
    color: ${({theme})=>theme.thourth}
  }
  
`
const StyledWrapperArticle = styled.article`
  margin: 100px 0 ;
`

function ProjectsItemPage({ match }) {

  const {projects} = useContext(ProjectsContext)
  const Breadcrumbs = match.url.split('/')
  const param = match.params.id
  const project = projects.filter(item => item.slug === param)


  const Project = lazy(()=> import(`assets/projects/${project[0].source}`));

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
                <StyledWrapperMeta>                
                  <h1>{item.title}</h1>
                  <span>{item.data}</span>

                  <a href={item.page}>Link</a>
                  <a href={item.github}>Github</a>

                  <p>{item.description}</p>
                </StyledWrapperMeta>


                <StyledWrapperArticle>
                  <Project/>
                </StyledWrapperArticle>
            </>
            )
          })
        }
      </StyledWrapper>
    </>
  );
}

export default ProjectsItemPage;
