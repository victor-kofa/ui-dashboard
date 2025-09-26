import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon } from "@/app/shared/components/CheckIcon";
import {
  CHECKBOX,
  GREENCHECK,
  LASTSWAP,
  MOREACTIONS,
  PLUSMINUS,
  REDCLOSE,
  RIDER,
  TABLEPHONE,
} from "@/app/shared/constants/images";
import { TablePhoneIcon } from "@/app/shared/components/TablePhoneIcon";
import { LastSwap } from "@/app/shared/components/LastSwap";
import { GreenCheckIcon } from "@/app/shared/components/GreenCheckIcon";
import { PlusMinusIcon } from "@/app/shared/components/PlusMinusIcon";
import { MoreActionsIcon } from "@/app/shared/components/MoreActionsIcon";
import { RedCloseIcon } from "@/app/shared/components/RedCloseIcon";
import { RowRiderIconTable } from "@/app/shared/components/RowRiderImage";

export default function DashboardTable() {
  return (
    <div className="w-full border-[1px] rounded-2xl text-[#101820] font-sans">
      <Table className="capitalize table-fixed bg-[#FAFBFB] rounded-2xl">
        {/* Header */}
        <TableHeader>
          <TableRow className="border-b-2">
            <TableHead className="h-[42px] w-[94px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
              <div className="flex items-center gap-1">
                <span className="w-[48px] h-[18px] font-medium text-[13px] leading-[18px] text-[#101820] tracking-normal">
                  Access
                </span>
                <CheckIcon
                  iconHeight={16}
                  iconWidth={16}
                  alt="logo"
                  path={CHECKBOX}
                  className=""
                />
              </div>
            </TableHead>
            <TableHead className="text-left">
              <div className="flex items-center w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <span className="text-[13px] w-[45px] h-[18px] leading-[18px] font-medium">
                  rider
                </span>
                <RowRiderIconTable
                  iconHeight={14}
                  iconWidth={14}
                  path={RIDER}
                  alt="rider"
                  className=""
                />
              </div>
            </TableHead>
            <TableHead className="text-left">
              <div className="flex items-center gap-8 w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <span className="text-[13px] w-[80px] h-[18px] leading-[18px] font-medium">
                  Phone Number
                </span>
                <TablePhoneIcon
                  iconHeight={12}
                  iconWidth={15}
                  alt="phone"
                  path={TABLEPHONE}
                  className=""
                />
              </div>
            </TableHead>
            <TableHead className="text-left">
              <div className="flex items-center w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <span className="text-[13px] w-[80px] h-[18px] leading-[18px] font-medium">
                  Last Swap
                </span>
                <LastSwap
                  iconHeight={12}
                  iconWidth={15}
                  alt="last swap"
                  path={LASTSWAP}
                  className=""
                />
              </div>
            </TableHead>
            <TableHead className="w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] text-left">
              <span className="text-[13px] w-[112px] h-[18px] leading-[18px] font-medium">
                Remaining Quota
              </span>
            </TableHead>
            <TableHead className="flex justify-end">
              <div className="h-[42px] w-[42px] flex items-center justify-end pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <MoreActionsIcon
                  iconHeight={50}
                  iconWidth={50}
                  alt="more actions"
                  path={MOREACTIONS}
                  className=""
                />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Body with multiple rows */}
        <TableBody>
          {/* Row 1 */}
          <TableRow className="border-b odd:bg-white even:bg-gray-50">
            <TableCell className="px-4 py-3 text-green-700">
              <span className="flex items-center gap-2 text-[13px] leading-[18px] font-medium">
                Yes{" "}
                <GreenCheckIcon
                  iconHeight={14}
                  iconWidth={14}
                  alt="green check"
                  path={GREENCHECK}
                  className=""
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              James Anderson
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              +233 50 111 0000
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              <span className="flex items-center gap-2">
                8{" "}
                <PlusMinusIcon
                  iconHeight={40}
                  iconWidth={40}
                  alt="plus minus"
                  path={PLUSMINUS}
                  className=""
                />
              </span>
            </TableCell>
            <TableCell className="flex justify-end">
              <div className="h-[42px] w-[42px] flex items-center justify-end pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <MoreActionsIcon
                  iconHeight={50}
                  iconWidth={50}
                  alt="more actions"
                  path={MOREACTIONS}
                  className=""
                />
              </div>
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow className="border-b odd:bg-white even:bg-gray-50">
            <TableCell className="px-4 py-3 text-red-600">
              <span className="flex items-center gap-2 text-[13px] leading-[18px] font-medium">
                No{" "}
                <RedCloseIcon
                  iconHeight={14}
                  iconWidth={14}
                  alt="red close"
                  path={REDCLOSE}
                  className=""
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              James Anderson
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              +233 50 111 0000
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              <span className="flex items-center gap-2">
                8{" "}
                <PlusMinusIcon
                  iconHeight={40}
                  iconWidth={40}
                  alt="plus minus"
                  path={PLUSMINUS}
                  className=""
                />
              </span>
            </TableCell>
            <TableCell className="flex justify-end">
              <div className="h-[42px] w-[42px] flex items-center justify-end pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <MoreActionsIcon
                  iconHeight={50}
                  iconWidth={50}
                  alt="more actions"
                  path={MOREACTIONS}
                  className=""
                />
              </div>
            </TableCell>
          </TableRow>

          {/* Row 3 */}
          <TableRow className="border-b odd:bg-white even:bg-gray-50">
            <TableCell className="px-4 py-3 text-green-700">
              <span className="flex items-center gap-2 text-[13px] leading-[18px] font-medium">
                Yes{" "}
                <GreenCheckIcon
                  iconHeight={14}
                  iconWidth={14}
                  alt="green check"
                  path={GREENCHECK}
                  className=""
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              James Anderson
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              +233 50 111 0000
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="px-4 py-3 text-[13px] leading-[18px] font-medium">
              <span className="flex items-center gap-2">
                8{" "}
                <PlusMinusIcon
                  iconHeight={40}
                  iconWidth={40}
                  alt="plus minus"
                  path={PLUSMINUS}
                  className=""
                />
              </span>
            </TableCell>
            <TableCell className="flex justify-end">
              <div className="h-[42px] w-[42px] flex items-center justify-end pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
                <MoreActionsIcon
                  iconHeight={50}
                  iconWidth={50}
                  alt="more actions"
                  path={MOREACTIONS}
                  className=""
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

// <div className="w-full border-[1px]  rounded-2xl text-[#101820] font-sans">
//   <Table className="capitalize table-fixed bg-[#FAFBFB]  rounded-2xl">
//     {/* Header */}
//     <TableHeader className="">
//       <TableRow className="border-b-2">
//         <TableHead className="h-[42px] w-[94px] opacity-[1px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
//           <div className="flex items-center gap-1">
//             <span className="w-[48px] h-[18px] font-medium text-[13px] leading-[18px] text-[#101820] tracking-normal">
//               Access
//             </span>
//             <CheckIcon
//               iconHeight={16}
//               iconWidth={16}
//               alt="logo"
//               path={CHECKBOX}
//               className=""
//             />
//           </div>
//         </TableHead>
//         <TableHead className="text-left">
//           <div className="flex items-center gap-0 w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
//             <span className="text-[13px] w-[45px] h-[18px] leading-[18px] font-medium">
//               rider
//             </span>
//             <RowRiderIconTable
//               iconHeight={14}
//               iconWidth={14}
//               className=""
//               path={RIDER}
//               alt="rider"
//             />
//           </div>
//         </TableHead>
//         <TableHead className="text-left">
//           <div className="flex items-center gap-8 w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
//             <span className="text-[13px] w-[80px] h-[18px] leading-[18px] font-medium">
//               Phone Number
//             </span>
//             <TablePhoneIcon
//               iconHeight={12}
//               iconWidth={15}
//               alt="phone"
//               className=""
//               path={TABLEPHONE}
//             />
//           </div>
//         </TableHead>
//         <TableHead className="text-left">
//           <div className="flex items-center gap-0 w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px]">
//             <span className="text-[13px] w-[80px] h-[18px] leading-[18px] font-medium">
//               Last Swap
//             </span>
//             <LastSwap
//               iconHeight={12}
//               iconWidth={15}
//               alt="last swap"
//               className=""
//               path={LASTSWAP}
//             />
//           </div>
//         </TableHead>
//         <TableHead className="w-[266.5px] h-[42px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] text-left">
//           <span className="text-[13px] w-[112px] h-[18px] leading-[18px] font-medium">
//             Remaining Quota
//           </span>
//         </TableHead>

//         <TableCell className="flex justify-end">
//           <div className="h-[42px] w-[42px] gap-6 opacity-[1px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] flex items-center">
//             <MoreActionsIcon
//               iconHeight={50}
//               iconWidth={50}
//               alt="more actions"
//               className=""
//               path={MOREACTIONS}
//             />
//           </div>
//         </TableCell>
//       </TableRow>
//     </TableHeader>

//     {/* Row 1 */}
//     <TableBody className="border-b">
//       <TableRow className="border-b">
//         <TableCell className="px-4 py-3 text-green-700">
//           <span className="flex items-center gap-2 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//             Yes{" "}
//             <GreenCheckIcon
//               iconHeight={14}
//               iconWidth={14}
//               alt="green check"
//               className=""
//               path={GREENCHECK}
//             />
//           </span>
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           James Anderson
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           +233 50 111 0000
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           Sept. 10, 2025 • 12:07 PM
//         </TableCell>
//         <TableCell className="px-4 py-3">
//           <span className="flex items-center gap-2 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//             8{" "}
//             <PlusMinusIcon
//               iconHeight={40}
//               iconWidth={40}
//               alt="plus minus"
//               className=""
//               path={PLUSMINUS}
//             />
//           </span>
//         </TableCell>
//         <TableCell className=" flex justify-end">
//           <div className="  h-[42px] w-[42px] gap-6 opacity-[1px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] flex items-center">
//             <MoreActionsIcon
//               iconHeight={50}
//               iconWidth={50}
//               alt="more actions"
//               className=""
//               path={MOREACTIONS}
//             />
//           </div>
//         </TableCell>
//       </TableRow>
//     </TableBody>

//     {/* Row 2 */}
//     <TableBody className="border-b">
//       <TableRow className="border-b">
//         <TableCell className="px-4 py-3 text-red-600">
//           <span className="flex items-center gap-2 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//             No{" "}
//             <RedCloseIcon
//               iconHeight={14}
//               iconWidth={14}
//               alt="red close"
//               className=""
//               path={REDCLOSE}
//             />
//           </span>
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           James Anderson
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           +233 50 111 0000
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           Sept. 10, 2025 • 12:07 PM
//         </TableCell>

//         <TableCell className="px-4 py-3">
//           <span className="flex items-center gap-2 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//             8{" "}
//             <PlusMinusIcon
//               alt="plus minus"
//               className=""
//               iconHeight={40}
//               iconWidth={40}
//               path={PLUSMINUS}
//             />
//           </span>
//         </TableCell>
//         <TableCell className=" flex justify-end">
//           <div className="  h-[42px] w-[42px] gap-6 opacity-[1px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] flex items-center">
//             <MoreActionsIcon
//               iconHeight={50}
//               iconWidth={50}
//               alt="more actions"
//               className=""
//               path={MOREACTIONS}
//             />
//           </div>
//         </TableCell>
//       </TableRow>
//     </TableBody>

//     {/* Row 3 */}
//     <TableBody>
//       <TableRow className="border-b">
//         <TableCell className="px-4 py-3 text-green-700">
//           <span className="flex items-center gap-2 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//             Yes{" "}
//             <GreenCheckIcon
//               alt="green check"
//               className=""
//               iconHeight={14}
//               iconWidth={14}
//               path={GREENCHECK}
//             />
//           </span>
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           James Anderson
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           +233 50 111 0000
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           Sept. 10, 2025 • 12:07 PM
//         </TableCell>
//         <TableCell className="px-4 py-3 text-[13px] w-[80px] h-[18px] leading-[18px] font-medium]">
//           <span className="flex items-center gap-2">
//             8{" "}
//             <PlusMinusIcon
//               iconHeight={40}
//               alt="plus minus"
//               className=""
//               iconWidth={40}
//               path={PLUSMINUS}
//             />
//           </span>
//         </TableCell>
//         <TableCell className=" flex justify-end">
//           <div className="  h-[42px] w-[42px] gap-6 opacity-[1px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] flex items-center">
//             <MoreActionsIcon
//               iconHeight={50}
//               iconWidth={50}
//               alt="more actions"
//               className=""
//               path={MOREACTIONS}
//             />
//           </div>
//         </TableCell>
//       </TableRow>
//     </TableBody>
//   </Table>
// </div>
