"use client";

import { FaHeart, FaRegHeart, FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { TbMessageCircle2 } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { IconType } from "react-icons";

interface IconButtonParams {
  Icon: IconType
  ActiveIcon: IconType
  active: boolean
  activeClass: string
  baseClass: string
  action: (state: boolean) => void
}

const IconButton = (params : IconButtonParams) => {

  const { Icon, ActiveIcon, active, activeClass, baseClass, action } = params
  const iconClass = `${baseClass} ${active ? activeClass : ''}`
  const Element = active ? ActiveIcon : Icon

  return (
    <div className="flex" onClick={() => action(!active)}>
      <Element className={iconClass} />
    </div>
  )
}

interface ActionIconRowParams {
  liked: boolean
  bookmarked: boolean
  likeAction: (state: boolean) => void
  bookmarkAction: (state: boolean) => void
}

export default function ActionIconRow (params: ActionIconRowParams) {
  const { bookmarked, liked, likeAction, bookmarkAction } = params
  const iconClass = "w-10 h-10"
  const likedClass = "text-red-600"
  const bookmarkedClass = "text-black"

  return (
    <div className="flex justify-between py-2">
      <div className="flex gap-6">
        <IconButton
          Icon={FaRegHeart}
          ActiveIcon={FaHeart}
          active={liked}
          activeClass={likedClass}
          baseClass={iconClass}
          action={likeAction}
        />
        <TbMessageCircle2 className={iconClass}/>
        <BsSend className={iconClass}/>
      </div>
      <IconButton
        Icon={FaRegBookmark}
        ActiveIcon={FaBookmark}
        active={bookmarked}
        activeClass={bookmarkedClass}
        baseClass={iconClass}
        action={bookmarkAction}
      />
    </div>
  )
}