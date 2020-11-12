import React, { useContext, useState } from 'react';
import Helmet from 'react-helmet';
import styled,{css} from 'styled-components';
import PortfolioItem from '../molecules/PortfolioItem';
import PortfolioTechStack from '../molecules/PortfolioTechStack';
import {HeadWithUnderLine} from 'components/atoms/Heads';
import { HeadWithItem } from '../atoms/Wrappers';
import { ProjectsContext } from '../../context/ProjectsContext';

const StyledWrapper = styled.div`
  display: grid;
  flex-direction: column;
  > * {
    margin-top:50px;
  }
`;

const StyledWrapperPortfolioItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:100px;
  > * {
    margin-bottom:100px;
  }
`;
const StyledWrapperProjectFilters = styled.div`
  display: flex;
  justify-content:center;
  justify-items:center;
  gap:0px;
  font-size:24px;
  font-weight:bold;
  p:first-child{
    margin-right:30px;
  }
`;

const ButtonFilter = styled.p`
  margin-top:30px;
  cursor:pointer;
    ${({underline})=>
    underline && css`
    text-decoration:underline;
    `}
`
const StyledHeadWithItem = styled(HeadWithItem)`
  margin-top:50px;
`

const techStackItems = [
  {
    id: 1,
    name: 'react',
  },
  {
    id: 2,
    name: 'django',
  },
  {
    id: 3,
    name: 'js',
  },
  {
    id: 4,
    name: 'python',
  },
  {
    id: 5,
    name: 'html',
  },
  {
    id: 6,
    name: 'css',
  },

  {
    id: 8,
    name: 'r',
  },
  {
    id: 9,
    name: 'gatsby',
  },

];

function PortfolioPage() {

  const {projects} = useContext(ProjectsContext)
  const [projectType, setProjectType] = useState('PAGE')

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <StyledWrapper>
        <HeadWithItem>
          <HeadWithUnderLine text="Techstack" width={130}/>
          <PortfolioTechStack techstack={techStackItems} main />
        </HeadWithItem>
        <StyledHeadWithItem>
          <HeadWithUnderLine text="Projekty" width={110}/>
        </StyledHeadWithItem>
        <StyledWrapperProjectFilters>
          <ButtonFilter underline={'RESEARCH' !== projectType} onClick={() => setProjectType('PAGE')}>Strony</ButtonFilter> 
          <ButtonFilter underline={'PAGE' !== projectType } onClick={() => setProjectType('RESEARCH')}>Badania</ButtonFilter>
        </StyledWrapperProjectFilters>
        <StyledWrapperPortfolioItems>
          {projects.filter(item => item.type == projectType).map((item, index) => {
            if (index % 2 === 0) {
              return <PortfolioItem left item={item} />;
            }
            return <PortfolioItem item={item} />;
          })}

        </StyledWrapperPortfolioItems>
      </StyledWrapper>
    </>
  );
}

export default PortfolioPage;
