export default function Card({ imageUrl, title }) {
  return (
    <div className="group flex flex-col space-y-4 my-4 w-full items-center text-center cursor-pointer">
      <div
        className="
          w-full
          aspect-16/10
          max-w-142.5
          rounded-2xl
          bg-white
          p-0
          group-hover:p-2
          transition-all
          duration-300
          ease-in-out
          overflow-hidden
        "
      >
        <div className="w-full h-full rounded-[10px] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-300
              ease-in-out
            "
          />
        </div>
      </div>

      <h3 className="text-xl font-normal text-white w-full max-w-142.5 text-left group-hover:text-gray-300 transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
}