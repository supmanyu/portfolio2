/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  icon: string
}


const ProjectCard = ({ link, title, children, bg, icon }: ProjectCardProps) => {
  return(
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 2],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <div sx={{ 
      letterSpacing: `wide`,
      pt: 0,
      fontSize: [5,6],
      fontWeight: `medium`,
      lineHeight: 1,
     }}>
       {children}
    </div>
  </a>
  )
}

export default ProjectCard
