import React from 'react'
// import { jsx, ThemeProvider } from 'theme-ui'

export default ({ children }) => {
  console.log('layout')
  return (
    <div>
      <h1>My Layout</h1>
      <div>{children}</div>
    </div>
  )
}

// export default props => (
// <ThemeProvider
// theme={{
//       styles: {
//         // style child elements
//         h1: {
//           fontSize: [5, 6, 7],
//           color: 'red'
//         }
//       }
//     }}
// >
// <div
// {...props}
// sx={{
//         // swap colors for an inverted effect
//         color: 'background',
//         bg: 'primary',
//         px: 3,
//         py: 4
//       }}
// />
// </ThemeProvider>
// )
