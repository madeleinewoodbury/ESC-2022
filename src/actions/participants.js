import {
  GET_PARTICIPANTS,
  GET_PARTICIPANT,
  PARTICIPANT_ERROR,
  CLEAR_PARTICIPANT,
  GET_VOTE,
  VOTE_ERROR,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import { loadUser } from './auth';

// const api = 'http://localhost:5200/api';
const api = 'https://eurovision-2022-api.herokuapp.com/api';
const escApi = 'https://eurovision-song-contest-api.herokuapp.com/api/v1';

const config = {
  headers: {
    'Content-Type': 'application/json',
    // 'x-auth-token': localStorage.token,
  },
};

// Add participant
export const addParticipant = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${escApi}/countries/${formData.country}`);

    const country = {
      _id: res.data.data.id,
      name: res.data.data.name,
      code: res.data.data.code,
      flag: res.data.data.flag,
    };

    // Turn bio into array
    let bio = formData.bio;
    if (bio.includes('*')) {
      bio = bio.split('*');
    }

    let body = {
      country: country,
      artist: formData.artist,
      song: formData.song,
      image: formData.image,
      lyrics: formData.lyrics,
      music: formData.music,
      bio: bio,
      semifinal:
        formData.semifinal === '1'
          ? 'First Semifinal'
          : formData.semifinal === '2'
          ? 'Second Semifinal'
          : 'No semifinal',
      final: formData.final,
      video: formData.video,
      points: formData.points,
    };

    body = JSON.stringify(body);
    await axios.post(`${api}/participants`, body, config);
    dispatch(setAlert('Participant added', 'success'));
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong adding participant',
    });
  }

  history.push('/dashboard');
};

// Edit participant
export const editParticipant = (formData, history, id) => async (dispatch) => {
  try {
    const res = await axios.get(`${escApi}/countries/${formData.country}`);

    const country = {
      _id: res.data.data.id,
      name: res.data.data.name,
      code: res.data.data.code,
      flag: res.data.data.flag,
    };

    // Turn bio into array
    let bio = formData.bio;
    if (bio.includes('*')) {
      bio = bio.split('*');
    }

    let body = {
      country: country,
      artist: formData.artist,
      song: formData.song,
      image: formData.image,
      lyrics: formData.lyrics,
      music: formData.music,
      bio: bio,
      semifinal:
        formData.semifinal === '1'
          ? 'First Semifinal'
          : formData.semifinal === '2'
          ? 'Second Semifinal'
          : 'No semifinal',
      final: formData.final,
      video: formData.video,
      points: formData.points,
    };

    body = JSON.stringify(body);
    await axios.put(`${api}/participants/${id}`, body, config);
    dispatch(setAlert('Participant updated', 'success'));
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong updating participant',
    });
  }

  history.push('/dashboard');
};

// Get all participants
export const getParticipants = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/participants`);
    dispatch({
      type: GET_PARTICIPANTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong getting participants',
    });
  }
};

// Get participant by id
export const getParticipant = (id, history) => async (dispatch) => {
  dispatch({ type: CLEAR_PARTICIPANT });
  try {
    const res = await axios.get(`${api}/participants/${id}`);

    dispatch({
      type: GET_PARTICIPANT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong getting participant',
    });
    history.push('/not-found');
  }
};

// Vote on participant
export const voteOnParticipant = (id, vote) => async (dispatch) => {
  try {
    const res = await axios.post(`${api}/votes/${id}/${vote}`);
    dispatch({
      type: GET_VOTE,
    });
    dispatch(loadUser());
    dispatch(
      setAlert(`You gave ${vote} points to ${res.data.country.name}`, 'success')
    );
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VOTE_ERROR,
    });
  }
};

// Delete participant
export const deleteParticipant = (id) => async (dispatch) => {
  try {
    await axios.delete(`${api}/participants/${id}`);
    dispatch(setAlert('Participant deleted', 'success'));
  } catch (err) {
    dispatch({
      type: PARTICIPANT_ERROR,
      payload: 'Something went wrong deleting participant',
    });
  }
};
