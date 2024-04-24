// utils.js
export function uploadPhoto() {
  return Promise.resolve({ status: 200, body: 'photo-profile-1' });
}

export function createUser() {
  return Promise.resolve({ firstName: 'Guillaume', lastName: 'Salva' });
}

// 3-all.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
