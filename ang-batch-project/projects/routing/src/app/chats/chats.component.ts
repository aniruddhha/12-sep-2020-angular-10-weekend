import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  num: string
  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRt.params.subscribe(
      prms => this.num = prms['chatWith']
    )
  }
}
