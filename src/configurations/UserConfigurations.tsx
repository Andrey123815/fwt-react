import React from "react";
import {ISingleSchedule} from "./SheduleConfigurations";

export interface IAddress {
    "city": string,
    "street": string,
    "house": string
}

export interface ISingleUser {
    nickname: string,
    rank: string,
    address: IAddress,
    schedule: ISingleSchedule[],
}

export const defaultUser: ISingleUser = {
    nickname: "Player",
    rank: "Новичок",
    address: {
        city: "Для заполнения адреса перейдите к карте",
        street: "",
        house: ""
    },
    schedule: [],
};

export interface IUserContext {
    user: ISingleUser,
    updateUserInfo: (user: ISingleUser) => void
}

export const UserContext = React.createContext<IUserContext>({
    user: defaultUser,
    updateUserInfo: () => {}
})
