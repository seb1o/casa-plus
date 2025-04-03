import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing/housing.service';
import { HousingLocation } from '../../model/housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  casettaService: HousingService = inject(HousingService)

  casetta: HousingLocation | undefined

  // const firstName = new FormControl("");
  // const lastName = new FormControl("lastName");
  // const email = new FormControl("email");
  // applyForm = new FormGroup({
  //   firstName,
  //   lastName,
  //   email,
  // })
  applyForm = new FormGroup({ firstName: new FormControl(''), lastName: new FormControl(''), email: new FormControl(''), });
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.casetta = this.casettaService.getHousingLocationById(housingLocationId);
  }
   submitApplication() {// this.casettaService.submitApplication(this.applyForm.value.firstName ?? '', this.applyForm.value.lastName ?? '', this.applyForm.value.email ?? '',); 
  const firstName = this.applyForm.value.firstName ?? '';
  const lastName = this.applyForm.value.lastName ?? '';
  const email = this.applyForm.value.email ?? '';
  this.casettaService.submitApplication(firstName, lastName, email);
}
}
