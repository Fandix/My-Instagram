import { ChakraProvider } from '@chakra-ui/react'
import { system } from '../../theme'
import { useEffect } from 'react'

export function Provider(props) {
  useEffect(() => {
    // 設置深色模式 - Chakra UI v3 使用 data-theme 屬性
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  return (
    <ChakraProvider value={system}>
      {props.children}
    </ChakraProvider>
  )
}
