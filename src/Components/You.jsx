import React from 'react'
import Sidebar from './Sidebar'
import SorryNotSupported from './SorryNotSupported'

import SkeletonLoader from './SkeletonLoader'
import FetchError from './FetchError'

const You = () => {
  return (
    <>
      <Sidebar />
      <SorryNotSupported
        message={
          'we dont track histories yet'
        }
      />
    </>
  )
}

export default You