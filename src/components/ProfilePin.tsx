import ProfileCircle from "./ProfileCircle"

export default function ProfilePin (params: { profileName: string, location ?: string, profilePic: string}) {

  const { profileName, location, profilePic } = params

  return (
    <div className="flex items-center">
      <ProfileCircle
        size="sm"
        newStory={true}
        profilePic={profilePic}
      />
      <div className="flex-row h-full">
        <strong className="text-2xl font-extrabold">{ profileName }</strong>
        <div className="flex">
          <span>{ location }</span>
        </div>
      </div>
    </div>
  )
}