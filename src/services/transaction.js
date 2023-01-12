import axios from "axios"

export const transactionsByEvent = async ({ eventId }) => {
  let transactions = []

  await axios(
    `http://localhost:1337/api/transactions/event-id?eventId=${eventId}`
  )
    .then((res) => {
      transactions = res.data
    })
    .catch((err) => {
      console.log(`[Transactions Service] Error`, err)
    })
    .finally(() => {
      console.log(`[Transactions Service] Finally`)
    })

  return transactions
}
