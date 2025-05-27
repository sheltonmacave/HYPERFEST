import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt.js';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 isto é a chave para funcionar com <md-slider>
})
export class TesteComponent implements AfterViewInit {
  @ViewChild('myVideo', { static: true }) video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    setTimeout(() => {
      const vid = this.video.nativeElement;
      vid.muted = true;
      vid.play().catch(err => console.warn('Erro ao dar play:', err));
    }, 300);

    flatpickr('#dateRange', {
      mode: 'range',
      dateFormat: 'Y-m-d',
      locale: Portuguese
    });
  }

  valor: number = 50;

  onSliderChange(event: Event) {
    this.valor = Number((event.target as any).value);
  }
}
