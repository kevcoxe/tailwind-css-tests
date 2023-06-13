import Body from "@/components/Body"
import { getPosts } from "@/app/actions";

import PostViewPicker from "@/components/PostViewPicker";

export default function Home() {
  const posts = getPosts()

  return (
    <Body>
      <PostViewPicker posts={posts} />
    </Body>
  )
}
