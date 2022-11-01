import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../client/Home/components/Footer'
import Header from '../client/Home/components/Header'

const WebsiteLayout = () => {
    return (
        <>
            <div className="tw-bg-bgr tw-px-[30px] md:tw-px-[50px] lg:tw-px-[80px]">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default WebsiteLayout