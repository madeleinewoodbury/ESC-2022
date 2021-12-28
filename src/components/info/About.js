import React from 'react';
import './Info.css';

const About = () => {
  return (
    <div className="info-container">
      <div className="banner"></div>
      <div className="info">
        <div className="container-inner">
          <header>
            <h1 className="large">About</h1>

            <p className="lead">
              New to the Eurovision Song Contest, or feel the need to refresh
              your memory? Let's explain how it works. In a nutshell.
            </p>
          </header>
          <section>
            <div className="img-container">
              <img
                src="https://eurovision.tv/image/8db74a87-22b5-4371-b9fd-12bb983aff5a/hero.jpg"
                alt="Eurovision Stage 2019"
              />
            </div>
            <p>
              Each participating broadcaster that represents their country
              chooses their performer (maximum 6 people) and song (maximum 3
              minutes, not released before) through a national televised
              selection, or through an internal selection. They have to do so
              before mid-March, the official deadline to send in entries.
            </p>
            <p>
              The winner of the Eurovision Song Contest will be chosen through 2
              Semi-Finals and a Grand Final. Traditionally, 6 countries are
              automatically pre-qualified for the Grand Final. The so-called
              'Big 5' — France, Germany, Italy, Spain and the United Kingdom —
              and the host country. The remaining countries will take part in
              one of the two Semi-Finals. From each Semi-Final, the best 10 will
              proceed to the Grand Final. This brings the total number of Grand
              Final participants to 26.
            </p>
            <p>
              Each act must sing live, while no live instruments are allowed.
            </p>
          </section>
          <section>
            <p>
              After all songs have been performed, each country will give two
              sets of 1 to 8, 10 and 12 points; one set given by a jury of five
              music industry professionals, and one set given by viewers at
              home. Viewers can vote by telephone, SMS and through the official
              app. Out of fairness, you cannot vote for your own country.
            </p>
            <p>
              Only those countries who take part in the respective Semi-Final
              vote, along with 3 of the 6 pre-qualified countries. Which
              countries take part and vote in which Semi-Final is determined by
              the so-called Semi-Final Allocation Draw in late January.
            </p>
          </section>
          <section>
            <p>
              In the Grand Final, juries and viewers from all participating
              countries can vote again, after the 26 finalists have performed.
              Once the voting window has closed, the presenters will call upon
              spokespersons in all participating countries and ask them to
              reveal their jury points live on air.
            </p>
            <p>
              Next, viewers' points from all participating countries will be
              added up, and revealed from the lowest to the highest, culminating
              into a climax that will eventually reveal the winner of the 64th
              Eurovision Song Contest.
            </p>
            <p>
              The winner will perform once again, and take home the iconic glass
              microphone trophy. The winning country will traditionally be given
              the honour of hosting the next Eurovision Song Contest.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
