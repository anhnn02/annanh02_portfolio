import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../../components/Buttons'
import Icon from '../../../../../components/Icons'

const Contact = () => {
    return (
        <>
            <div className="tw-mt-24 tw-px-10">
                <div className="md:tw-grid md:tw-grid-cols-2 tw-gap-2">
                    <div className="tw-flex tw-flex-col tw-justify-between">
                        <div className="tw-text-center md:tw-text-left">
                            <h2 className="tw-font-bold tw-text-2xl md:tw-text-3xl">Contact</h2>
                            <span className="tw-inline-block tw-w-[90%] md:tw-w-[60%] tw-text-primary-light tw-my-1">Fill up the form and I will get back to you within 24 hours</span>
                        </div>
                        <div className="tw-flex">
                            <div className="tw-m-auto md:tw-m-0 tw-space-y-1 md:tw-space-y-5 tw-max-w-[300px]">
                                <div className="md:tw-border-l md:tw-border-l-primary tw-space-x-8 tw-p-2 tw-px-3 tw-rounded-lg tw-border tw-border-bgr tw-duration-700 hover:tw-bg-[#173B50] hover:tw-border hover:tw-border-primary">
                                    <Icon.Location className={"tw-text-primary-light tw-px-3 tw-text-sm md:tw-text-lg"} /> 
                                    <span className="tw-text-sm md:tw-text-lg">Ha Noi, Vietnam</span> 
                                </div>
                                <div className="md:tw-border-l md:tw-border-l-primary tw-space-x-8 tw-p-2 tw-px-3 tw-rounded-lg tw-border tw-border-bgr tw-duration-700 hover:tw-bg-[#173B50] hover:tw-border hover:tw-border-primary">
                                    <Icon.Email className={"tw-text-primary-light tw-px-3 tw-text-sm md:tw-text-lg"} /> 
                                    <span className="tw-text-sm md:tw-text-lg">anhnn02.it@gmail.com</span> 
                                </div>
                                <div className="md:tw-border-l md:tw-border-l-primary tw-space-x-8 tw-p-2 tw-px-3 tw-rounded-lg tw-border tw-border-bgr tw-duration-700 hover:tw-bg-[#173B50] hover:tw-border hover:tw-border-primary">
                                    <Icon.Phone className={"tw-text-primary-light tw-px-3 tw-text-sm md:tw-text-lg"} /> 
                                    <span className="tw-text-sm md:tw-text-lg">0312.345.689</span> 
                                </div>
                            </div>
                        </div>
                        <ul className="tw-hidden md:tw-block">
                            <li>
                                <Link to="" className="tw-text-left tw-text-secondary tw-pt-6"><Icon.Figma className={"tw-text-2xl"} /></Link>
                            </li>
                            <li>
                                <Link to="" className="tw-text-left tw-text-secondary tw-pt-6"><Icon.Github className={"tw-text-2xl"} /></Link>
                            </li>
                            <li>
                                <Link to="" className="tw-text-left tw-text-secondary tw-pt-6"><Icon.Linkedin className={"tw-text-2xl"} /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="tw-text-center md:tw-text-right">
                        <form action="" className="form-bgr tw-my-3 tw-inline-block tw-rounded-2xl tw-p-8">
                            <div className="">
                                <label htmlFor="" className="tw-block tw-text-left tw-text-sm">Your name</label>
                                <input type="text" className="tw-block tw-bg-transparent tw-my-1 tw-text-left tw-max-w-full tw-w-80 tw-rounded-lg tw-p-[10px] tw-text-sm tw-border tw-border-white tw-outline-none focus:tw-border focus:tw-border-thirty" />
                            </div>
                            <div className="tw-mt-2">
                                <label htmlFor="" className="tw-block tw-text-left tw-text-sm">Email</label>
                                <input type="text" className="tw-block tw-bg-transparent tw-my-1 tw-text-left tw-max-w-full tw-w-80 tw-rounded-lg tw-p-[10px] tw-text-sm tw-border tw-border-white tw-outline-none focus:tw-border focus:tw-border-thirty" />
                            </div>
                            <div className="tw-mt-2">
                                <label htmlFor="" className="tw-block tw-text-left tw-text-sm">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="tw-max-h-44 tw-block tw-bg-transparent tw-my-1 tw-text-left tw-max-w-full tw-w-80 tw-rounded-lg tw-p-[10px] tw-text-sm tw-border tw-border-white tw-outline-none focus:tw-border focus:tw-border-thirty"></textarea>
                            </div>
                            <Button.Fill content={"Send"} className={"tw-mt-2 tw-py-2"} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact