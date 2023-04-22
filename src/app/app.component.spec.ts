import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MontosService } from './services/montos.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,    MatToolbarModule,HttpClientTestingModule,
      ],providers: [MontosService],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be created', () => {
    const service: MontosService = TestBed.get(MontosService);
    expect(service).toBeTruthy();
   });
   it(`should have as title 'angular-unit-test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('totemfrontend');
  }));





});
