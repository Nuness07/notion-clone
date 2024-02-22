import Image from 'next/image'

export const Heroes = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center ">
      <div className="item-center flex">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            className="object-contain dark:hidden"
            src="/documents.png"
            fill
            alt="Documents"
          />
          <Image
            className="hidden object-contain dark:block"
            src="/documents-dark.png"
            fill
            alt="Documents"
          />
        </div>
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            className="object-contain dark:hidden"
            src="/reading.png"
            fill
            alt="Reading"
          />
          <Image
            className="hidden object-contain dark:block"
            src="/reading-dark.png"
            fill
            alt="Documents"
          />
        </div>
      </div>
    </div>
  )
}
