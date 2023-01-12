import React, { useState, useEffect } from "react"
import { transactionsByEvent } from "../../../../services/transaction"
import moment from "moment"
import { Typography } from "@mui/material"

const TransactionsByEvent = ({ eventId }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (eventId) {
      transactionsByEvent({ eventId: eventId })
        .then((transaction) => {
          setData(transaction)
        })
        .catch((error) => {
          console.log("[Admin TransactionsById] Error", error)
        })
    }
  }, [eventId])

  const content =
    !data.data || data.data.length === 0 ? (
      <span>No transactions are available.</span>
    ) : (
      data?.data?.map((x) => {
        return (
          <>
            <strong>
              Trans. ID {x.id} - User ID: {x.user.id} :{" "}
              {x.user.name_first + " " + x.user.name_last + " - "}{" "}
            </strong>
            Date: {moment(new Date(x.createdAt)).format("MMMM Do YYYY, h:mm a")}{" "}
            - Total: ${x.total} - {x.type} -{" "}
            {x.success ? (
              <span style={{ fontWeight: "bold" }}>Completed</span>
            ) : (
              <span style={{ color: "#D94C33", fontWeight: "bold" }}>
                Not Completed
              </span>
            )}
            <hr style={{ opacity: 0.25 }} />
          </>
        )
      })
    )

  return (
    <section>
      <Typography variant="h4" component="h2">
        Transaction History
      </Typography>
      <hr />
      {content}
      <p className="dev">Component is for Admin use only.</p>
      <p className="dev">
        Transactions records will need to also be able to handle multiple users
        in the case of the Fundraiser. Change the relationship type.
      </p>
      <p className="dev">Add a choice of individual, group, etc.</p>
      <p className="dev">
        A corresponding flow needs to be adapted from the existing registration
        flow.
      </p>
    </section>
  )
}

export default TransactionsByEvent
