import React from "react"
import ProjectCard from "../components/project-card"
import ProjectIcon from "../components/project-icon"
import ProjectDetail from "../components/project-detail"
import Intro from "../sections/intro"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  ProjectIcon: ({ icon }) => (
    <ProjectIcon icon={icon} sx={{ color: 'icon_darker' }}/>
  ),
  ProjectDetail: ({ header, text }) => (
    <ProjectDetail text={text} header={header} />
  ),
  Intro: () => {
    <Intro />
  }
}

export default components
