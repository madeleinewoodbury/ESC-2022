import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../actions/countries';
import { getParticipant } from '../../actions/participants';
import { editParticipant } from '../../actions/participants';
import { Redirect } from 'react-router-dom';

const EditParticipant = ({ match, history }) => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries);
  const participantDetail = useSelector((state) => state.participants);
  const auth = useSelector((state) => state.auth);
  const { participant, loading } = participantDetail;
  const { countries } = countriesList;
  const { isAuthenticated, user } = auth;
  const [formData, setFormData] = useState({
    artist: '',
    song: '',
    country: '',
    semifinal: 'No semifinal',
    final: false,
    lyrics: '',
    music: '',
    bio: '',
    image: '',
    video: '',
    points: 0,
  });

  const updateFormData = () => {
    setFormData({
      artist: loading || !participant.artist ? '' : participant.artist,
      song: loading || !participant.song ? '' : participant.song,
      country:
        loading || !participant.country._id ? '' : participant.country._id,
      semifinal:
        loading || !participant.semifinal
          ? 'No semifinal'
          : participant.semifinal,
      final: loading || participant.final,
      lyrics: loading || !participant.lyrics ? '' : participant.lyrics,
      music: loading || !participant.music ? '' : participant.music,
      bio: loading || !participant.bio ? '' : participant.bio,
      image: loading || !participant.image ? '' : participant.image,
      video: loading || !participant.video ? '' : participant.video,
    });
  };

  useEffect(() => {
    countries.length === 0 && dispatch(getCountries());
    if (participant === null || participant._id !== match.params.id) {
      dispatch(getParticipant(match.params.id));
    }

    if (participant !== null) {
      updateFormData();
    }
    // eslint-disable-next-line
  }, [loading, participant, match.params.id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editParticipant(formData, history, match.params.id));
  };

  if (!isAuthenticated || user.role !== 'admin') {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='auth background'>
        <div className='content'>
          <div className='overlay'>
            <div className='auth-container'>
              <h1 className='large'>Edit Participant</h1>
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
                    <option value='No Semifinal'>No Semifnal</option>
                    <option key={1} value='First Semifinal'>
                      First Semifinal
                    </option>
                    <option key={2} value={'Second Semifinal'}>
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
                  value='Update Participant'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditParticipant;
