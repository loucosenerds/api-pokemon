import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-detalhes',
  templateUrl: './card-detalhes.component.html',
  styleUrls: ['./card-detalhes.component.scss']
})
export class CardDetalhesComponent implements OnInit {

  card: any;
  formGroup!: FormGroup; 
  showFields: boolean = false;

  constructor(public dialogRef: MatDialogRef<CardDetalhesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private cdRef: ChangeDetectorRef
  ) { 


    this.card = data;
    console.log('Card Chegou no PopUp: ', data);


  }

  ngOnInit(): void {
 
      // items
      this.formGroup = this.formBuilder.group({
          id : [''],
          name: [''],
          types: [''], 
          hp: [''],  
          rarity: [''],
          select_enum_brand:[''],
          nationalPokedexNumbers: ['']
      }); 

      this.formGroup.patchValue({
          name:  this.card.name,
          types: this.card.types
    }); 

    this.cdRef.detectChanges();

  }

  toggleFields() {
    this.showFields = !this.showFields;
  }

}




