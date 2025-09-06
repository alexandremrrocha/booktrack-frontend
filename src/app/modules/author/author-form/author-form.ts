import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthorService } from '../../../services/author/author.service';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './author-form.html',
  styleUrl: './author-form.css'
})
export class AuthorForm implements OnInit {
  form!: FormGroup;
  id!: number | null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['']
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    this.id = paramId ? Number(paramId) : null;

    if (this.id) {
      this.loadAuthor();
    }
  }

  public async loadAuthor() {
    const author = await this.authorService.getById(this.id!);  
    this.form.patchValue(author);
  }

  public async saveAuthor() {
    if (this.form.invalid) {
      return;
    }
    
    if (this.id){
      await this.authorService.update(this.id, this.form.value);
      this.router.navigate(['/authors'])
    } else {
      await this.authorService.create(this.form.value);
      this.router.navigate(['/authors']);
    }
  }
}
