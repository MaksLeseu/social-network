import React from "react";
import {PersonalInformation} from "../PersonalInformation/PersonalInformation";
import {InputField} from "../InputField/InputField";
import {Posts} from "../Posts/Posts";
import {MyPosts} from "../Posts/MyPosts/MyPosts";


export type ElementPostsDataType = {
    id: string
    message: string
    level: number
}

export function Content(props: any) {

    let postsElements = props.state.content.postsData.map((el: ElementPostsDataType) => <MyPosts massege={el.message} level={el.level}/> );

    return (
        <div className={'profile'}>
            <PersonalInformation />
            <InputField />
            <Posts postsElements={postsElements} />
        </div>
    )
}