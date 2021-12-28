import React from 'react';
import './Info.css';

const History = () => {
  return (
    <div className="info-container">
      <div className="banner"></div>
      <div className="info">
        <div className="container-inner">
          <header>
            <h1 className="large">History</h1>

            <p className="lead">
              The history of the Eurovision Song Contest began as the brainchild
              of Marcel Bezençon of the EBU. The Contest was based on Italy's
              Sanremo Music Festival and was designed to test the limits of live
              television broadcast technology.
            </p>
          </header>
          <section>
            <p>
              The first Contest was held on 24 May 1956, when seven nations
              participated. With a live orchestra, the norm in the early years,
              and simple sing-along songs on every radio station, the Contest
              grew into a true pan-European tradition.
            </p>
            <div className="img-container">
              <img
                src="https://eurovision.tv/image/8d917d7a-a1f3-44e5-bac6-de164516e021.jpg"
                alt="Marcel Bezençon"
              />
              <small>
                Marcel Bezençon, the founder of the Eurovision Song Contest. ©
                Unknown
              </small>
            </div>
          </section>
          <section>
            <h2>Excusez-moi?</h2>
            <p>
              In the beginning, it was obvious for the participants that they
              should sing in their country's national language. However, as the
              Swedish entry in 1965, Absent Friend, was sung in English, the EBU
              set very strict rules on the language in which the songs could be
              performed. National languages had to be used in all lyrics. Song
              writers across Europe soon tagged onto the notion that success
              would only come if the judges could understand the content,
              resulting in such entries as Boom- Bang-A-Bang and La La La. In
              1973, the rules on language use were relaxed, and in the following
              year ABBA would win with Waterloo. Those freedom of language rules
              would be soon reversed in 1977, to return with apparent permanent
              status in the 1999 contest.
            </p>
            <div className="img-container">
              <img
                src="https://eurovision.tv/image/8d917d7d-87bb-45a9-a981-e23199101094.jpg"
                alt="ABBA 1974"
              />
              <small>
                ABBA, after their famous victory at the 1974 Eurovision Song
                Contest for Sweden. © Unknown
              </small>
            </div>
          </section>
          <section>
            <h2>Your votes please</h2>
            <p>
              The voting systems used in the Contest have changed throughout the
              years. The modern system has been in place since 1975. Voters
              award a set of points from 1 to 8, then 10 and finally 12 to songs
              from other countries — with the favourite being awarded the now
              famous douze points. Historically, a country's set of votes was
              decided by an internal jury, but in 1997 five countries
              experimented with televoting, giving members of the public in
              those countries the opportunity to vote en masse for their
              favourite songs. The experiment was a success and from 1998 all
              countries were encouraged to use televoting wherever possible.
            </p>
            <div className="info-video">
              <iframe
                title="10 memorable voting moments at Eurovision Song Contest"
                src="https://www.youtube.com/embed/1R_sK34AXXw"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Nowadays members of the public may also vote by SMS. Whichever
              method of voting is used – jury, telephone or SMS – countries may
              not cast votes for their own songs.
            </p>
          </section>
          <section>
            <h1>Expanding with Semi-Finals</h1>
            <p>
              The end of the Cold War in the early 1990s led to a sudden
              increase in numbers, with many former Eastern Bloc countries
              queuing up to compete for the first time. This process has
              continued to this day with more and more countries joining. For
              this reason, in 2004 the Semi-Final format was introduced by the
              EBU which turned into two Semi-Finals for the Eurovision Song
              Contest in 2008. Now all countries, except the 'Big Five' –
              France, Germany, Italy, Spain and the United Kingdom – together
              with the host country, must be in a Semi-Final top-10 to qualify
              for the Final.
            </p>
          </section>
          <section>
            <h2>60 years and counting</h2>
            <p>
              In 2015, the Eurovision Song Contest celebrated its 60th
              anniversary. The BBC hosted a grand anniversary show in London,
              featuring over a dozen former participants. And to honour the
              country's Eurovision Song Contest commitment for over 30 years,
              the organisers admitted Australia to participate for the first
              time ever.
            </p>
            <div className="info-video">
              <iframe
                title="Eurovision Medley"
                src="https://www.youtube.com/embed/paBzCY9X26A"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Despite the 'grand old lady' being of respectable age, her pension
              is nowhere in sight, as the Eurovision Song Contest is still the
              most modern live TV entertainment spectacle in the world.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default History;
