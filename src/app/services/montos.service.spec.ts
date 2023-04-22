import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MontosService } from './montos.service';

describe('MontosService', () => {
  let service: MontosService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MontosService]
  }));

  it('should be created', () => {
    const service: MontosService = TestBed.get(MontosService);
    expect(service).toBeTruthy();
   });

   
});
