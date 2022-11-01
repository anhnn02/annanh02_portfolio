import React from 'react'
import Button from '../../../../../components/Buttons'
import Icon from '../../../../../components/Icons'

const Services = () => {
    return (
        <>
            <div className="tw-mt-24 tw-px-10">
                <div className="md:tw-grid lg:tw-grid-cols-3 tw-gap-6 ">
                    <div className="tw-py-16 tw-text-center md:tw-text-left">
                        <h2 className="tw-font-bold tw-text-2xl md:tw-text-3xl">My <span className="tw-text-thirty tw-text-2xl md:tw-text-3xl">awesome</span>  services</h2>
                        <span className="tw-inline-block md:tw-w-[260px] lg:tw-w-[350px] tw-text-primary-light tw-pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                    </div>
                    <div className="tw-col-span-2 tw-relative">
                        <div className="tw-grid md:tw-grid-cols-2">
                            <div className="">
                                <div className="tw-m-auto md:tw-m-0 tw-flex tw-flex-col tw-justify-between tw-items-center tw-py-7 tw-px-2 reg-filter 
                                tw-text-center tw-w-64 tw-h-72 tw-rounded-xl md:-tw-translate-x-10 lg:tw-translate-x-20 xl:tw-translate-x-32">
                                    <div className="">
                                        <Icon.Window className={"tw-text-7xl tw-text-thirty"} />
                                    </div>
                                    <h4 className="tw-font-bold">Frontend developer 1</h4>
                                    <span className="tw-block tw-text-sm tw-font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    <Button.Light className={"tw-inline-block tw-rounded-3xl tw-py-1 tw-px-2 tw-text-sm"} classNameBtnBg={"tw-py-1 tw-px-2 tw-rounded-3xl"} content={"Contact me"} />
                                </div>
                                <div className="tw-m-auto tw-mt-12  tw-flex tw-flex-col tw-justify-between tw-items-center tw-py-7 tw-px-2 reg-filter 
                                tw-text-center tw-w-64 tw-h-72 tw-rounded-xl md:-tw-translate-y- md:-tw-translate-x-20 md:tw-mt-20">
                                    <div className="">
                                        <Icon.Window className={"tw-text-7xl tw-text-red-400"} />
                                    </div>
                                    <h4 className="tw-font-bold">Frontend developer 2</h4>
                                    <span className="tw-block tw-text-sm tw-font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    <Button.Light className={"tw-inline-block tw-rounded-3xl tw-py-1 tw-px-2 tw-text-sm"}
                                        classNameBtnBg={"tw-py-1 tw-px-2 tw-rounded-3xl"} content={"Contact me"} />
                                </div>
                            </div>
                            <div className="tw-text-center md:tw-text-right">
                                <div className="tw-inline-block">
                                    <div className="tw-m-auto md:tw-m-0 tw-flex tw-flex-col tw-justify-between tw-items-center 
                                    tw-py-7 tw-px-2 tw-mt-12 reg-filter tw-text-center tw-w-64 tw-h-72 tw-rounded-xl md:tw-translate-y-[100px] ">
                                        <div className="">
                                            <Icon.Window className={"tw-text-7xl tw-text-red-400"} />
                                        </div>
                                        <h4 className="tw-font-bold">Frontend developer 3</h4>
                                        <span className="tw-block tw-text-sm tw-font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        <Button.Light className={"tw-inline-block tw-rounded-3xl tw-py-1 tw-px-2 tw-text-sm"}
                                            classNameBtnBg={"tw-py-1 tw-px-2 tw-rounded-3xl"} content={"Contact me"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services