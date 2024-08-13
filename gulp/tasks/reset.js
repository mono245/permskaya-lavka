import { deleteAsync } from "del";

export const reset = () => {
    if (app.isDev) {
        return deleteAsync(app.path.clean.build);
    } else {
        return deleteAsync(app.path.clean.dist);
    }
};