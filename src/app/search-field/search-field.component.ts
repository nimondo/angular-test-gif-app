import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    searchForm: FormGroup;
    constructor(private formBuilder: FormBuilder,) {
    }

    ngOnInit() {
        this.initForm()
    }
    initForm() {
        this.searchForm = this.formBuilder.group({
          search: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{2,}/)]]
        });
      }
    onSubmit() {
        const searchTerm = this.searchForm.get('search').value;
        console.log(searchTerm);
    }
}
