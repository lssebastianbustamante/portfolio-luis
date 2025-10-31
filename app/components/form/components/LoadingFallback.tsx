import type React from 'react'
import { memo } from 'react'
import Spinner from './icons/Spinner'



const LoadingFallback = memo(() => (
  <div
  style={{
    padding: '20px',
    width: '100%',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <Spinner color="#EAAB5E" />
</div>
))

export default LoadingFallback
