import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';

import { NewtagComponent } from './newtag.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MontosService } from '../services/montos.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroupDirective, FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('NewtagComponent', () => {
  let component: NewtagComponent;
  let fixture: ComponentFixture<NewtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtagComponent ],
      imports: [HttpClientTestingModule,MatToolbarModule,MatStepperModule,MatFormFieldModule,
        MatSelectModule,FormsModule, ReactiveFormsModule,MatKeyboardModule,MatInputModule,
        BrowserAnimationsModule,],
      providers: [MontosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('retrieves all the cars', inject([MontosService], (montosService: { GetIssues: () => { (): any; new(): any; subscribe: { (arg0: (result: string | any[]) => void): void; new(): any; }; }; }) => {
    montosService.GetIssues().subscribe((result: string | any[]) => expect(result.length).toBeGreaterThan(0));
}));


});
