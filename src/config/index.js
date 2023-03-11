import { isLoggedIn } from "../services/authentication"

export const portalRoot = process.env.GATSBY_APP_ROOT
console.log("*** app root", portalRoot)

export const routes = {
  public: [
    {
      label: "Home",
      url: "",
      element: "",
    },
    {
      label: "Events",
      url: "",
      element: "",
    },
    {
      label: "Fundraiser",
      url: "",
      element: "",
    },
    {
      label: "About",
      url: "",
      element: "",
    },
    {
      label: "Contact",
      url: "",
      element: "",
    },
    {
      label: "Signup",
      url: "",
      element: "",
    },
    {
      label: isLoggedIn ? "" : "",
      url: "",
      element: "",
    },
  ],
  authenticated: {
    admin: [
      {
        label: "",
        url: "",
        element: "",
      },
    ],
    user: [
      {
        label: "",
        url: "",
        element: "",
      },
    ],
  },
}
