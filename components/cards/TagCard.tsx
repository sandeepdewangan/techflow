import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between uppercase">
      <Badge className="bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-400 px-2 py-1 rounded-lg">
        {name}
      </Badge>
      {showCount && <p className="font-semibold text-sm">{questions}</p>}
    </Link>
  );
};

export default TagCard;
