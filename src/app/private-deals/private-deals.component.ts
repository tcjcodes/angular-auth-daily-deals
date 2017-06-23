import { Component, OnInit } from '@angular/core';
import { Deal } from '../deal';
// We haven't defined these services yet
import { AuthService } from '../auth.service';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-private-deals',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: 'private-deals.component.html',
  styleUrls: ['private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  privateDeals: Deal[];

  // Note: We haven't implemented the Deal or Auth Services yet.
  constructor(private dealService: DealService,
              public authService: AuthService) {
  }

  // When this component is loaded, we'll call the dealService and get our private deals.
  ngOnInit(): void {
    this.dealService.getPrivateDeals()
      .then(deals => this.privateDeals = deals);
  }

  purchase(item) {
    alert('You bought the: ' + item.name);
  }
}
