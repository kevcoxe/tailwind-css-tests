import { ProfileInfoInterface, PostInfoInterface } from "@/types/myTypes";
import { Profiles, Posts } from "@/data/data";

export function getProfiles (): ProfileInfoInterface[] {
  return Profiles
}

export function getProfileWithId (id: string): ProfileInfoInterface|null {
  const matchedProfiles = Profiles.filter((profile: ProfileInfoInterface) => {
    return profile.id === id
  })

  if (matchedProfiles) return matchedProfiles[0]

  return null
}

export function getPosts (): PostInfoInterface[] {
  return Posts
}

export function getPostWithId (id: string): PostInfoInterface|null {
  const matchedPosts = Posts.filter((post: PostInfoInterface) => {
    return post.id === id
  })

  if (matchedPosts) return matchedPosts[0]

  return null
}

export function getPostsWithProfileId (profileId: string): PostInfoInterface[] {
  return Posts.filter((post) => {
    return post.profileId === profileId
  })
}