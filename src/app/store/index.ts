import { ActionReducerMap } from '@ngrx/store';
import { IState } from '../shared/models';
import { EventEffects } from './event/event.effects';
import { EventReducer } from './event/event.reducer';

export const reducers: ActionReducerMap<IState> = {
  events: EventReducer,
};

export const effects: any[] = [EventEffects];
