import { Action, createReducer, on } from '@ngrx/store';
import * as EventActions from './event.actions';
import { IEvent } from '../../shared/models';

export const initialState: IEvent[] = [
  {
    id: '1',
    name: 'Event 1',
    address: 'USA, NY',
    date: '13 april',
  },
  {
    id: '2',
    name: 'Event 2',
    address: 'USA, NY',
    date: '14 april',
  },
];

const eventReducer = createReducer(
  initialState,
  on(EventActions.setEvents, (state, { events }) => {
    return events.map((value) => Object.assign(value));
  }),
  on(EventActions.addEvent, (state, { event }) => {
    const newEvents = state.map((value) => value);
    newEvents.push(event);
    return newEvents;
  })
);

export function EventReducer(
  state: IEvent[] | undefined,
  action: Action
): IEvent[] {
  return eventReducer(state, action);
}
