import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AccessIcon } from "@/app/shared/components/AccessIcon";
import { CheckIcon } from "@/app/shared/components/CheckIcon";
import {
  ACCESS,
  CHECKBOX,
  GREENCHECK,
  LASTSWAP,
  MOREACTIONS,
  PLUSMINUS,
  REDCLOSE,
  TABLEPHONE,
} from "@/app/shared/constants/images";
import { TablePhoneIcon } from "@/app/shared/components/TablePhoneIcon";
import { LastSwap } from "@/app/shared/components/LastSwap";
import { GreenCheckIcon } from "@/app/shared/components/GreenCheckIcon";
import { PlusMinusIcon } from "@/app/shared/components/PlusMinusIcon";
import { MoreActionsIcon } from "@/app/shared/components/MoreActionsIcon";
import { RedCloseIcon } from "@/app/shared/components/RedCloseIcon";

export default function DashboardTable() {
  return (
    <div className="w-full">
      <Table className="capitalize font-sans w-full table-fixed border">
        <TableHeader>
          <TableRow className="border-b-2">
            <TableHead className="px-4 py-3 text-center">
              <div className="flex justify-center items-center gap-2">
                <AccessIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="logo"
                  path={ACCESS}
                  className=""
                />
                <CheckIcon
                  iconHeight={14}
                  alt="logo"
                  path={CHECKBOX}
                  className=""
                  iconWidth={14}
                />
              </div>
            </TableHead>
            <TableHead className="px-4 py-3 text-left">Riders</TableHead>
            <TableHead className="px-4 py-3 text-left">
              <div className="flex items-center gap-2">
                Phone Number
                <TablePhoneIcon
                  iconHeight={12}
                  iconWidth={15}
                  alt="phone"
                  className=""
                  path={TABLEPHONE}
                />
              </div>
            </TableHead>
            <TableHead className="px-4 py-3 text-left">
              <div className="flex items-center gap-2">
                Last Swap
                <LastSwap
                  iconHeight={12}
                  alt="last swap"
                  className=""
                  iconWidth={15}
                  path={LASTSWAP}
                />
              </div>
            </TableHead>
            <TableHead className="px-4 py-3 text-left">
              Remaining Quota
            </TableHead>
            <TableHead className="px-4 py-3 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Row 1 */}
        <TableBody>
          <TableRow className="border-b">
            <TableCell className="px-4 py-3 text-green-700">
              <span className="flex items-center gap-2">
                Yes{" "}
                <GreenCheckIcon
                  iconHeight={14}
                  iconWidth={14}
                  alt="green check"
                  className=""
                  path={GREENCHECK}
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">James Anderson</TableCell>
            <TableCell className="px-4 py-3">+233 50 111 0000</TableCell>
            <TableCell className="px-4 py-3">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="px-4 py-3">
              <span className="flex items-center gap-2">
                8{" "}
                <PlusMinusIcon
                  iconHeight={20}
                  iconWidth={20}
                  alt="plus minus"
                  className=""
                  path={PLUSMINUS}
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">
              <div className="flex justify-center gap-1">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
                <MoreActionsIcon
                  iconHeight={5}
                  alt="more actions"
                  className=""
                  iconWidth={5}
                  path={MOREACTIONS}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Row 2 */}
        <TableBody className="bg-gray-50">
          <TableRow className="border-b">
            <TableCell className="px-4 py-3 text-red-600">
              <span className="flex items-center gap-2">
                No{" "}
                <RedCloseIcon
                  iconHeight={14}
                  alt="red close"
                  className=""
                  iconWidth={14}
                  path={REDCLOSE}
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">James Anderson</TableCell>
            <TableCell className="px-4 py-3">+233 50 111 0000</TableCell>
            <TableCell className="px-4 py-3">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="px-4 py-3">
              <span className="flex items-center gap-2">
                8{" "}
                <PlusMinusIcon
                  alt="plus minus"
                  className=""
                  iconHeight={20}
                  iconWidth={20}
                  path={PLUSMINUS}
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">
              <div className="flex justify-center gap-1">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
                <MoreActionsIcon
                  alt="more actions"
                  className=""
                  iconHeight={5}
                  iconWidth={5}
                  path={MOREACTIONS}
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>

        {/* Row 3 */}
        <TableBody>
          <TableRow className="border-b">
            <TableCell className="px-4 py-3 text-green-700">
              <span className="flex items-center gap-2">
                Yes{" "}
                <GreenCheckIcon
                  alt="green check"
                  className=""
                  iconHeight={14}
                  iconWidth={14}
                  path={GREENCHECK}
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">James Anderson</TableCell>
            <TableCell className="px-4 py-3">+233 50 111 0000</TableCell>
            <TableCell className="px-4 py-3">
              Sept. 10, 2025 • 12:07 PM
            </TableCell>
            <TableCell className="px-4 py-3">
              <span className="flex items-center gap-2">
                8{" "}
                <PlusMinusIcon
                  iconHeight={20}
                  alt="plus minus"
                  className=""
                  iconWidth={20}
                  path={PLUSMINUS}
                />
              </span>
            </TableCell>
            <TableCell className="px-4 py-3">
              <div className="flex justify-center gap-1">
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
                <MoreActionsIcon
                  iconHeight={5}
                  iconWidth={5}
                  alt="more actions"
                  className=""
                  path={MOREACTIONS}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
