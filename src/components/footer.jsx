import React from 'react'
import { useState } from 'react'
import "./footer.css"
const footer = () => {
  const date = new Date()
  return (
    <div className='footer'>
        <p>Copyright @ {date.getFullYear()}, Danish - All Right Reserved.</p>
    </div>
  )
}

export default footer