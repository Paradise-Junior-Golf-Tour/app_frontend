import { getUser, setUser } from "./authentication"

export const services = {
  config: {
    env: process.env,
    url: null,
  },
  api: {
    admin: {},
    authentication: {
        getUser,
        setUser,
    },
    events: {},
    fundraiser: {},
    results: {},
    teeTimes: {},
    transactions: {},
    users: {},
  },
}

console.log("[Services]", services)
