import React from 'react'
import {  Outlet } from 'react-router'
import SideBar from '../../components/admin/SideBar'
import { RefreshToken } from '../../hooks/Protected'

const AdminLayout = () => {
  RefreshToken()
  return (
      <main className='grid max-sm:grid:rows-[50px_Auto] md:grid-cols-[80px_auto]'>
          <SideBar/>
          <section className='md:col-start-2 max-sm:px-8 max-sm:pb-16 md:p-10 bg-primary/2'>
              <Outlet/>
          </section>
      </main>
  )
}

export default AdminLayout