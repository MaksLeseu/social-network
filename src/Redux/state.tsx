import React from "react";

type PostsDataType = {
    id: string
    message: string
    level: number
}
type UsersMessageType = {
    id: string
    message: string
}
type DialogsDataType = {
    id: string
    name: string
}
type FavoritesType = {
    id: string
    personName: string
}

type ContentType = {
    postsData: PostsDataType[]
}
type MessagesType = {
    usersMessage: UsersMessageType[]
    dialogsData: DialogsDataType[]
}
type SidebarRightType = {
    favorites: FavoritesType[]
}

export type RootStateType = {
    content: ContentType
    messages: MessagesType
    sidebarRight: SidebarRightType
}


export type StoreType = {
    _state: RootStateType
    rerenderEntireTree: (store: StoreType) => void
    getState: () => RootStateType
    addPost: (postMessage: string) => void
    addMessage: (message: string) => void
    subscribe: (observer: (store: StoreType) => void) => void
}

let store: StoreType = {
    _state: {
        content: {
            postsData: [
                {id: '1', message: 'Hi, my name is.', level: 1},
                {id: '2', message: 'Im Frontend Developer', level: 30},
                {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
            ]
        },
        messages: {
            usersMessage: [
                {id: '1', message: 'Hi brother!'},
                {id: '2', message: 'Hi man!'},
                {id: '3', message: 'How are you?'},
                {id: '4', message: 'На девятов этаже('},
                {id: '2', message: 'Что там делаешь?'},
                {id: '5', message: 'Хочу выйти...'},
            ],
            dialogsData: [
                {id: '1', name: 'Nik Filman'},
                {id: '2', name: 'Mich Filman'},
                {id: '3', name: 'Vera Filmana'},
                {id: '4', name: 'Vik Prigozin'},
            ],
        },
        sidebarRight: {
            favorites: [
                {id: '1', personName: 'Kathy Pacheco'},
                {id: '2', personName: 'Rodger Struck'},
                {id: '3', personName: 'Alex Buckmaster'},
            ]
        }
    },
    rerenderEntireTree(store: StoreType) {
        console.log('Change')
    },
    getState() {
        return this._state
    },
    addPost(postMessage: string) {
        this._state.content.postsData.push({id: '10', message: postMessage, level: 0});
        this.rerenderEntireTree(store)
    },
    addMessage(message: string) {
        this._state.messages.usersMessage.push({id: '5', message: message})
        this.rerenderEntireTree(store)
    },
    subscribe(observer: (store: StoreType) => void) {
        this.rerenderEntireTree = observer
    }
}

export default store;
