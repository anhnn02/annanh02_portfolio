import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../../components/Buttons'

const Introduce = () => {
    return (
        <>
            <div className="tw-mt-24 tw-px-10">
                <div className="tw-text-center tw-mb-10">
                    <h2 className="tw-font-bold tw-text-2xl md:tw-text-3xl">Who am I?</h2>
                    <span className="tw-inline-block tw-w-[350px] tw-text-primary-light tw-pt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</span>
                </div>
                <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
                    <div className="tw-text-center">
                        <div className="tw-inline-block reg-blur tw-overflow-hidden tw-rounded-xl">
                            <img className="tw-inline-block tw-m-5 tw-mb-12 tw-overflow-hidden tw-rounded-lg tw-w-56 tw-h-60 tw-object-cover" src="https://images.unsplash.com/photo-1654659332441-681b67e36555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80s" alt="" />
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-justify-between">
                        <h4 className="tw-text-center md:tw-text-left tw-font-bold tw-text-xl">Lorem ipsum dolor</h4>
                        <p className="tw-text-sm tw-my-1 md:tw-my-0 md:tw-text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <p className="tw-text-sm tw-my-1 md:tw-my-0 md:tw-text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <Button.Fill className={"tw-m-auto md:tw-m-0 tw-w-fit"} content={<Link to="#">Let's talk</Link>} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce