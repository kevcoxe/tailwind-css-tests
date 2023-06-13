import Body from "@/components/Body"
import Link from "next/link";

import { getPostsWithProfileId } from "@/app/actions";
import PostViewPicker from "@/components/PostViewPicker";

interface ProfileParams {
  id: string
}

export default function Page({ params: { id } }: { params: ProfileParams }) {

  const posts = getPostsWithProfileId(id)

  return (
    <Body>
      <div className="container">
        <div className="flex gap-4 p-4 my-3">
          <Link href={`/`}>Home</Link>
          <Link href={`/profile`}>Profiles</Link>
        </div>
      </div>
      <PostViewPicker posts={posts} startOnGrid={true}/>
    </Body>
  )
}
