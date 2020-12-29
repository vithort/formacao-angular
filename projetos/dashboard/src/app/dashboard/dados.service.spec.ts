import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DadosService } from './dados.service';

describe('DadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosService],
      imports: [HttpClientModule],
    });
  });

  it('should ...', inject([DadosService], (service: DadosService) => {
    expect(service).toBeTruthy();
  }));
});
