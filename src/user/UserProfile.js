import React from 'react'
import { Redirect } from 'react-router-dom'
import UserSpreadsIndex from './UserSpreadsIndex'

export default function UserProfile(props) {
  if (props.currentUser) {
    return(
      <div>

        <UserSpreadsIndex currentUser={props.currentUser} />

        <p>I AM PROFILE</p>

      </div>
    )
  } else {
    return (<Redirect to='/' />)
  }
}
