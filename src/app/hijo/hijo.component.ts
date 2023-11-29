import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Input() titulo: string = '';

  @Output() titleChange = new EventEmitter<string>();

  emitChange() {
    this.titleChange.emit(this.titulo);
  }
}
