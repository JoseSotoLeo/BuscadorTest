import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/shared/interfaces/data.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() repos$: Observable<Repo[]>;
  @Input() isSearched: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url:string){
    window.open(url, "_blank");
  }

}
