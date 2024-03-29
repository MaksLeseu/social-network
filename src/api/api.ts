import axios from "axios";
import {LoginInType} from "../components/Login/Login";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5fc11a34-7258-4926-8c00-91db4f940cfd'
    },
})

/*6c38e33f-71de-49e1-a68d-149628854242*/

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    pageChanged(pageNumber: any, pageSize: any) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    },
    getProfile(profileId: string) {
        console.warn('Obsolete method. Please use profileAPI object.')   // Расширяем функционал. Не удаляем этот метод, чтобы те кто раньше им пользовались не сломали свой код.
        return profileAPI.getProfile(profileId)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id: string) {
        return instance.delete(`follow/${id}`)
    },
}

export const profileAPI = {
    getProfile(profileId: string) {
        return instance.get(`profile/${profileId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    loginIn(data: LoginInType) {
        return instance.post(`auth/login`, data)
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}


