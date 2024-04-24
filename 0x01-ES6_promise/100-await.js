import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    result.photo = photo;
    result.user = user;
  } catch (error) {
    // returning default result in case of an error
  }

  return result;
}
