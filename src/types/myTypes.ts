
export interface CommentInfoInterface {
  profileName: string
  content: string
  datePosted: string
}

export interface ProfileInfoInterface {
  id: string
  profileName: string
  profileLocation: string
  profilePic: string
  description: string
}

export interface PostInfoInterface {
  id: string
  profileId: string
  imageLocation: string
  description: string
  views: string
  comments: CommentInfoInterface[]
  datePosted: string
}

