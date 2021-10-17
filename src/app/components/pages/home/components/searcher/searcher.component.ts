import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {



  searchForm: FormGroup;
  @Output() searchValues = new EventEmitter<any[]>();

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      topic: new FormControl('', Validators.required),
      stars: new FormControl('', Validators.required)
    })
  }

  search($event:any){
    $event.preventDefault()
    this.searchValues.emit(this.searchForm.value);
    
  }

}
