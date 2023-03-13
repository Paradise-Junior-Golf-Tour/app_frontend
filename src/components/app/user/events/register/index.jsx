import React from "react"
import { getUser } from "../../../../../services/authentication"
import RegisterEventsIndividual from "./individual"
import RegisterEventsFamily from "./family"

export default function UserEventRegistration(props) {
  const user = getUser()

  if (user?.data?.family_account) return <RegisterEventsFamily {...props} />

  return <RegisterEventsIndividual {...props} />
}
