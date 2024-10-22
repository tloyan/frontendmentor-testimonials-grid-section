import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-neutral-2 p-6 py-[71px]">
      <div className="grid min-h-full max-w-[1110px] grid-cols-[1fr] gap-x-[30px] gap-y-6 lg:grid-cols-4 lg:grid-rows-[49.5%_46.5%]">
        <Card
          name="Daniel Clifford"
          image="/image-daniel.jpg"
          summary="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
          details="I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup."
          className="bg-primary-1 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2"
          outlineColor="bg-primary-4"
          quote={true}
        />
        <Card
          name="Jonathan Walters"
          image="/image-jonathan.jpg"
          summary="The team was very supportive and kept me motivated"
          details="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
          className="bg-primary-2 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
        />
        <Card
          name="Jeanette Harmon"
          image="/image-jeanette.jpg"
          summary="An overall wonderful and rewarding experience"
          details="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
          className="bg-white text-primary-2 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3"
        />
        <Card
          name="Patrick Abrams"
          image="/image-patrick.jpg"
          summary="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
          details="The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
          className="bg-primary-3 lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3"
          outlineColor="bg-primary-1"
        />
        <Card
          name="Kira Whittle"
          image="/image-kira.jpg"
          summary="Such a life-changing experience. Highly recommended!"
          details="Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
          className="bg-white text-primary-2 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3"
        />
      </div>
    </main>
  );
}

function Card({
  name,
  image,
  summary,
  details,
  className,
  outlineColor,
  quote = false,
}: {
  name: string;
  image: string;
  summary: string;
  details: string;
  className?: string;
  outlineColor?: string;
  quote?: boolean;
}) {
  return (
    <div
      className={twMerge(
        "shadow-card min-h-full rounded-lg bg-primary-1 text-white",
        className,
      )}
    >
      <div
        className={twMerge(
          clsx(
            "flex min-h-full flex-col items-start rounded-lg p-8",
            quote &&
              "bg-[url('/bg-pattern-quotation.svg')] bg-[right_10%_top] bg-no-repeat lg:bg-[right_20%_top]",
          ),
        )}
      >
        <div className="flex items-center justify-center space-x-4">
          <div
            className={twMerge(
              clsx(
                "ml-[-2px] flex h-8 w-8 flex-col items-center justify-center overflow-hidden rounded-full",
                outlineColor,
              ),
            )}
          >
            <div className="w-7 overflow-hidden rounded-full">
              <Image src={image} alt={"image daniel"} width={28} height={28} />
            </div>
          </div>
          <div>
            <p className="text-3.25 leading-none">{name}</p>
            <p className="mt-1 text-2.75 leading-none opacity-50">
              Verified Graduate
            </p>
          </div>
        </div>
        <p className="mt-4 text-xl font-semibold leading-[1.2em]">{summary}</p>
        <p className="mt-[18px] text-3.25 leading-[1.385em] opacity-70">
          “ {details} ”
        </p>
      </div>
    </div>
  );
}
