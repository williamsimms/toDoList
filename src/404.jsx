import React, { useEffect } from 'react'
import './404.scss'
import { Button } from '@material-ui/core'

export default function Error() {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <div className='error'>
      <div className='container'>
        <h1>404 User Error</h1>
        <Button variant='contained' className='error__button'>
          Home
        </Button>
      </div>
    </div>
  )
}
