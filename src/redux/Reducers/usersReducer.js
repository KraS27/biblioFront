const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: "1",
            userName: "Koko",
            description: "I like Koko",
            location: {country: "Ukraine", city: "Zhytomir"},
            followed: false
        },
        {
            id: "2",
            userName: "Jambo",
            description: "I like Jambo",
            location: {country: "Ukraine", city: "Kiev"},
            followed: true
        },
        {
            id: "3",
            userName: "Rico",
            description: "I like Rico",
            location: {country: "Ukraine", city: "Harkiv"},
            followed: false
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId)
                        return {...user, followed: true};
                    return user;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId)
                        return {...user, followed: false};
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}
        default:
            return state;
    }
}

export const setUsersAC = (users) =>{
    return {type: SET_USERS, users: users};
}
export const followAC = (userId) =>{
    return {type: FOLLOW, userId: userId};
}
export const unFollowAC = (userId) =>{
    return {type: UNFOLLOW, userId: userId};
}

export default usersReducer;