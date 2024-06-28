import {Component, computed, Input, signal} from '@angular/core';
// Lista de itens do menubar
export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);

  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Inicio',
      route: 'home'
    },
    {
      icon: 'note_add',
      label: 'Adicionar Receita',
      route: 'addRecipe'
    },
    {
      icon: 'analytics',
      label: 'Analytis',
      route: 'analytics'
    },
    {
      icon: 'comment',
      label: 'Comment',
      route: 'comments'
    },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');


}
