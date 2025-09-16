import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon } from "./CheckIcon";
import {
  ACCESS,
  CHECKBOX,
  GREENCHECK,
  LASTSWAP,
  MOREACTIONS,
  PLUSMINUS,
  REDCLOSE,
  RIDER,
  RIDERHEADING,
  TABLEPHONE,
} from "../constants/images";
import { AccessIcon } from "./AccessIcon";
import { RiderTableImage } from "./RiderTableRowIcon";
import { RowRiderIconTable } from "./RowRiderImage";
import { TablePhoneIcon } from "./TablePhoneIcon";
import { LastSwap } from "./LastSwap";
import { MoreActionsIcon } from "./MoreActionsIcon";
import { GreenCheckIcon } from "./GreenCheckIcon";
import { RedCloseIcon } from "./RedCloseIcon";
import { PlusMinusIcon } from "./PlusMinusIcon";

export default function DashboardTable() {
  return (
    <div className="">
      <Table className="capitalize font-sans">
        <TableHeader className="tableRowHeader">
          <TableRow className=" border-b-2">
            <TableHead>
              <div className="flex justify-center items-center mr-[3rem] gap-2">
                <AccessIcon
                  iconHeight={40}
                  iconWidth={40}
                  className="accessIcon"
                  path={ACCESS}
                  alt="access"
                />
                <CheckIcon
                  iconHeight={14}
                  iconWidth={14}
                  className="checkBox"
                  path={CHECKBOX}
                  alt="checkbox"
                />
              </div>
            </TableHead>

            <TableHead className="">
              <div className="flex items-center gap-1 ">
                <RiderTableImage
                  iconHeight={30}
                  iconWidth={30}
                  className="text-normal font-normal"
                  path={RIDERHEADING}
                  alt={"rider"}
                />

                <RowRiderIconTable
                  iconHeight={14}
                  iconWidth={14}
                  className=""
                  path={RIDER}
                  alt="rider"
                />
              </div>
            </TableHead>

            <TableHead>
              <div className="flex items-center gap-1  p-5 phoneNumberBox">
                <span className="text-[#101820]">phone number</span>

                <TablePhoneIcon
                  iconHeight={10}
                  iconWidth={15}
                  className="text-[#585E63] phoneIcon"
                  path={TABLEPHONE}
                  alt="phone"
                />
              </div>
            </TableHead>

            <TableHead className="">
              <div className="lastSwap flex items-center gap-1  p-5 ">
                <span className="">last swap</span>

                <LastSwap
                  iconHeight={10}
                  iconWidth={15}
                  className="lastSwapIcon text-[#585E63]"
                  path={LASTSWAP}
                  alt="last swap"
                />
              </div>
            </TableHead>

            <TableHead>
              <div className="remainingQuota flex items-center gap-1  p-5">
                <span className="">remaining quota</span>
              </div>
            </TableHead>

            <TableHead>
              <div className="flex items-center  ">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />

                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="border-b-2">
          <TableRow className="nameFieldsRow">
            <TableCell className="px-4 py-3">
              <span className="flex items-center gap-2 text-green-700">
                yes
                <GreenCheckIcon
                  iconHeight={14}
                  iconWidth={14}
                  className=""
                  path={GREENCHECK}
                  alt="checkbox"
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">james anderson</TableCell>
            <TableCell className=" px-4 py-3">+233 50 111 0000</TableCell>
            <TableCell className="text- px-4 py-3">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="text- px-4 py-3">
              <span className="flex items-center gap-2">
                8
                <PlusMinusIcon
                  iconHeight={30}
                  iconWidth={30}
                  className="plusAndMinus"
                  path={PLUSMINUS}
                  alt=""
                />
              </span>
            </TableCell>

            <TableCell className="text- px-4 py-3">
              <div className="flex items-center ">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />

                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableBody className="bg-gray-50 border-b-2">
          <TableRow className="nameFieldsRow">
            <TableCell className="font-medium px-4 py-3">
              <span className="flex items-center gap-2 text-red-600">
                no
                <RedCloseIcon
                  iconHeight={14}
                  iconWidth={14}
                  className=""
                  path={REDCLOSE}
                  alt="checkbox"
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">james anderson</TableCell>
            <TableCell className="px-4 py-3">+233 50 111 0000</TableCell>
            <TableCell className="text- px-4 py-3">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="text- px-4 py-3">
              <span className="flex items-center gap-2">
                8
                <PlusMinusIcon
                  iconHeight={30}
                  iconWidth={30}
                  className="plusAndMinus"
                  path={PLUSMINUS}
                  alt=""
                />
              </span>
            </TableCell>

            <TableCell className="text- px-4 py-3">
              <div className="flex items-center  ">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />

                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableBody className="border-b-2">
          <TableRow className="nameFieldsRow">
            <TableCell className="font-medium  px-4 py-3">
              <span className="flex items-center gap-2 text-green-700">
                yes
                <GreenCheckIcon
                  iconHeight={14}
                  iconWidth={14}
                  className=""
                  path={GREENCHECK}
                  alt="checkbox"
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">james anderson</TableCell>
            <TableCell className="px-4 py-3">+233 50 111 0000</TableCell>
            <TableCell className="text- px-4 py-3">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="text- px-4 py-3">
              <span className="flex items-center gap-2">
                8
                <PlusMinusIcon
                  iconHeight={30}
                  iconWidth={30}
                  className="plusAndMinus"
                  path={PLUSMINUS}
                  alt=""
                />
              </span>
            </TableCell>

            <TableCell className="text- px-4 py-3">
              <div className="flex items-center  ">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />

                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  className=" text-[#585E63]"
                  path={MOREACTIONS}
                  alt="last swap"
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
