import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export const register = (callback) =>
  flux.register(callback);

export const dispatch = (actionType, action) =>
  flux.dispatch(actionType, action);
