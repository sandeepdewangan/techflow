import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const topQuestions = [
  {
    _id: 1,
    title: "What is Python?",
  },
  {
    _id: 2,
    title: "What is NextJs and how it is different from ReactJs?",
  },
  {
    _id: 3,
    title: "Explain state management in Java?",
  },
  {
    _id: 4,
    title: "What the TechFlow does? Who is the CEO of this company?",
  },
  {
    _id: 5,
    title: "Javascript or TypeScript which one is better?",
  },
];

const popularTags = [
  { _id: "1", name: "react", question: 100 },
  { _id: "2", name: "javascript", question: 500 },
  { _id: "3", name: "python", question: 250 },
  { _id: "4", name: "java", question: 50 },
];

const RightSidebar = () => {
  return (
    <div className="flex flex-col bg-lightbg dark:bg-darkbg p-5 gap-5 w-[300px] max-lg:hidden ml-auto basis-[30%]">
      <h1 className="font-bold ">Top Questions</h1>
      {topQuestions.map(({ _id, title }) => (
        <div key={_id}>
          <Link href="/" className="flex justify-between">
            <p className="text-sm">{title}</p>
            <Image
              src="/icons/chevron-right.svg"
              height={20}
              width={20}
              alt="Chvron right"
            />
          </Link>
        </div>
      ))}

      <h1 className="font-bold pt-5">Tags</h1>

      {popularTags.map(({ _id, name, question }) => (
        <TagCard
          key={_id}
          _id={_id}
          name={name}
          questions={question}
          showCount
          compact
        />
      ))}
    </div>
  );
};

export default RightSidebar;
