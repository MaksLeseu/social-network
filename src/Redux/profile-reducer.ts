import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: string
    message: string
    level: number
}

export type ProfileType = null |
    {
    aboutMe: null | string
    contacts: {facebook: null | string, website: null | string, vk: null | string, twitter: null | string, instagram: null | string, github: null | string, mainLink: null | string, youtube: null | string}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    photos: {small: null | string, large: null | string}
    userId: number
}

export type ContentInitialStateType = {
    posts: PostType[]
    profile: ProfileType
    status?: string
}

type ProfileReducerType = (state: ContentInitialStateType, action: ActionsType) => ContentInitialStateType

export type AddPostActionCreatorType = (state: string) => ActionsType
type SetUserProfileACType = (state: string) => ActionsType
type SetStatusType = (state: string) => ActionsType

let initialState: ContentInitialStateType = {
    posts: [
        {id: '1', message: 'Hi, my name is.', level: 1},
        {id: '2', message: 'Im Frontend Developer', level: 30},
        {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
    ],
    profile: null,
    status: ''
}

const profileReducer: ProfileReducerType = (state = initialState, action): ContentInitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {...state, posts: [...state.posts,
                 {id: '10', message: action.message, level: 0}]}
        case 'SET_USERS_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }

        default: return state
    }
}

export const addPostActionCreator: AddPostActionCreatorType = (state: string) => ({type: 'ADD-POST', message: state})
export const setUserProfileAC: SetUserProfileACType = (profile: any) => ({type: 'SET_USERS_PROFILE', profile: profile})
export const setStatusAC: SetStatusType = (status: any) => ({type: 'SET_STATUS', status})

export const getProfileTC = (profileId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(profileId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const getStatusTC = (profileId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(profileId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(response.data))
            }
        })
}

export default profileReducer