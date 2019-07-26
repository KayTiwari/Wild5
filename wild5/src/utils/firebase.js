import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {format} from 'date-fns';

/**
 * Return a firebase ref scoped by user and date.
 * Example: scopeRefByUserAndDate('Surveys') -> Surveys/fake@email/2019-01-01
 * @param {String} ref
 */
export function scopeRefByUserAndDate(ref) {
  const user = getScopedUser();
  const date = format(new Date(), 'YYYY-MM-DD');

  return [ref, user, date].join('/');
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
