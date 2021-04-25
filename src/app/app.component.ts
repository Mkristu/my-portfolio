import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {

  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let current_route = event.state.root.firstChild;
        this.title = current_route?.data.title;
        this.titleService.setTitle(this.title);
      }
    });
  }
}
