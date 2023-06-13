
import { PostInfoInterface } from "@/types/myTypes"
import Image from "next/image"


interface ImageGridParams {
  posts: PostInfoInterface[]
}

export default function ImageGrid ({ posts }: ImageGridParams) {

  const postGrid = posts.map((post, i) => {
    return (
      <div className="flex items-center h-full col-span-1 p-4 m-auto shadow-sm w-fit" key={i}>
        <Image
          src={ post.imageLocation }
          alt="Picture of the author"
          width={500}
          height={500}
          quality={25}
        />
      </div>
    )
  })

  return (
    <div className="grid grid-cols-3 gap-4">
      { postGrid }
    </div>
  )
}