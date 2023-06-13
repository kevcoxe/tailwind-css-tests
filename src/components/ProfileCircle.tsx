import Image from "next/image"

export default function ProfileCircle (params: { profilePic: string, size?: string, newStory ?: boolean }) {

  const { newStory = false, profilePic } = params
  const storyNotifier = newStory ? "bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" : ""

  const { size = "lg" } = params
  let outerCircleDimensions
  let innerCircleDimensions

  switch (size) {
    case "lg":
      outerCircleDimensions = "w-32 h-32"
      innerCircleDimensions = "w-28 h-28"
      break;

    case "md":
      outerCircleDimensions = "w-24 h-24"
      innerCircleDimensions = "w-20 h-20"
      break;

    case "sm":
      outerCircleDimensions = "w-16 h-16"
      innerCircleDimensions = "w-14 h-14"
      break;

    default:
      outerCircleDimensions = "w-24 h-24"
      innerCircleDimensions = "w-20 h-20"
      break;
  }

  return (
    <div className={`flex ${ outerCircleDimensions } rounded-full ${ storyNotifier } justify-center items-center m-3`}>
      <div className={`overflow-hidden bg-gray-500 border-2 border-white rounded-full ${ innerCircleDimensions }`}>
        <Image
          src={ profilePic }
          alt="Picture of the author"
          width={50}
          height={50}
          className={`object-cover object-center rounded-full ${ innerCircleDimensions }`} 
        />
      </div>
    </div>
  )
}