import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../../components/Buttons'
import Icon from '../../../../../components/Icons'

const Banner = () => {
    return (
        <>
            <div className="tw-grid md:tw-grid-cols-2 tw-gap-3 tw-pt-6">
                <div className="md:tw-grid md:tw-grid-cols-4 tw-order-2 md:tw-order-1">
                    <div className="tw-flex tw-items-end tw-order- md:tw-order-1">
                        <ul className="tw-m-auto md:tw-m-0 md:tw-flex-col md:tw-items-start">
                            <li className="md:tw-p-0">
                                <Link to="" className="tw-text-left tw-text-secondary md:tw-pt-6">
                                    <Icon.Figma className={"tw-text-2xl tw-duration-300 banner-icon"} />
                                </Link>
                            </li>
                            <li className="md:tw-p-0">
                                <Link to="" className="tw-text-left tw-text-secondary md:tw-pt-6">
                                    <Icon.Github className={"tw-text-2xl tw-duration-300 banner-icon"} />
                                </Link>
                            </li>
                            <li className="md:tw-p-0">
                                <Link to="" className="tw-text-left tw-text-secondary md:tw-pt-6">
                                    <Icon.Linkedin className={"tw-text-2xl tw-duration-300 banner-icon"} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tw-my-3 tw-col-span-3 tw-items-end tw-order-1 md:tw-flex md:tw-my-0 md:tw-order-2">
                        <div className="tw-text-center md:tw-text-left">
                            <h2 className="tw-text-3xl md:tw-text-6xl lg:tw-text-7xl tw-font-bold">Hi, I’m Anh</h2>
                            <h2 className="tw-text-3xl md:tw-text-6xl lg:tw-text-7xl tw-font-bold tw-uppercase">FRONTEND DEVELOPER</h2>
                        </div>
                    </div>
                    <div className="tw-hidden md:tw-block md:tw-order-3">

                    </div>
                    <div className="tw-col-span-3 tw-mt-1 md:tw-flex tw-items-end tw-order-4 tw-text-center md:tw-order-4">
                        <Button.Transparent className={"filter-btn tw-inline-block tw-btn tw-font-normal hover:tw-border-primary hover:tw-bg-transparent"} content={"Download CV"} />
                    </div>
                </div>
                <div className="tw-flex tw-order-1 md:tw-order-2">
                    <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/2/25/786783/87381515_14570570377.jpg"
                        className="tw-m-auto tw-inline-block tw-rounded-full tw-w-56 tw-h-56 tw-object-cover md:tw-w-64 md:tw-h-64 lg:tw-w-80 lg:tw-h-80" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner