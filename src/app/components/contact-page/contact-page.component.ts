import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  @ViewChild('myform', { static: false }) firstChild: ElementRef;

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_na14ywb', 'template_ociimyr', e.target as HTMLFormElement, 'user_Kn1PNXoRwQNgmLbN3vwKB').then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this.firstChild.nativeElement.reset();
    }, (error) => {
      console.log(error.text);
    });
  }
  constructor() { }

  ngOnInit(): void {
  }
}
