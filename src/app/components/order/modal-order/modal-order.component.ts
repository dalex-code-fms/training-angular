import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css'],
})
export class ModalOrderComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() data: any;
  @Output() close = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) console.log(`Data changed : ${changes['data']}`);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  closeModal(): void {
    this.close.emit();
  }
}
