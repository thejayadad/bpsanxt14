import getServerUser from '@/lib/getServerUser'
import React from 'react'

const Follow = async () => {
    const user = await getServerUser()
    if(!user){
        return <h2>Not Auth</h2>
    }
  return (
    <div>Follow</div>
  )
}

export default Follow