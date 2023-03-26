import { Component, OnInit, ViewChild } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormControl, FormGroupDirective, FormBuilder, NgForm,FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';




@Component({
  selector: 'app-newtag',
  templateUrl: './newtag.component.html',
  styleUrls: ['./newtag.component.css'],
})
export class NewtagComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({


    monto: ['', Validators.required],
    documentType: ['', Validators.required],
    documentNumber: ['', Validators.required],
    matricula: ['', Validators.required],
    fullName: ['', Validators.required],
    cellPhone: ['', Validators.required],
    email: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isEditable = false;
  userDocValue = new FormControl('', [Validators.required]);
  montols: any;
  processCompleted: any;
  payStep: number = 0;
  payCompleted: any;
  scanCompleted: any;
  personalInfo: any;
  montodisplay: any;
  data: any = [
    {
      printQty: 1,
    },
  ];
  printQty: number = 0;
  tipoDocumento: any = [
    {
      name: 'Documento Uruguayo',
    },
    {
      name: 'Documento Extranjero',
    },
    {
      name: 'Precargado',
    },
  ];
  colors: any = [
    {
      name: 'Blanco',
    },
    {
      name: 'Azul',
    },
    {
      name: 'Negro',
    },
  ];
  models: any = [
    {
      name: 'Sedan',
    },
    {
      name: 'Optra',
    },
    {
      name: 'Hilux',
    },
  ];
  brands: any = [
    {
      name: 'BMW',
    },
    {
      name: 'Mercedes-Benz',
    },
    {
      name: 'Audi',
    },
    {
      name: 'Lexus',
    },
    {
      name: 'Renault',
    },
    {
      name: 'Ford',
    },
    {
      name: 'Opel',
    },
    {
      name: 'Seat',
    },
  ];
  montos: any = [
    {
      full: '112.50',
    },
    {
      full: '245.00',
    },
    {
      full: '367.50',
    },
    {
      full: '490.00',
    },
    {
      full: '735.00',
    },
    {
      full: '1,102.50',
    },
  ];
  selectedCountry: string = 'GB';


  preview: string = '';
  @ViewChild('stepper') stepper: MatStepper;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.personalInfo = 1;
    this.printQty = 0;
    this.payStep = 0;
  }
  move(index: number) {
    this.stepper.selectedIndex = index;
  }
  saveDetails(form: any) {

    this.montols=this.firstFormGroup.get('monto')?.value;
    localStorage.setItem('monto', this.montols);


    this.personalInfo = 0;
    setTimeout(() => {
      this.montodisplay = localStorage.getItem('monto');
      this.payStep = 1;
    }, 5000);
  }
}
