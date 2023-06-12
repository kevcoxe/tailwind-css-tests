

export interface CommentInfoInterface {
  profileName: string
  content: string
  datePosted: string
}

export interface ProfileInfoInterface {
  profileName: string
  profileLocation: string
  profilePic: string
  description: string
}

export interface PostInfoInterface {
  profile: ProfileInfoInterface
  imageLocation: string
  description: string
  views: string
  comments: CommentInfoInterface[]
  datePosted: string
}

