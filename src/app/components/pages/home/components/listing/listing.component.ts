import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from 'src/app/shared/interfaces/data.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  @Input() repos$: Observable<Repo[]>;
  @Input() isSearched: Boolean;


  goToLink(url:string){
    window.open(url, "_blank");
  }

}
