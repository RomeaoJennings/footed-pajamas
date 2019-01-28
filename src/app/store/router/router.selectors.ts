import { AppState } from '../app.reducers';

export const selectRouterParams = (state: AppState) =>
  state.router.state.params;
