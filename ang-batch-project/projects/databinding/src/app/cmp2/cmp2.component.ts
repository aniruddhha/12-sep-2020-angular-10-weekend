import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  @Output('profileprogress')
  profileProgress: EventEmitter<number> = new EventEmitter()

  progress: number

  @ViewChild('biodata')
  biodata: ElementRef<HTMLInputElement>

  @ViewChild('demographic')
  demographic: ElementRef<HTMLInputElement>

  @ViewChild('educational')
  educational: ElementRef<HTMLInputElement>

  @ViewChild('joborbusiness')
  joborbusiness: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }

  checkChange() {
    this.calculateProgress()
  }

  private calculateProgress() {
    console.log(`Biodata state - ${this.biodata.nativeElement.checked}`)
    console.log(`Demographic state - ${this.demographic.nativeElement.checked}`)
    console.log(`Educational state - ${this.educational.nativeElement.checked}`)
    console.log(`JobOrBusiness state - ${this.joborbusiness.nativeElement.checked}`)

    // Homework - calculate to progress 

    // { }

    this.progress = 50
    this.profileProgress.emit(this.progress)
  }
}
