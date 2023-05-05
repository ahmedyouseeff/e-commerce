import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Input() all: boolean = true;
  @Input() select: string = '';
  @Output() selectedValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
