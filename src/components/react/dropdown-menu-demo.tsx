import { Button } from "@/components/react/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/react/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <div className="bg-[#a18e7a] p-6 rounded-md">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#f8e8c8] text-[#8b3e2f] border-[#e57373] border-dotted border-2 rounded-md px-4 py-2 font-medium hover:bg-[#f0dbb0] transition-colors">
            Contents
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#f8e8c8] border-[#e57373] border-dotted border-2 rounded-md shadow-md">
          <DropdownMenuLabel className="text-[#8b3e2f] font-serif">Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#8b3e2f] opacity-30" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer" onClick={() => location.href = '/misunderstood/simple/01_again'}>Again</DropdownMenuItem>
            <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">Hungry</DropdownMenuItem>
            <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">Afraid</DropdownMenuItem>
            <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">
              Reflections
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-[#8b3e2f] opacity-30" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">Honesty</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">
                More options
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-[#f8e8c8] border-[#e57373] border-dotted border-2 rounded-md shadow-md">
                  <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">
                    Necessary
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">
                    Chapter 1
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#8b3e2f] opacity-30" />
                  <DropdownMenuItem className="text-[#8b3e2f] hover:bg-[#f0dbb0] cursor-pointer">
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Additional buttons to match the style in the image */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Button className="bg-[#f8e8c8] text-[#8b3e2f] border-[#e57373] border-dotted border-2 rounded-md px-4 py-2 font-medium hover:bg-[#f0dbb0] transition-colors">
          Again
        </Button>
        <Button className="bg-[#f8e8c8] text-[#8b3e2f] border-[#e57373] border-dotted border-2 rounded-md px-4 py-2 font-medium hover:bg-[#f0dbb0] transition-colors">
          Hungry
        </Button>
        <Button className="bg-[#f8e8c8] text-[#8b3e2f] border-[#e57373] border-dotted border-2 rounded-md px-4 py-2 font-medium hover:bg-[#f0dbb0] transition-colors">
          Afraid
        </Button>
        <Button className="bg-[#f8e8c8] text-[#8b3e2f] border-[#e57373] border-dotted border-2 rounded-md px-4 py-2 font-medium hover:bg-[#f0dbb0] transition-colors">
          Reflections
        </Button>
      </div>
    </div>
  )
}

export function TestButton() {
    return (<>
        <Button variant={'default'}>TestButton</Button>
    </>);
}
