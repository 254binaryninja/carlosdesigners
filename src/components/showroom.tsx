import { cardItems } from "@/constants"

const Showroom = () => {
  return (
    <section className="flex flex-row px-10 max-sm:flex-col max-sm:px-0 max-sm:gap-5 gap-5">
       {cardItems.map((item,i) => (
        <div key={i} className="flex flex-col gap-">
          <div className="rounded-lg p-5 m-7 hover:mt-20 hover:bg-gray-200 h-60">
            <div className="hover:mb-5 p-7 z-10">
            <p className="text-2xl text-black font-semibold">{item.content}</p>
              <img
               src={item.image}
               alt={item.content}
               className="h-50 w-60"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Showroom
