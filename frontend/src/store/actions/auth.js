export default function authAction(userData) {
  return {
    type: 'AUTH_USER',
    payload: {userData}
  }
}