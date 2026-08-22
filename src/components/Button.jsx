
export default function Button({label, action}) {
  return (
    <a
      className="
        px-6
        py-4
        rounded-full
        bg-[#c5ae77]
        text-black
        cursor-pointer
        w-38
        hover:opacity-90
        transition-colors
        font-bold
        tracking-wide
        block
        text-center
        text-sm
      "
      href={action}
    >
      {label}
    </a>
  )
}
