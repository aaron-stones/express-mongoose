import { Request } from "express";

export const routerLogTime = () => {
    console.log('App has been called at:', new Date(Date.now()).toString());
}

export const routerLogParams = (req: Request) => {
    console.log('App has been called with the method', req.method);
    console.log('App has been called with the location', req.originalUrl);
}