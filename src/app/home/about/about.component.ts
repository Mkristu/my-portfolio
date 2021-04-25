import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(private crudService: CrudService) {
    this.crudService.get().subscribe(res => {
      this.techStack = res;
      console.log(this.techStack)
    })
  }
  techStack: any;
  ngOnInit(): void {
  }

}
