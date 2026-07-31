export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <img src='/roots.webp' alt="Ainmhícon" className='w-full h-74 max-h-[40vh] object-contain mt-4 md:mt-8' style={{ filter: 'drop-shadow(0px 0px 10px rgba(0,0,0, 0.4))' }} />
      <div className="w-full bg-base-100">
        <article className="prose prose-xl m-auto py-10 px-4 text-center">
          <div className="card card-lg sm:card-xl bg-base-200 ">
            <div className="card-body py-12">
              <h1 className='mb-0!'>Ainmhícon is back!</h1>
              <h2>2<sup>nd</sup> - 4<sup>th</sup> April 2027</h2>
              <p>Ainmhícon is thrilled to welcome you back to for it's second year in Clayton Hotel Liffey Valley. Join us as we lay down our roots and celebrate nature and our wonderful community!</p>
              <div className="divider w-[50%] mx-auto"></div>
              <p>Events schedule coming soon!</p>
              <div className="divider w-[50%] mx-auto"></div>
              <p>Dealer's Den Applications will open on 3<sup>rd</sup> August 2026! See the <a href='/dealers-den#applications'>Dealer's Den</a> page for more info.</p>
              <div className="divider w-[50%] mx-auto"></div>
              <p>Ticket sales will begin soon! In order to buy a ticket and provide us your registration info, you will need an account. You can set up your account at <a href='https://reg.ainmhicon.ie'>any time</a></p>
            </div>
          </div>
        </article>
      </div>

      <div className="card bg-base-200 card-lg shadow-sm w-[90vw] md:w-[70vw]  max-w-275 lg:card-side my-20">

        <figure className="min-w-[50%] block lg:hidden">
          <img src='/game.gif' alt="Craic & Ceòl playing retro games"/>
        </figure>
        <div className="card-body prose prose-lg">
          <h2 className="card-title">What is Ainmhícon?</h2>
          <p>Ainmhícon- A portmanteau of the word "ainmhí" meaning "animal" as Gaeilge (in Irish) and "con" short for "convention".
            Last year Craic & Ceòl were let loose on Dublin as we opened our doors for the first time. With over 300 attendees we had a great
            first year, so great in fact that we've decided to do it all again in 2027!</p>
          <p>
            Here on the Ainmhícon website you can find out about our upcoming events, the Dealer's Den and you can also create an account to register and buy tickets for our conventions!
          </p>
        </div>
        <figure className="min-w-[50%] max-w-[50%] hidden lg:block">
          <img src='/game.gif' alt="Craic & Ceòl playing retro games" />
        </figure>
      </div>
    </div>
  );
}