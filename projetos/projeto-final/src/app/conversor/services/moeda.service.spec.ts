import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService],
      imports: [HttpClientModule],
    });
  });

  it('should ...', inject([MoedaService], (service: MoedaService) => {
    expect(service).toBeTruthy();
  }));
});
