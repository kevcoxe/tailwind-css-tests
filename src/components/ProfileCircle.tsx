
const LG_BASE_SIZE = 32;
const MD_BASE_SIZE = 24;
const SM_BASE_SIZE = 16;

export default function ProfileCircle (params: { profilePic: string, size?: string, newStory ?: boolean }) {

  const { newStory = false, profilePic } = params
  const storyNotifier = newStory ? "bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" : ""

  const { size = "lg" } = params
  let outerCircleDimensions
  let innerCircleDimensions

  switch (size) {
    case "lg":
      outerCircleDimensions = `w-${ LG_BASE_SIZE } h-${ LG_BASE_SIZE }`
      innerCircleDimensions = `w-${ LG_BASE_SIZE - 4 } h-${ LG_BASE_SIZE - 4 }`
      break;

    case "md":
      outerCircleDimensions = `w-${ MD_BASE_SIZE } h-${ MD_BASE_SIZE }`
      innerCircleDimensions = `w-${ MD_BASE_SIZE - 4 } h-${ MD_BASE_SIZE - 4 }`
      break;

    case "sm":
      outerCircleDimensions = `w-${ SM_BASE_SIZE } h-${ SM_BASE_SIZE }`
      innerCircleDimensions = `w-${ SM_BASE_SIZE - 2 } h-${ SM_BASE_SIZE - 2 }`
      break;

    default:
      outerCircleDimensions = `w-${ MD_BASE_SIZE } h-${ MD_BASE_SIZE }`
      innerCircleDimensions = `w-${ MD_BASE_SIZE - 4 } h-${ MD_BASE_SIZE - 4 }`
      break;
  }

  return (
    <div className={`flex ${ outerCircleDimensions } rounded-full ${ storyNotifier } justify-center items-center m-3`}>
      <div className={`overflow-hidden bg-gray-500 border-2 border-white rounded-full ${ innerCircleDimensions }`}>
        <img className={`object-cover object-center rounded-full ${ innerCircleDimensions }`} src={profilePic}></img>
      </div>
    </div>
  )
}