import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEvent, IState } from '../shared/models';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): IState {
    const events: IEvent[] = [
      {
        id: 1,
        name: 'Event 1',
        address: 'USA, NY',
        date: '13 april',
      },
      {
        id: 2,
        name: 'Event 2',
        address: 'USA, NY',
        date: '14 april',
      },
    ];
    return { events };
  }
}
