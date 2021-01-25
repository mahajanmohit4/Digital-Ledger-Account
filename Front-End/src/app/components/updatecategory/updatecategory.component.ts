import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  id: number | undefined;
  categorys: Category[] | undefined;
  cat: Category[] = [];
 
  category: Category = new Category();
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
   
    ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe(data => {
     // console.log(data);
      this.category = data;
      
    }, error => console.log(error) );
    
  }
 
  
  onSubmit(){
    this.categoryService.updateCategory(this.id, this.category).subscribe( data =>{
     // console.log(data);
      alert("Category Name is updated !!");
      this.router.navigate(['category']);
    },
    error => console.log(error) );
  }

}
