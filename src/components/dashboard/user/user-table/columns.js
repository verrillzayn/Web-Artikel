"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

export const columns = [
  {
    id: "number",
    header: "No",
    cell: ({ row }) => {
      return <p>{row.index + 1}</p>;
    },
  },

  {
    accessorKey: "name",
    header: "User",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex flex-row gap-2">
          <div className="rounded-full w-9 h-9 relative cursor-pointer">
            <Image
              src={data.img}
              alt="User's Image Profile"
              fill
              sizes="40px"
              className="mt-0.5 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p>{data.name}</p>
            <p className="text-gray-600">{data.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "date",
    header: "Created",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="w-fit">
          <Button onClick={() => console.log(row)}>
            <Pencil className="h-4 w-4" />
          </Button>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];
