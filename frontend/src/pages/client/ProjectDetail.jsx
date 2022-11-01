import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icons'

const ProjectDetail = () => {
    return (
        <>
            <div className="tw-space-y-3">
                <div className="">
                    <Link to="/#project"><Icon.ArrowLeft className={"tw-text-3xl"} /></Link> 
                </div>
                <h1 className="tw-font-bold tw-text-3xl md:tw-text-5xl">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor  sit amet  sit amet  sit amet
                </h1>
                <div className="tw-space-x-3">
                    <span className="tw-bg-primary tw-p-2 tw-rounded-3xl">2022</span>
                    <span className="tw-text-gray-400">Projects Coding</span>
                </div>
                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do eiusmod t sectetur adipiscing elit, sed do eiusmod t sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="tw-flex tw-justify-between tw-items-center">
                    <Link to="" className="tw-text-thirty tw-opacity-60 tw-duration-300 hover:tw-opacity-100">
                        <Icon.Link className={"tw-text-thirty"} /> https://www.facebook.com/
                    </Link>
                    <div className="">
                        <Icon.Fb className="tw-text-2xl" />
                    </div>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1649859395314-bdea587e4524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="tw-w-full tw-max-h-px] tw-rounded-2xl" alt="" />
                </div>
            </div>
            <div className="tw-mt-10 tw-space-y-5">
                <div className="tw-space-y-2">
                    <h2 className="tw-inline-block tw-w-full md:tw-w-[40%] tw-text-3xl tw-border-b tw-pb-3">About this project</h2>
                    <p>Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.

                        At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.</p>
                </div>
                <div className="tw-space-y-2">
                    <h2 className="tw-inline-block tw-w-full md:tw-w-[40%] tw-text-3xl tw-border-b tw-pb-3">Technical Sheet</h2>
                    <p>Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.

                        At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.</p>
                </div>
            </div>
        </>
    )
}

export default ProjectDetail