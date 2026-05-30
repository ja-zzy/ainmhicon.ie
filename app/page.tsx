import LinkButton from "./components/link-button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <img src='/hero.webp' className='w-full min-h-[40vh] max-h-[60vh] object-cover' />
      <div className="w-full bg-base-100">
        <article className="prose prose-xl m-auto py-10 text-center">
          <h1>Ainmhícon 2027</h1>
          <div className="divider divider-success"></div>
          <p>Ainmhícon is excited to welcome you back to it's second year in Clayton Hotel Liffey Valley.</p>
          <div className="divider w-[50%] mx-auto"></div>
          <LinkButton href='/events' size='xl'>View Events Timetable</LinkButton>
          <div className="divider w-[50%] mx-auto"></div>
          <p>Dealer's Den Applications will open soon!</p>
          <div className="divider w-[50%] mx-auto"></div>
          <p>Registration will open soon! You can set up your account anytime</p>
          <div className="divider w-[50%] mx-auto"></div>
          <LinkButton href='https://reg.ainmhicon.ie' size='xl'>Visit Registration Site</LinkButton>
        </article>
      </div>

      <div className="card bg-base-200 card-lg shadow-sm w-[70vw] max-w-275 lg:card-side my-20">

        <figure className="min-w-[50%] block lg:hidden">
          <img src='/game.gif' />
        </figure>
        <div className="card-body prose prose-lg">
          <h2 className="card-title">What is Ainmhícon?</h2>
          <p>Ainmhícon- A portmanteau of the word "ainmhí" meaning "animal" as Gaeilge (in Irish) and "con" short for "convention", is a brand new furry convention taking place in Dublin, Ireland. Its main role is to have an easily accessible furry convention for people not just in Ireland, but all over Europe and the rest of the world!
            Ainmhícon will have its first year in April 2026, and if the turnout is great, will become a yearly event.</p>

        </div>
        <figure className="min-w-[50%] hidden lg:block">
          <img src='/game.gif' />
        </figure>
      </div>
    </div>
  );
}
