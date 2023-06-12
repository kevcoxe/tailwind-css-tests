
const Bar = () => {
  return (
    <div className="h-3 min-w-full col-span-4 p-1 grow bg-slate-200 rounded-xl"></div>
  )
}

const RowOfBars = (params: { numBars: number }) => {
  const { numBars } = params

  const bars = Array.from({length: numBars}, (v, i) => i).map((_, index) => {
    return <Bar key={index} />
  })

  return (
    <>
      { bars }
    </>
  )
}


export default function Skelenton() {
  return (
    <div className="flex rounded-lg shadow-md ">
      <div className="grid w-full grid-cols-4 p-4 my-4 space-x-3 space-y-2 transition animate-pulse h-1/3">
        <div className="flex justify-center col-span-1">
          <div className="w-16 h-16 p-5 rounded-full bg-slate-200"></div>
        </div>
        <div className="grid grid-cols-4 col-span-3 space-y-2">
          <RowOfBars numBars={3} />
        </div>
        <div className="grid grid-cols-4 col-span-4 space-y-2">
          <RowOfBars numBars={3} />
        </div>
      </div>
    </div>
  )
}