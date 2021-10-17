import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  repos$ = this.dataService.repos$;
  isSearched: Boolean = false;
  
  ngOnInit(): void {}


  async searchValues(values:any){
    this.dataService.getDataByTopicAndStars(values.topic, values.stars).toPromise().then(res => {
      this.isSearched = true
    });
  }

}
