"use client";

import { useState } from "react"
import ProfilePin from "./ProfilePin"
import ActionIconRow from "./ActionIconRow"
import { PostInfoInterface } from "@/types/myTypes";
import { MouseEvent } from "react"


interface ImagePostParams {
  postInfo: PostInfoInterface
}

export default function ImagePost (params: ImagePostParams) {

  const { postInfo } = params

  const [ liked, setLike ] = useState(false)
  const [ bookmarked, setBookmarked ] = useState(false)

  const handleImageClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.detail === 2) setLike(!liked)
  }

  return (
    <div className="container">
      <div className="grid grid-cols-5 p-4 m-1 rounded-md shadow-lg">
        <div className="col-span-5">
          <ProfilePin
            profileName={ postInfo.profile.profileName }
            location={ postInfo.profile.profileLocation }
            profilePic={ postInfo.profile.profilePic }
          />
        </div>

        <div className="col-span-5">
          <div className="relative w-auto overflow-hidden h-112">
            <div className="absolute transform -translate-y-1/2 top-1/2">
              <button onClick={ handleImageClick } >
                <img className="object-center" src={ postInfo.imageLocation }></img>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <ActionIconRow
            liked={ liked }
            bookmarked={ bookmarked }
            likeAction={ setLike }
            bookmarkAction={ setBookmarked }
          />
        </div>

        <div className="col-span-5">
          <div className="flex flex-col">
            <span>{ postInfo.views } views</span>
            <div className="flex">
              <span><strong>{ postInfo.profile.profileName }</strong> { postInfo.description }</span>
            </div>
            <span className="font-light text-gray-400">View all { postInfo.comments.length } comments</span>
            <span className="text-gray-300 font-extralight">{ postInfo.datePosted }</span>
          </div>
        </div>
      </div>
    </div>
  )
}