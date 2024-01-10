import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import './App.css'
import Authorize from "./components/Authorize"
import { SelectPullRequest } from "./components/SelectPullRequest"
import { SelectRepo } from "./components/SelectRepo"
import { useAtom } from "jotai"
import { authorize, isNextDisabled } from "./store/JotaiStore"
function App() {
  const [authenticated,] = useAtom(authorize)
  const [nextDisabled,] = useAtom(isNextDisabled)
  return (
    <main className="p-8">
      <div className="flex flex-col items-center space-y-4 bg-gradient-to-b">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-lg"
        >
          <CarouselContent className="-mt-1 max-h-96">
            <CarouselItem key={'authorize'} className="pt-1 md:basis-1/2 p-4">
              <Authorize />
            </CarouselItem>
            <CarouselItem key={'repository'} className="pt-1 md:basis-1/2 p-4">
              <SelectRepo />
            </CarouselItem>
            <CarouselItem key={'pull request'} className="pt-1 md:basis-1/2 p-4">
              <SelectPullRequest />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="border-2 border-solid border-black" />
          <CarouselNext className={`border-2 border-solid ${nextDisabled ? 'border-gray-400' : 'border-black'}`}
            disabled={nextDisabled} />
        </Carousel>
      </div>
    </main>
  )
}

export default App
