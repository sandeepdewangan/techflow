import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
};

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  const Content = (
    <>
      <Badge className="bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-400 px-2 py-1 rounded-lg">
        {name}
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close"
            onClick={handleRemove}
            className="object-contain invert-0 dark:invert ml-1"
          />
        )}
      </Badge>
      {showCount && <p className="font-semibold text-sm">{questions}</p>}
    </>
  );

  if (compact) {
    return isButton ? (
      <button onClick={(e) => handleClick(e)}>{Content}</button>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between uppercase">
        {Content}
      </Link>
    );
  }
};

export default TagCard;
