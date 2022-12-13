import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

//custom button variants

const outline = defineStyle({
  border: '2px dashed', 
  borderRadius: 0, 
  fontWeight: 'semibold', 
  color: 'facebook'
})

const test = defineStyle({
    border: '2px dashed', 
    borderRadius: 0, 
    colorScheme: 'facebook'
})

export const buttonTheme = defineStyleConfig({
  variants: { outline, test}, 
  
})
