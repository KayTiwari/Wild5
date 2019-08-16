import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import {format} from 'date-fns';

/**
 * Return a firebase ref scoped by user and date.
 * Example: scopeRefByUserAndDate('Surveys') -> Surveys/fake@email/2019-01-01
 * @param {String} ref
 */
export function scopeRefByUserAndDate(ref, subType) {
  const user = getScopedUser();
  const date = format(new Date(), 'YYYY-MM-DD');

  const segments = [ref, user, date];

  if (subType) {
    segments.push(subType);
  }

  return segments.join('/');
}

/**
 * Get a scoped user from the current firebase user
 * Example: fakeemail@gmail.com -> fakeemail@gmail
 */
function getScopedUser() {
  const user = firebase.auth().currentUser;

  if (!user) {
    Actions.newlogin({error: 'Something went wrong, please log back in.'});
  }

  const [scopedUser] = user.email.split('.');

  return scopedUser;
}
