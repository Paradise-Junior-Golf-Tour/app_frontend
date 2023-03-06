import React from "react"
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk"
import { Box } from "@mui/system"
import Layout from "../../components/layout"

// Square SDK here
const Checkout = () => {
  return (
    <Layout heading="Checkout" images={[    ]}>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
            
        }}
      >
        <PaymentForm
          applicationId="sandbox-sq0idb-qY-3dhsWEJgpLCfWDcuzJg"
          cardTokenizeResponseReceived={(token, verifiedBuyer) => {
            console.log("token:", token)
            console.log("verifiedBuyer:", verifiedBuyer)
          }}
          locationId="XXXXXXXXXX"
        >
          <CreditCard />
        </PaymentForm>
      </Box>
    </Layout>
  )
}

export default Checkout
