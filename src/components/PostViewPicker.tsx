"use client";

import { useState } from "react";
import { PostInfoInterface } from "@/types/myTypes";
import ImageGrid from "./ImageGrid";
import ImagePost from "./ImagePost";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdTableRows } from "react-icons/md"

interface PostViewPickerParams {
  posts: PostInfoInterface[]
}

export default function PostViewPicker ({ posts }: PostViewPickerParams) {

  const [ showGridView, setGridView ] = useState(false)

  const content = showGridView ? (
    <ImageGrid posts={posts} />
  ) : (
    <div className="grid grid-cols-5 gap-2">
      { posts.map((post: PostInfoInterface, i: number) => {
        return (
          <div key={i} className="col-span-5 lg:col-span-3 lg:col-start-2">
            <ImagePost postInfo={ post } />
          </div>
        )
      }) }
    </div>
  )

  return (
    <>
      <button onClick={() => setGridView(!showGridView)} className={`fixed top-0 right-0 z-50 px-5 py-2 mt-4 mr-5 `}>
        { showGridView ? <MdTableRows /> : <BsFillGrid3X3GapFill /> }
      </button>
      { content }
    </>
  )
}