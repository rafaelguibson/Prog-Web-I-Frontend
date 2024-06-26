import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  collapsed = signal(true);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')
}
