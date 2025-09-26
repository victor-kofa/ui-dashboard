import { AddIcon } from "@/app/shared/components/AddIcon";
import { SearchIcon } from "@/app/shared/components/SearchIcon";
import { ADD, SEARCH } from "@/app/shared/constants/images";
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
              className="pl-10 w-[280px] py-2 bg-gray-100"
            />
          </div>
        </div>

        <div className="items-center mt-5 flex">
          <Button
            className="bg-[#FFA600] max-h-[38px] max-w-[152px] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[14px] gap-[8px] font-sans text-sm capitalize   hover:transform hover:duration-500"
            variant={"outline"}
          >
            <AddIcon
              path={ADD}
              width={16}
              height={16}
              alt={"add"}
              className="h-[16px] w-[16px]"
            />
            <span
              className="max-w-[98px] max-h-[18px] pr-[16px] pt-[10px] pb-[10px] leading-0 tracking-[0px] font-medium text-[13px] text-[#101820]
        "
            >
              add new riders
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SearchAdd;
