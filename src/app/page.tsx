import Body from "@/components/Body"
import ImagePost from "@/components/ImagePost"
import { PostInfoInterface } from "@/types/myTypes";
import { Posts } from "@/data/data";

export default function Home() {


  const postContent = Posts.map((post: PostInfoInterface, i: number) => {
    return (
      <div key={i} className="col-span-5 lg:col-span-3 lg:col-start-2">
        <ImagePost postInfo={ post } />
      </div>
    )
  })

  return (
    <Body>
      <div className="grid grid-cols-5 gap-2">

        { postContent }

      </div>
    </Body>
  )
}
