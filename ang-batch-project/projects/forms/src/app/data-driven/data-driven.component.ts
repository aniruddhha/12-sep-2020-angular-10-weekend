import { Invoice, User } from './inv.data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { MyHttpService } from './http.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css'],
  providers: [MyHttpService]
})
export class DataDrivenComponent implements OnInit {

  fg: FormGroup
  invoices: Array<User>

  constructor(
    private fb: FormBuilder,
    private invSr: MyHttpService
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      userInfo: this.fb.group({
        yourName: this.fb.control('', [Validators.required]),
        company: this.fb.control('', [Validators.required]),
        mobile: this.fb.control('', Validators.compose([
          Validators.required, this.mobileCheck
        ])),
        email: this.fb.control('', Validators.compose([
          Validators.required,
          Validators.email
        ]))
      }),
      productInfo: this.fb.group({
        product: this.fb.control(''),
        qty: this.fb.control('', [Validators.max(1)]),
        price: this.fb.control('', [Validators.max(1)]),
        tax: this.fb.control('', [Validators.max(0)])
      }),
      products: this.fb.array([])
    })

    this.invSr.listInvoices().subscribe(res => {
      console.log(res['data'])
      this.invoices = res['data'] as Array<User>
    })
  }

  addProduct() {
    const productInfo = this.fg.get('productInfo') as FormGroup
    const products = this.fg.get('products') as FormArray
    products.push(this.fb.group({ ...productInfo.value }))

    productInfo.reset()
  }

  removeProduct() {
    // removing perticular product - HW
  }

  calculateTotal() {
    const frmArr = this.fg.get('products') as FormArray
    const products = frmArr.value as Array<any>
    let total = 0
    products.forEach(el => total += (el['qty'] * el['price']) + el['tax'])
    return total
  }

  onQuotation() {
    const form = this.fg
    if (this.fg.valid) {
      const products = this.fg.get('products') as FormArray
      if (products.length) {
        console.log(`Complete form is valid`)

        const invoice: Invoice = this.fg.value as Invoice
        delete invoice['productInfo']

        this.invSr.saveInvoice(invoice).subscribe(
          res => {
            console.log(res)
            form.reset()
            const products = (this.fg.get('products') as FormArray)
            products.clear()
          },
          err => console.log(err),
          () => console.log('complete')
        )
      }
    }
  }

  mobileCheck(ctrl: AbstractControl): ValidationErrors | null {
    if (ctrl.value) {
      const is91 = ctrl.value.substr(0, 3) == '+91'
      return is91 ? null : { is91: true }
    }
  }

  checkValidity(group: string, name: string) {
    const ctrl = this.fg.get(group).get(name)
    return ctrl.invalid && ctrl.touched
  }

  checkFormValidity() {
    const products = this.fg.get('products') as FormArray
    return this.fg.valid && products.length
  }
}
