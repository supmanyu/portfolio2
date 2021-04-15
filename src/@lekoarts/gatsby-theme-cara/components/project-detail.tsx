/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectDetailProps = {
  text: string
  header: string
}  

const ProjectDetail = ({ header, text } : ProjectDetailProps) => {
  return(
    
    <div
      sx={{
        letterSpacing: `wide`,
        fontSize: [3],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {header}
      <p sx={{ color: 'white', fontSize: [1] }}>
        {text}
      </p>
    </div>
  )
}

export default ProjectDetail