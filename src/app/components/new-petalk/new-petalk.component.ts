import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-petalk',
  templateUrl: './new-petalk.component.html',
  styleUrls: ['./new-petalk.component.css']
})
export class NewPetalkComponent implements OnInit {
@ViewChild('tstButton', {static: true}) tst_btn_el: ElementRef<HTMLInputElement>;
  constructor(Render: Renderer2, tst_btn_el: ElementRef<HTMLInputElement>) { 

    this.tst_btn_el = tst_btn_el;
  }

  ngOnInit(): void {
  }

   tstBtnClick()
  {
    // this.http
  }


}
