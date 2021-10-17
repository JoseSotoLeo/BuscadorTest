import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private dataService: DataService) { }

  repos$ = this.dataService.repos$;
  isSearched: Boolean = false;
  


  searchValues(values:any){
    this.dataService.getDataByTopicAndStars(values.topic, values.stars).toPromise().then(res => {
      this.isSearched = true
    });
  }

}
