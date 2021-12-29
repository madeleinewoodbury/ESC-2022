import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../actions/countries';
import { addParticipant } from '../../actions/participants';
import { Link, Redirect } from 'react-router-dom';

const AddParticipant = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries);
  const { countries, loading } = countriesList;
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  const [formData, setFormData] = useState({
    artist: '',
    song: '',
    country: '',
    semifinal: '',
    final: false,
    lyrics: '',
    music: '',
    bio: '',
    points: 0,
    image: '',
    video: '',
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addParticipant(formData));
  };

  if (!isAuthenticated || user.role != 'admin') {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='auth background'>
        <div className='content'>
          <div className='overlay'>
            <div className='auth-container'>
              <h1 className='large'>Add Participant</h1>
              <p>* = required field</p>
              <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='* Artist Name'
                    name='artist'
                    value={formData.artist}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='* Song Title'
                    name='song'
                    value={formData.song}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                {countries.length > 0 && (
                  <div className='form-group'>
                    <select
                      name='country'
                      value={formData.country}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value='0'>* Select a country</option>
                      {countries.map((country) => (
                        <option key={country._id} value={country._id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className='form-group'>
                  <select
                    name='semifinal'
                    value={formData.semifinal}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value={0}>No Semifnals</option>
                    <option key={1} value={1}>
                      First Semifinal
                    </option>
                    <option key={2} value={2}>
                      Second Semifinal
                    </option>
                  </select>
                </div>

                <div className='form-group'>
                  <p>
                    <input
                      type='checkbox'
                      name='final'
                      checked={formData.final}
                      value={formData.final}
                      onChange={() =>
                        setFormData({ ...formData, final: !formData.final })
                      }
                    />{' '}
                    Grand Final
                  </p>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Lyrics by'
                    name='lyrics'
                    value={formData.lyrics}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Music by'
                    name='music'
                    value={formData.music}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className='form-group'>
                  <textarea
                    type='textarea'
                    placeholder='Participant bio'
                    name='bio'
                    value={formData.bio}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Participant Image'
                    name='image'
                    value={formData.image}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Video id'
                    name='video'
                    value={formData.video}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <input
                  type='submit'
                  className='btn btn-secondary'
                  value='Add Participant'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddParticipant;
