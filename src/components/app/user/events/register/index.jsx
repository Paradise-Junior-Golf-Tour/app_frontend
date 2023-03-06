import React from "react"
import { getUser } from "../../../../../services/authentication"
// import { getUserEvents } from "../../../../services/user"
import RegisterEventsIndividual from './individual'

export default function UserEventRegistration(props) {
  const user = getUser()

  if (user?.user?.family_account) return "Family Account"

  return <RegisterEventsIndividual />
}
