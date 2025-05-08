"use client";

import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = async () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateQuestion)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Question Title<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Be specific and ask question like you are asking to real person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel>
                Question Description<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Be detailed in providing the content which can be in the form of
                text, code, image links etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel>
                Tags<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input {...field} className="mb-2" />
                  Tags
                </div>
              </FormControl>
              <FormDescription>
                Enter tag which best describe your question. You can add upto 3
                tags.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex mt-8 justify-end">
          <Button className="bg-primary-gradient">Ask a Question</Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
