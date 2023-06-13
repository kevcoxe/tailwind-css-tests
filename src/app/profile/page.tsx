import Body from "@/components/Body"

import Link from "next/link"
import { getProfiles } from "@/app/actions";
import ProfilePin from "@/components/ProfilePin";

export default function Home() {

  const profiles = getProfiles().map((profile, i) => {
    return (
      <Link key={i} href={`/profile/${profile.id}`}>
        <div className="col-span-1 shadow-md md:col-start-2 md:col-span-3">
          <ProfilePin profileId={profile.id} />
        </div>
      </Link>
  )
  })

  return (
    <Body>
      <div className="container grid gap-2 md:grid-cols-3">

        { profiles }

      </div>
    </Body>
  )
}
