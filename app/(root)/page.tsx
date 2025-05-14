import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "What is React?",
    description:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "Sandeep Dewangan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
    },
    upvotes: 10,
    downvtes: 50,
    views: 100,
    createdAt: new Date("1990-09-02"),
    answers: 2,
  },
  {
    _id: "2",
    title: "What is the virtual DOM?",
    description:
      "The virtual DOM is a lightweight copy of the actual DOM that React uses to efficiently update the UI.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "Sandeep Dewangan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
    },
    upvotes: 20,
    downvtes: 10,
    views: 190,
    createdAt: new Date("2021-09-02"),
    answers: 2,
  },
  {
    _id: "3",
    title: "What is an iterator in Python?",
    description:
      "An iterator is an object that contains a countable number of values.",
    tags: [{ _id: "1", name: "Python" }],
    author: {
      _id: "2",
      name: "Khushbu Dewangan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
    },
    upvotes: 100,
    downvtes: 5,
    views: 150,
    createdAt: new Date("2025-01-01"),
    answers: 2,
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home({ searchParams }: SearchParams) {
  const session = await auth();
  console.log("Session: ", session);

  const { query = "", filter = "" } = await searchParams;

  // filter the question based on query
  const filteredQuestion = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-start flex-col-reverse sm:flex-row sm:justify-between sm:items-end">
          <h1 className="text-2xl font-semibold mt-5">All Questions</h1>
          <Button
            asChild
            className="bg-primary-gradient dark:text-white w-full sm:w-fit"
          >
            <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
          </Button>
        </div>

        <section className="mt-8">
          <LocalSearch
            route="/"
            placeholder="Search your questions here..."
            otherClasses=""
          />
        </section>

        <section className="mt-8">
          <HomeFilter />
        </section>

        <section className="pt-8">
          {filteredQuestion.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </section>
      </section>
    </>
  );
}
