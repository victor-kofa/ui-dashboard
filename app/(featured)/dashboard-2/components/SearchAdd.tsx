import { SearchIcon } from "@/app/shared/components/SearchIcon";
import { SEARCH } from "@/app/shared/constants/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SearchAdd() {
  return (
    <header className=" font-sans mb-[24px] w-full">
      <div className="flex justify-between gap-[812px] items-center w-full">
        <div className="">
          <div className="pt-5 relative">
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

        <div className="items-center mt-5 flex">
          <Button
            // h-[38px] w-[152px] top-[88px] left-[133px] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[14px] gap-[8px]
            className="bg-[#FFA600] font-sans text-sm capitalize  py-5  hover:transform hover:duration-500"
            variant={"outline"}
          >
            + add new riders
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SearchAdd;
