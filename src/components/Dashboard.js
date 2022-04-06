import React from 'react'

const Dashboard = ({loggedInStatus}) => {
  return (
    <div>
        <h1> {loggedInStatus ? 'true' : 'false'}</h1>
        Dashboard</div>
  )
}

export default Dashboard