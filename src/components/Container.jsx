
export default function Container({children}) {
  return (
    <div
      className='
        px-4
        md:px-8
        lg:px-12
        w-full
      '
    >
      {children}
    </div>
  )
}
