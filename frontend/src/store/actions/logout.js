export default function logoutAction(userData) {
    return {
        type: 'LOGOUT_USER',
        payload: {userData}
    }
}