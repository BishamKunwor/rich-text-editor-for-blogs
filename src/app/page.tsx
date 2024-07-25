"use client";

import { useEffect, useState } from "react";
import Editor from "../rich-text-editor/Editor";
import { compileMDX } from "next-mdx-remote/rsc";
import dayjs from "dayjs";

export default function Home() {
  const [content, setContent] = useState("");

  const [serializedContent, setSerializedContent] = useState(undefined);

  console.log(content);

  useEffect(() => {
    async function test() {
      const { content: test } = await compileMDX({ source: content });

      setSerializedContent(test);
    }

    test();
  }, [content]);

  return (
    <main className="grid grid-cols-3 gap-8 h-screen">
      <div className="">
        <Editor
          onChange={(value) => {
            setContent(value);
          }}
          defaultValue={`## 🦘 Prison break, or solving life like a developer️

When is the best time to throw away all your possessions, move to the other side of the world, and begin a completely new life of a digital nomad? In the middle of the global pandemic, obviously 😅

## The origin story

I had a vague dream of “it would be cool to move to Europe for a year or two” for a while now. I lived in Australia for 4 years by then, and while it’s an incredible country to explore, my restless brain increasingly demanded some radical changes. Covid hit right when I started seriously planning prolonged 2-3 months trips there to fulfil the need the “easy” way and shattered any possible travel plans. After one and a half years of up and down restrictions, being more and more pissed with Australian politics and its response to the pandemic, and total inability to control my life anymore, the strictest months-long lockdown in Sydney hit us just when the rest of the world started opening up. That was the last straw. In order to capture the last evaporating bits of sanity, I needed to do something now.

Hence the idea: since I can not be here anymore, and I can not just travel as I usually would, can I just relocate and live in Europe for a year? On the surface, no 😕. I’m in a completely closed country where no one gets in and no one gets out for the foreseeable future; I don’t have any legal right to live or work in Europe; my job is in Sydney and I’m not ready to give it up. Bummer.

## The Relocation Project

So I approached it the way I would deal with a massive terrifying project at work: keep the big picture at the back of your mind, but stop thinking about it. Instead, start slicing it into smaller pieces until every one of them is independent and doable with minimal effort and time.



**The project**: relocate to Europe for a year.

**MVP** (minimal viable product):

- legal right to live and work in Europe for a year
- a reliable source of income for a year
- a way to leave Australia

The complete project would also include things like: what to do with the apartment, with the car and all the things that I own; how to escape lockdown and visit friends before I leave; how to get vaccinated, and so on. But before tackling those, MVP needs to be 100% solved. So let’s do it step by step.

### 💸 A reliable source of income for a year

This step was the easiest for me: I am super lucky to work at a [startup](https://pynhq.com/) where the founders build it with the idea of a “company to serve us”, not the other way around. So when I had “the talk” with my boss it was something like this:

- hey Jon, I’m going crazy in this corona madness. What do you think if I move to Europe and will work fully remote for a year from the opposite timezone?
- of course, no problem, what do you need?

❤️ The first problem solved.

### 🇪🇺 Legal right to live and work in Europe for a year

After some random mindless googling I discovered the game-changer. Did you know that there is a number of countries, including some European countries in the Schengen zone, that offer ***digital nomad visas***? For real! They specifically target people that have a job already and can perform it remotely from another location. Mind-blowing sign from the universe. After some research, the choice was obvious: Malta and its [Nomad Residence Permit](https://residencymalta.gov.mt/overview/) program.

- they give residency permit that allows staying in Malta for at least one year, with the opportunity to extend
- English is widely spoken, so no communication difficulties
- it’s in the Schengen zone, which means unrestricted travel to 25 countries for a year
- no double income taxes
- looks to be a nice country with rich history, access to the Mediterranean sea and beautiful coastline

So without too much thinking, I applied 🙂. The process was super easy: just collect a bunch of documents from their list, send them to their email, pay the fee, and wait for the decision. And after ~3 weeks I was approved.

🎉 The second problem was solved.

### 🐨 A way to leave Australia

Amazingly, this was the hardest part of the project. For context: in March 2020, when Covid hit, Australia closed its borders for everyone, in and out, including its own citizens. Initially for 3 months, to “flatten the curve” and prepare for Covid, but those 3 months turned into almost 2 years, and they still, in November 2021 are partially closed. At the time of The Project (around August 2021), I could only leave Australia if:

- I had a ***very valid*** reason
- I am able to prove with documents why my reason is so valid
- I apply for an exemption to the Department of Immigration and get it approved

Things that are **NOT** valid enough from the government perspective, or at least exemption applications that were denied multiple times that I know of: visiting dying parents, a job offer in another country, reuniting with a partner, going for study for a year, relocating permanently to another country. Around 50% of applications are usually denied. The “Travel Exemption Australia” group, where people share their stories and help tweak the applications, was one of the most depressing groups ever.

In order to deal with it, I had to turn this into a mini-project within the big Relocation Project.

**Step 1**. Research and collect examples of successful applications, extract common patterns and useful phrases from them


**Step 2**. Collect all the necessary document


**Step 3**. Write and submit Statutory Declaration: a legal document, in which I had to:


- declare that I intend to leave Australia for at least a year
- describe things that I do to prove the seriousness of my intent (like selling my car, giving up my apartment, the fact that I got the visa for a year)
- prove that I can financially support myself during that time (bank statement, employment letter with the salary, letter that I can work remotely)
- declare that I understand the risks of travel and under no circumstances going to ask the government for help

The consequence of this document is that if I leave Australia, and then return earlier than 3 months (the exemption category), I will be committing a criminal offence. Which, if caught, is punishable by huge fines, or even in theory a prison. So there will be no turning back after I leave 🙂

🥳 Luckily, the hard work and extensive preparation paid out, and the application was approved.

## The new beginning

After the MVP (minimal viable product) of the Relocation Project was done and successfully released, the rest was just a smooth sail of implementing new easy features 😅

I shocked everyone that I’m leaving Australia soon, got vaccinated (the process of which deserves another article), sold my car, gave up my apartment, got rid of all my stuff, bent lockdown rules a few times to catch up with people, booked the flight, and took off to the new life 🛫

Right now hanging out in Malta, playing with cats that are everywhere here and planning my next adventure.

May the cats be with you ✌🏼`}
        />
      </div>

      <section className="border overflow-auto col-span-2 px-12">
        <header className="my-10">
          <h1 className="font-semibold text-5xl text-center">
            An Inner Journey of Self Discovery
          </h1>
          <p className="my-4 text-center md:text-2xl">
            Knowing oneself is the beginning of all wisdom.
          </p>
          <p className="text-center text-slate-500">
            Bisham Kunwor on {dayjs().format("DD MMM, YYYY")}
          </p>
        </header>
        <img
          className="relative mb-20 mt-8 aspect-video h-52 w-full overflow-hidden rounded-xl shadow-2xl shadow-blue-200/75 md:h-[500px]"
          src="https://namastehouse.org/_next/image?url=https%3A%2F%2Fnamastehouseevents.s3.ap-south-1.amazonaws.com%2Fzoltan-tasi-vHnVtLK8rCc-unsplash1691122209466.jpg&w=1920&q=75"
        />
        <article className="prose lg:prose-xl mx-auto w-full my-12">
          {serializedContent}
        </article>
      </section>
    </main>
  );
}
