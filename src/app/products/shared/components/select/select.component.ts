import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{

  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();
  productForm = this.fb.group({
    title: ["", Validators.required],
    price: [0, Validators.required],
    description: [""],
    category: ["", Validators.required],
    image: ["", Validators.required]
  });

    constructor(
    private fb: FormBuilder,
    private productService: SharedService,
    private messageService: MessageService
    ) {}


  ngOnInit(): void {

  }

  closeModal() {
    this.productForm.reset();
    this.clickClose.emit(true);
  }

  addProduct() {
    this.productService.saveProduct(this.productForm.value).subscribe(
      response => {
        this.clickAdd.emit(response);
        this.closeModal();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product added' });
      },
      (error: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        console.log('Errror occured');
      }
    )
  }


}
