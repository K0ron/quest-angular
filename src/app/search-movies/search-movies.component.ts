import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { SearchFormModel } from '../search-form-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit, OnDestroy {
  searchForm!: FormGroup;

  minYear = 1900;
  maxYear = new Date().getFullYear();

  searchFormListener!: Subscription;

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.FormBuilder.group({
      infos: this.FormBuilder.group(
        {
          id: [''],
          title: [''],
        },
        {
          validator: this.isRequiredValidator('title', 'id'),
        }
      ),
      type: ['série'],
      releaseYear: [
        '',
        [
          Validators.required,
          this.rangeDateValidator(this.minYear, this.maxYear),
        ],
      ],
      sheet: [''],
    });

    this.searchFormListener = this.searchForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );

    this.searchForm.patchValue({ sheet: 'courte' });
  }

  ngOnDestroy(): void {
    this.searchFormListener.unsubscribe();
  }

  submit() {
    const model: SearchFormModel = this.searchForm.value;
    console.log(JSON.stringify(this.searchForm.value));
  }

  isRequiredValidator(title: string, id: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const idControl = control.get(id);
      const titleControl = control.get(title);

      if (idControl?.value || titleControl?.value) {
        return null;
      }
      return {
        isRequired: true,
      };
    };
  }

  rangeDateValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const triggerYear = control.value;
      if (triggerYear >= min && triggerYear <= max) {
        return null;
      }
      return { min: [min, max] };
    };
  }
}
