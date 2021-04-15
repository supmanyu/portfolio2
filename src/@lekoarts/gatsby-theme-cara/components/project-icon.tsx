/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import * as DevIcon from "react-icons/di"
import * as SimpleIcon from "react-icons/si"
import * as BsIcon from "react-icons/bs"
const iconMap = {
    "react": <DevIcon.DiReact/>,
    css: <DevIcon.DiCss3 sx={{ py: 1 }}/>,
    html: <DevIcon.DiHtml5 sx={{ py: 1 }}/>,
    sass: <DevIcon.DiSass sx={{ py: 1 }}/>,
    js: <DevIcon.DiJavascript sx={{ py: 1 }}/>,
    mui: <SimpleIcon.SiMaterialUi sx={{ py: 1 }}/>,
    bootstrap: <BsIcon.BsBootstrap sx={{ py: 1 }}/>,
    node: <SimpleIcon.SiNodeDotJs sx={{ py: 1 }}/>
}
  
const ProjectIcon = ({ icon }) => {
  return iconMap[icon] || null
}

export default ProjectIcon