import { getTimestamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import ROUTES from "@/constants/routes";
import Metric from "../Metric";

interface Props {
  question: Question;
}

const QuestionCard = ({
  question: { _id, title, tags, author, createdAt, upvotes, answers, views },
}: Props) => {
  return (
    <div className="min-w-full block p-6 m-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <p className="text-xs text-gray-700 dark:text-gray-400 md:hidden">
        {getTimestamp(createdAt)}
      </p>
      <Link href={ROUTES.QUESTION(_id)} className="mt-1 md:mt-0">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </Link>
      <div className="flex mt-1 gap-2">
        {tags.map((tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex mt-1 justify-between">
        <Metric
          image={author.image}
          value={author.name}
          title={`• asked ${getTimestamp(createdAt)}`}
          styles="flex items-center gap-2 text-sm mt-3"
          titleStyle="text-gray-400"
          href={ROUTES.PROFILE(author._id)}
          isAuthor
        />
        <div className="flex gap-2">
          <Metric
            image="/icons/like.svg"
            title=" Votes"
            value={upvotes}
            styles="flex items-center gap-1 text-sm "
          />
          <Metric
            image="/icons/message.svg"
            title=" Answers"
            value={answers}
            styles="flex items-center gap-1 text-sm"
          />
          <Metric
            image="/icons/eye.svg"
            title=" Views"
            value={views}
            styles="flex items-center gap-1 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
