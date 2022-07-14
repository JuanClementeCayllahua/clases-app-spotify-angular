import { TestBed } from '@angular/core/testing';

import { InyectaSessionInterceptor } from './inyecta-session.interceptor';

describe('InyectaSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InyectaSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InyectaSessionInterceptor = TestBed.inject(InyectaSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
