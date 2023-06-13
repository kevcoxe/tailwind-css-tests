import ProfileCircle from "./ProfileCircle"
import Link from "next/link";

import { getProfileWithId } from "@/app/actions";

interface ProfilePinParams {
  profileId: string
}

export default function ProfilePin ({ profileId }: ProfilePinParams) {

  const profile = getProfileWithId(profileId)

  return (
    <>
      {profile && <div className="flex items-center">
        <Link href={`/profile/${profileId}`}>
          <ProfileCircle
            size="sm"
            newStory={true}
            profilePic={ profile?.profilePic }
          />
        </Link>
        <div className="flex-row h-full">
          <Link href={`/profile/${profileId}`}>
            <strong className="text-2xl font-extrabold">{ profile?.profileName }</strong>
          </Link>
          <div className="flex">
            <span>{ profile?.profileLocation }</span>
          </div>
        </div>
      </div>}
    </>
  )
}