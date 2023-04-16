import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToastService } from '@app/shared/services/toast.service';

@Component({
  selector: 'app-colour-swatch',
  templateUrl: './colour-swatch.component.html',
  styleUrls: ['./colour-swatch.component.scss'],
})
export class ColourSwatchComponent implements OnInit {
  @ViewChild('hexToast') hexToast!: ElementRef;
  @Input() name: string = '';
  @Input() hexCode: string = '';
  @Input() colorClass: string = '';

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  copyHexCode(): void {
    navigator.clipboard
      .writeText(this.hexCode)
      .then(() => {
        this.toastService.show(`Copied ${this.hexCode} to clipboard.`, 'success');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }
}
