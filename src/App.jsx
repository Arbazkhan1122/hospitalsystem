import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './Dashboard/components/Layout'
import { BrowserRouter } from 'react-router-dom'
import Section from './Section'

function App() {

  return (
    <>
    {/* <Section/> */}
    <BrowserRouter>
      {/* <AppointmentBookingList/> */}
      {/* <BookingAppointment/> */}
      {/* <ListVisited/> */}
      {/* <NewVisitedList/> */}
      {/* <OnlineAppointment/> */}
      {/* <SSFClaim/> */}
      <Layout/>
      </BrowserRouter>
    </>
  )
}

export default App
