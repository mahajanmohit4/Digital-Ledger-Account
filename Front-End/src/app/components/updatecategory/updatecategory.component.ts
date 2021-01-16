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

  category: Category = new Category();
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCategorys();

    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe(data => {
      console.log(data);
      this.category = data;
      
    }, error => console.log(error) );
  }

  private getCategorys(){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categorys = data;
      console.log(data);
      
    });
  }

  deleteCategory(id: number | undefined){
    this.categoryService.deleteCategory(id).subscribe( data => {
      console.log(data);
      this.getCategorys();      
    });
  }

  updateCategory(id: number | undefined){
    
    console.log("update is left");
    
  }

  onSubmit(){
    this.categoryService.updateCategory(this.id, this.category).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error) );
  }

}
