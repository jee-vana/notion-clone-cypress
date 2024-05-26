import React from 'react'

interface TemplateProps {
    children: React.ReactNode
}
const Template:React.FC<TemplateProps> = ({children}) => {
  return (
    <div className='h-screen px-6 flex justify-center'>
        {children}
    </div>
  )
}

export default Template