import {ActionType} from "./redux-store";

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    picture: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type UsersType = {
    users: UserType[]
}

const initialState: UsersType = {
    users: [
        {
            id: 1,
            picture: 'https://www.monaco-tribune.com/wp-content/uploads/2020/10/charles-leclerc.jpeg',
            followed: true,
            fullName: 'Charles',
            status: 'I am on pole!',
            location: {city: 'Monte-Carlo', country: 'Monaco'}
        },
        {
            id: 2,
            picture: 'https://dive-bomb.com/wp-content/uploads/2021/05/lando.jpg',
            followed: false,
            fullName: 'Lando',
            status: 'Smooth operator',
            location: {city: 'London', country: 'UK'}
        },
        {
            id: 3,
            picture: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ff758de98-8cbe-11eb-8f69-0367b6f4fca7.jpg?crop=4287%2C2412%2C400%2C62&resize=1180',
            followed: true,
            fullName: 'Fernando',
            status: 'GP2 engine)',
            location: {city: 'Dubai', country: 'UAE'}
        },
        {
            id: 4,
            picture: 'https://www.essentiallysports.com/wp-content/uploads/Kimi-Raikkonen-PA1.jpg',
            followed: true,
            fullName: 'Kimi',
            status: 'I know what I am doing!',
            location: {city: 'Bern', country: 'Switzerland'}
        }
    ]
}

export const usersReducer = (state: UsersType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case 'UN-FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
}

export const FollowAC = (userId: number) => {
    return {type: 'FOLLOW', userId: userId} as const
};
export const UnFollowAC = (userId: number) => {
    return {type: 'UN-FOLLOW', userId: userId} as const
};
export const SetUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users: users} as const
};