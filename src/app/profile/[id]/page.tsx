import Body from "@/components/Body"
import Link from "next/link";

import { getPostsWithProfileId } from "@/app/actions";
import ImageGrid from "@/components/ImageGrid"

interface ProfileParams {
  id: string
}

export default function Page({ params: { id } }: { params: ProfileParams }) {

  const posts = getPostsWithProfileId(id)

  console.log(posts)

  return (
    <Body>
      <div className="container">
        <div className="flex gap-4 p-4 my-3">
          <Link href={`/`}>Home</Link>
          <Link href={`/profile`}>Profiles</Link>
        </div>
      </div>
      <ImageGrid
        posts={posts}
      />
    </Body>
  )
}
