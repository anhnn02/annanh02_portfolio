import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../../../components/Icons'
import Logo from '../../../../../components/Logo'

const Header = () => {
  return (
    <div className="tw-py-5 md:tw-py-10 tw-flex tw-justify-between tw-items-center">
      <Logo />
      <div className="tw-text-2xl">
        <Icon.MoonStar className={"tw-text-xl tw-text-primary"} />
      </div>
    </div>
  )
}

export default Header