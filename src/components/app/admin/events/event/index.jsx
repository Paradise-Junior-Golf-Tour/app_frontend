import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Typography } from "@mui/material"
import { eventsOneById, eventsAll } from "../../../../../services/event"
import { portalRoot } from "../../../../../config"
import moment from "moment"
import TransactionsByEvent from "../../transactions"
// import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const AdminEvent = (props) => {
  const [data, setData] = useState(null)

  const event = {
    id: props.location?.state?.id || props.location?.state?.event?.id,
    slug: props.location.pathname.substr(
      props.location.pathname.lastIndexOf("/") + 1
    ),
  }

  useEffect(() => {
    console.log("[Event Manage]", event)

    if (event.id) {
      eventsOneById({ identifier: event.id })
        .then((events) => {
          setData(events)
        })
        .catch((error) => {
          console.log("[Admin Events Page] Error", error)
        })
      return
    }

    // If no id, find by slug.  Move this to services with conditional args for slug and id
    eventsAll({ id: event.id })
      .then((events) => {
        setData(events)
      })
      .catch((error) => {
        console.log("[Admin Events Page] Error", error)
      })
  }, [event.id, event.slug])

  useEffect(() => {
    console.log("[Admin Events Manage Page] Props/Data", {
      id: event.id,
      slug: event.slug,
      props,
      data,
    })
  }, [data, event.id, event.slug, props])

  // Render no event found.
  if (!event.id) {
    return (
      <>
        <Typography variant="h3" component="h1">
          Admin Event
        </Typography>
        <div>
          Event not found.
          <Link to={`/${portalRoot}/events/new`}>
            Click here to create a new one.
          </Link>
        </div>
      </>
    )
  }

  // Render loading.
  if (!data) return <div>Loading event data...</div>

  // Render event found.
  return (
    <article>
      <section>
        <Typography variant="h3" component="h1">
          {data?.name}
        </Typography>
        <hr />
        <Typography variant="h5" component="p">
          {moment(data?.date_start).format("MMMM Do YYYY")} -{" "}
          {moment(data?.date_end).format("MMMM Do YYYY")}
        </Typography>
        <p>About this event: {data?.Description}</p>
        <p>
          Reigstration:{" "}
          <strong>
            {data?.Registration ? "Open" : "Closed"} | ${data?.fee}
          </strong>
        </p>
        <p className="dev">
          It may be a good idea to conditionally hide the tee times if the event
          has completed.
        </p>
        <p className="dev">
          Some sections below may require their own queries to populate
          relationships and other fields.
        </p>
        <p className="dev">
          Their should be a way to edit these fields. Perhaps modals or links to
          the specific sections,{" "}
          <strong>
            or event better - clicking edit for each section shows the editor in
            its place.
          </strong>{" "}
          This could also be a good spot to use conditional menus for{" "}
          <strong>Edit, Save, Discard.</strong>
        </p>
      </section>

      <section>
        <Typography variant="h4" component="h2">
          Registered Users
        </Typography>
        <hr />
        {data?.users?.map((x) => {
          return (
            <div>
              {x.name_first || x.name_last
                ? x.name_first + " " + x.name_last
                : null}{" "}
              - <strong>{x.username}</strong>
            </div>
          )
        })}
        <p className="dev">
          This can be made into a resuable component shared in both
          authenticated and public routes.
        </p>
        <p className="dev">
          Should be able to add or remove users from the event. This would also
          need to remove them from the tee times. Also consider the tangential
          effects - should adding a user create or update a transaction? Results
          and Tee Times? Also, this could be locked once the registration is
          over.
        </p>
      </section>

      <section>
        <Typography variant="h4" component="h2">
          Tee Times
        </Typography>
        <hr />
        <p>Not available just yet.</p>
        <p className="dev">
          This can be made into a resuable component shared in both
          authenticated and public routes.
        </p>
      </section>

      <section>
        <Typography variant="h4" component="h2">
          Results
        </Typography>
        <hr />
        <p>Not available just yet.</p>
        <p className="dev">
          This can be made into a resuable component shared in both
          authenticated and public routes.
        </p>
      </section>

      <TransactionsByEvent eventId={event.id} />
    </article>
  )
}

export default AdminEvent
