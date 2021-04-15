/** @jsx jsx */
import { Box, useColorMode, jsx } from "theme-ui"
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Made with <AiFillHeart fill={'red'} style={{verticalAlign: 'middle'}} /> by Sahitya Upmanyu &copy; {new Date().getFullYear()}. All rights reserved.
    </Box>
  )
}

export default Footer
