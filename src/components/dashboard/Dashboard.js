import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import DashboardItem from './DashboardItem';
import './Dashboard.css';

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } = auth;
  const [sortDown, toggleSortDown] = useState(true);

  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }

  const getUserVotes = () => {
    if (sortDown) {
      user.votes.sort((a, b) => (a.vote < b.vote ? 1 : -1));
    } else {
      user.votes.sort((a, b) => (a.vote > b.vote ? 1 : -1));
    }

    let userVotes = user.votes.map((vote) => (
      <DashboardItem
        key={vote._id}
        participant={vote.participant}
        vote={vote.vote}
      />
    ));
    return userVotes;
  };

  return loading && user === null ? (
    <Spinner />
  ) : (
    <div className='dashboard background'>
      <div className='content'>
        <div className='overlay'>
          <div className='container'>
            <h1 className='large'>Welcome {user && user.name.split(' ')[0]}</h1>
            <div className='btn-container'>
              <Link to='/participants' className='btn btn-secondary'>
                View Participants
              </Link>
              {user && user.role === 'admin' ? (
                <Link to='/add-participant' className='btn btn-light'>
                  Add Participant
                </Link>
              ) : null}
            </div>
            {user && user.votes.length === 0 ? (
              <p className='lead'>
                You have not voted on any participants yet...
              </p>
            ) : (
              <div className='list'>
                <div className='list-item'>
                  <div className='item-title'>
                    <h2>Participants</h2>
                  </div>
                  <div className='item-vote'>
                    <button
                      onClick={(e) => toggleSortDown(!sortDown)}
                      className='btn btn-primary'
                    >
                      {sortDown ? (
                        <span>
                          <span className='hide-xs'>Sort</span>{' '}
                          <i className='fas fa-arrow-up'></i>
                        </span>
                      ) : (
                        <span>
                          <span className='hide-xs'>Sort</span>{' '}
                          <i className='fas fa-arrow-down'></i>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                {user && getUserVotes()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
