import LinkButton from "./components/link-button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <img src='/roots.png' className='w-full min-h-[40vh] max-h-[60vh] object-contain' />
      <div className="w-full bg-base-100">
        <article className="prose prose-xl m-auto py-10 text-center">
          <h1>2<sup>nd</sup> - 4<sup>th</sup> April 2027</h1>
          <p>Ainmhícon is thrilled to welcome you back to for it's second year in Clayton Hotel Liffey Valley. Join us as we lay down our roots and celebrate nature and our wonderful community!</p>
          <div className="divider w-[50%] mx-auto"></div>
          <p>Events schedule coming soon!</p>
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
          <p>Ainmhícon- A portmanteau of the word "ainmhí" meaning "animal" as Gaeilge (in Irish) and "con" short for "convention". <br/><br/>
          Last year Craic & Ceòl were let loose on Dublin as we opened our doors for the first time. With over 300 attendees we had a great
          first year, so great in fact that we've decided to do it all again in 2027!</p>

        </div>
        <figure className="min-w-[50%] hidden lg:block">
          <img src='/game.gif' />
        </figure>
      </div>
    </div>
  );
}
