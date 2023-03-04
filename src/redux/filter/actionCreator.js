import { STATUSCHANGED } from "./actionType";

export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    };
};
