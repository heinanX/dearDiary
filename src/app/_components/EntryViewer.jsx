"use client";
import { format, isSameDay } from "date-fns";
import { useState } from "react";
import Calendar from "./Calender/Calendar";

const EntryViewer = ({ posts }) => {
  const [date, setDate] = useState(format(Date.now(), "yyyy-MM-dd"));
  const filteredPosts =
    posts.filter((post) => isSameDay(format(post.date, "yyyy-MM-dd"), date)) ||
    [];

    const noEntriesMsg = () => {
      let message;
      if (format(date,  "yyyy-MM-dd") === format(Date.now(), "yyyy-MM-dd")) {
        message = "Why don't you write about your day :3"
      } else if (format(date,  "yyyy-MM-dd") < format(Date.now(), "yyyy-MM-dd")) {
        message = "Sorry, no entries written this day :("
      } else {
        message = "Sorry, you can't write an entry just yet :)"
      }
      return message;
    }

  return (
    <article className="flex flex-col w-full lg:max-h-screen lg:flex-row">
      <section className="w-full p-4 lg:w-1/2">
        <Calendar date={date} setDate={setDate} posts={posts} />
      </section>

      <section
        id="2"
        className="w-full lg:w-1/2 p-2 overflow-y-auto lg:max-h-[512px] scrollbar"
      >
        {filteredPosts.length > 0 ? (
          <ul className="flex flex-col gap-2 pt-6 space-y-6">
            {filteredPosts.map((post, index) => (
              <li
                key={index}
                className="px-6 py-2 text-white rounded-lg bg-lighterPurple"
              >
                <p className="pr-2 mb-2 text-xs font-bold text-right ">
                  {format(post.date, "yyyy-MM-dd")}
                </p>
                <p className="pb-2">{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="pt-16 pl-4">{noEntriesMsg()}</p>
        )}
      </section>
    </article>
  );
};

export default EntryViewer;
