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
        city: "Moscow",
        street: "Fdw",
        house: "4"
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
