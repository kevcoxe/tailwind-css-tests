import Body from "@/components/Body"

import Link from "next/link"
import { getProfiles } from "@/app/actions";

export default function Home() {

  const profiles = getProfiles().map((profile, i) => {
    return (
      <Link key={i} href={`/profile/${profile.id}`}>
        <div className="container shadow-md">
            <strong>{ profile.profileName }</strong>
        </div>
      </Link>
  )
  })

  return (
    <Body>
      <div className="grid grid-cols-5 gap-2">

        { profiles }

      </div>
    </Body>
  )
}
