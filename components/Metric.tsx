import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  value: string | number;
  href?: string;
  styles: string;
  titleStyle: string;
  valueStyle: string;
  isAuthor?: boolean;
}

const Metric = ({
  image,
  title,
  value,
  styles,
  titleStyle,
  valueStyle,
  href,
  isAuthor,
}: Props) => {
  const content = (
    <div className={styles}>
      <Image
        src={image}
        width={25}
        height={25}
        alt="Image"
        className="square rounded-full"
      />
      <span className={valueStyle}>{value}</span>
      <span className={cn(isAuthor && "max-md:hidden", titleStyle)}>
        {title}
      </span>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : <>{content}</>;
};

export default Metric;
