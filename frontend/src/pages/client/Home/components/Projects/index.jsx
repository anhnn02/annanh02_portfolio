import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../../../../../components/Buttons'
import Icon from '../../../../../components/Icons'

const Projects = () => {
    return (
        <>
            <div id="project" className="tw-mt-24 tw-px-10">
                <div className="tw-text-center tw-mb-10">
                    <h2 className="tw-font-bold tw-text-2xl md:tw-text-3xl">Ann’<span className="tw-text-2xl md:tw-text-3xl tw-text-thirty">s</span> Project</h2>
                </div>
                <div className="">
                    {/* <div className="tw-flex tw-justify-between tw-items-center">
                        <ul>    
                            <li className="tw-pl-0"> <NavLink to="/" className="project-nav__item hover:tw-text-primary">All</NavLink> </li>
                            <li className="tw-pl-0"> <NavLink to="/projects/website" className="project-nav__item hover:tw-text-primary">Website</NavLink> </li>
                            <li className="tw-pl-0"> <NavLink to="/projects/figma" className="project-nav__item hover:tw-text-primary">Figma</NavLink> </li>
                        </ul>
                        <div className="">
                            <Icon.List className={"tw-bg-primary tw-p-2 tw-rounded tw-cursor-pointer"} />
                        </div>
                    </div> */}
                    <div className="tw-grid tw-mt-10 tw-gap-6 sm:tw-grid-cols-2 md:tw-gap-8 md lg:tw-grid-cols-3 lg:tw-gap-20">
                        <div className="project-reg-filter tw-fx tw-flex-col tw-justify-between tw-items-c tw-text-center tw-p-6">
                            <Link to="">
                                <img className="tw-w-full tw-h-[160px] tw-object-cover tw-rounded-xl"
                                    src="https://kingmarketing.vn/wp-content/uploads/2022/07/dich-vu-thiet-ke-website-03.png" alt="" />
                            </Link>
                            <h3 className="tw-my-2"><Link to="">Courses IFT</Link></h3>
                            <div className="tw-text-center tw-space-x-2">
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                            </div>
                            <div className="tw-mt-5">
                                <Button.Transparent className={"project-item__btn tw-m-auto tw-inline-block tw-rounded-3xl tw-w-fit tw-p-1 tw-px-3 hover:tw-bg-primary"} classNameBtnBg={"tw-p-2 tw-rounded-3xl"} content={<Link className="tw-text-sm" to="">Live demo</Link>} />
                            </div>
                        </div>
                        <div className="project-reg-filter tw-fx tw-flex-col tw-justify-between tw-items-c tw-text-center tw-p-6">
                            <Link to="">
                                <img className="tw-w-full tw-h-[160px] tw-object-cover tw-rounded-xl"
                                    src="https://kingmarketing.vn/wp-content/uploads/2022/07/dich-vu-thiet-ke-website-03.png" alt="" />
                            </Link>
                            <h3 className="tw-my-2"><Link to="">Courses IFT</Link></h3>
                            <div className="tw-text-center tw-space-x-2">
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                            </div>
                            <div className="tw-mt-5">
                                <Button.Transparent className={"project-item__btn tw-m-auto tw-inline-block tw-rounded-3xl tw-w-fit tw-p-1 tw-px-3 hover:tw-bg-primary"} classNameBtnBg={"tw-p-2 tw-rounded-3xl"} content={<Link className="tw-text-sm" to="">Live demo</Link>} />
                            </div>
                        </div>
                        <div className="project-reg-filter tw-fx tw-flex-col tw-justify-between tw-items-c tw-text-center tw-p-6">
                            <Link to="">
                                <img className="tw-w-full tw-h-[160px] tw-object-cover tw-rounded-xl"
                                    src="https://kingmarketing.vn/wp-content/uploads/2022/07/dich-vu-thiet-ke-website-03.png" alt="" />
                            </Link>
                            <h3 className="tw-my-2"><Link to="">Courses IFT</Link></h3>
                            <div className="tw-text-center tw-space-x-2">
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                                <img src="https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png"
                                    className="tw-inline-block tw-bg-white tw-w-10 tw-h-10 tw-object-cover tw-rounded-full tw-p-1" alt="" />
                            </div>
                            <div className="tw-mt-5">
                                <Button.Transparent className={"project-item__btn tw-m-auto tw-inline-block tw-rounded-3xl tw-w-fit tw-p-1 tw-px-3 hover:tw-bg-primary"} classNameBtnBg={"tw-p-2 tw-rounded-3xl"} content={<Link className="tw-text-sm" to="">Live demo</Link>} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects