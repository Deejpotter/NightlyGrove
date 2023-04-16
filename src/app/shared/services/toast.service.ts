import { ElementRef, Injectable, NgZone } from '@angular/core';
import { NgbToast, NgbToastConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';

export type ToastType = 'success' | 'danger' | 'warning' | 'info';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast$ = new Subject<{ toastInstance: NgbToast; type: ToastType; message: string }>();

  constructor(private toastConfig: NgbToastConfig, private ngZone: NgZone) {
    // Set global toast options
    this.toastConfig.autohide = true;
    this.toastConfig.delay = 1000;
  }

  show(message: string, type: ToastType = 'success', options?: { autohide?: boolean; delay?: number }): void {
    const dummyElementRef = { nativeElement: document.createElement('div') };
    const toastConfig = new NgbToastConfig(this.toastConfig);
    toastConfig.autohide = options?.autohide ?? this.toastConfig.autohide;
    toastConfig.delay = options?.delay ?? this.toastConfig.delay;

    this.toast$.next({
      toastInstance: new NgbToast('', toastConfig, this.ngZone, dummyElementRef),
      type,
      message,
    });
  }

  getToastStream(): Observable<{ toastInstance: NgbToast; type: ToastType; message: string }> {
    return this.toast$.asObservable();
  }
}
