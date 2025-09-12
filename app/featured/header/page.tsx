import { SearchIcon } from "@/app/shared/components/SearchIcon";
import { SEARCH } from "@/app/shared/constants/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Header() {
  return (
    <header className="container mx-auto font-sans md:w-[700px] lg:w-[1685px] h-[64px] mb-[1.5px]">
      <div className=" container mx-auto mt-9  flex justify-center space-x-[48rem] items-center">
        <div className="p-4 flex justify-between items-center mt-16 border-0 border-[#E7E8E9]">
          <div className="ml-5 pt-5 relative">
            {/* Search Icon inside field */}
            <SearchIcon
              iconHeight={15}
              iconWidth={15}
              className="absolute left-3 top-1/2 mt-3 -translate-y-1/2 text-gray-400"
              path={SEARCH}
              alt="search"
            />

            {/* Input field*/}
            <Input
              type="text"
              placeholder="Search for riders..."
              className="pl-10 w-[280px] py-2"
            />
          </div>
        </div>

        <div className="p-4 mt-16">
          <Button
            // h-[38px] w-[152px] top-[88px] left-[133px] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[14px] gap-[8px]
            className="bg-[#FFA600] font-sans text-sm capitalize px-4 py-5 mt-5 hover:transform hover:duration-500"
            variant={"outline"}
          >
            + add new riders
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
