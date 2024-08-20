import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppointmentBookingList from './component/AppointmentRouting'
import BookingAppointment from './component/BookingAppointment'
import ListVisited from './component/ListVisited'
import NewVisitedList from './component/NewVisitedList'
import OnlineAppointment from './component/OnlineAppointment'
import SSFClaim from './component/SSFClaim'
import Layout from './Dashboard/components/Layout'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
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
