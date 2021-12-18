import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-nav-bar',
  templateUrl: './mg-nav-bar.component.html',
  styleUrls: ['./mg-nav-bar.component.scss']
})

export class MgNavBarComponent implements OnInit {
  private navBarElements: Element[] = new Array();

  constructor() {}

  ngOnInit(): void {
    const elements = document.getElementById('navbarList')?.children;
    if (elements)
      for (let i = 0; i < elements.length; i++)
        this.navBarElements.push(elements.item(i) as Element);
  }

  ngAfterViewInit()
{
   document.getElementById('navbarList')?.children.length
}

  public navClick(target: EventTarget | null) {
    if (target) {
      const element = target as Element;
      element.children.item(0)?.classList.add('active');
      this.navBarElements
        .filter(nElement => nElement.id !== element.id)
        .forEach(nElement => nElement.children.item(0)?.classList.remove('active'));
    }
    // Here other actions
  }


}

