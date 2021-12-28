import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompetitions } from '../../actions/competitions';
import Spinner from '../layout/Spinner';
import CompetitionCard from './CompetitionCard';
import './Competitions.css';

const Competitions = () => {
  const dispatch = useDispatch();
  const competitionsList = useSelector((state) => state.competitions);
  const { competitions, loading } = competitionsList;
  const [sort, toggleSort] = useState(true);

  useEffect(() => {
    dispatch(getCompetitions());
  }, [dispatch]);

  const getResults = () => {
    let results = [];
    if (sort) {
      results = competitions.sort((a, b) => (a.year < b.year ? 1 : -1));
    } else {
      results = competitions.sort((a, b) => (a.year > b.year ? 1 : -1));
    }

    return results.map((competition) => (
      <CompetitionCard key={competition._id} competition={competition} />
    ));
  };

  return (
    <Fragment>
      {loading || competitions.length < 1 ? (
        <Spinner />
      ) : (
        <div className='competitions background'>
          <div className='content'>
            <div className='overlay'>
              <div className='container'>
                <div className='container'>
                  <div className='btn-container'>
                    <button
                      onClick={(e) => toggleSort(!sort)}
                      className='btn btn-light'
                    >
                      Sort{' '}
                      {sort ? (
                        <i className='fas fa-arrow-up'></i>
                      ) : (
                        <i className='fas fa-arrow-down'></i>
                      )}
                    </button>
                  </div>
                  <div className='card-container'>
                    {getResults()}
                    {/* {competitions.length > 0 &&
                      competitions.map((competition) => (
                        <CompetitionCard
                          key={competition._id}
                          competition={competition}
                        />
                      ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Competitions;
