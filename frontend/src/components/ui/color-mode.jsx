import { IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

// Simple color mode implementation for Create React App
export function useColorMode() {
  const [colorMode, setColorModeState] = React.useState('light')

  const setColorMode = React.useCallback((mode) => {
    setColorModeState(mode)
    document.documentElement.classList.toggle('dark', mode === 'dark')
  }, [])

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }, [colorMode, setColorMode])

  return {
    colorMode,
    setColorMode,
    toggleColorMode,
  }
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <IconButton
        onClick={toggleColorMode}
        variant='ghost'
        aria-label='Toggle color mode'
        size='sm'
        ref={ref}
        {...props}
      >
        <ColorModeIcon />
      </IconButton>
    )
  },
)
