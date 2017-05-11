import { Component, OnInit } from '@angular/core';
import { CampgroundCallService } from '../campground-call.service';
import { ApiKey } from '../../../api-key';

@Component({
  selector: 'app-campground-search',
  templateUrl: './campground-search.component.html',
  styleUrls: ['./campground-search.component.css'],
  providers: [CampgroundCallService, ApiKey]
})
export class CampgroundSearchComponent implements OnInit {
  rec;
  constructor(private campgroundCall: CampgroundCallService, private apikey: ApiKey) { }

  ngOnInit() {
  }
  findCampgrounds(state){
    this.campgroundCall.fetchCampgrounds(state).subscribe(
      (data1) => this.rec = data1.RecAreaDescription
    );
  }
  findCampgroundsThroughActive(state){
    this.campgroundCall.fetchActiveCampgrounds(state).subscribe(
      (data) => console.log(data)
    );
  }


}
