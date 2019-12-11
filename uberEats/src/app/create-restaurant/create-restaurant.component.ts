import { Component, OnInit } from '@angular/core';
import { RestaurantAdminService } from '../restaurant-admin.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.scss']
})
export class CreateRestaurantComponent implements OnInit {
  // menu = [{"name":"abc","category":"abc","isavalable":true,"price":"12$","edit":false},{"name":"abcd","category":"abc","isavalable":true,"price":"12$","edit":false},{"name":"abcde","category":"abc","isavalable":true,"price":"12$","edit":false},{"name":"abc","category":"abc","isavalable":true,"price":"12$","edit":false},{"name":"abc","category":"abc","isavalable":true,"price":"12$","edit":false}];
  menu=[]
  menuCategory = []
  currentMenuInd = -1;
  restaurant_id = "";
  category = "";
  addCategorytoggle = false;
  menutemplate = {"name":"a","category":"","isavalable":false,"price":"","edit":true};
  restaurantdata = {"bgimg":"https://images.unsplash.com/photo-1553964274-ac6059a35745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"}
  lat = 0;
  long = 0;
  constructor(private restaurantAdminService:RestaurantAdminService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    this.restaurant_id = this.route.snapshot.paramMap.get('id');
    console.log(this.restaurant_id);
    if(this.restaurant_id){
      this.restaurantAdminService.getRestaurantByID(this.restaurant_id).subscribe((data: any)=>{
        this.restaurantdata = data;
        this.getLocation();
        
      })
      
      this.getMenu();
    }
    else{
      this.getLocation();
      this.getMenu();
    }
  }
  getLocation(){
    this.restaurantAdminService.getPosition().then(pos=>
      {
         this.long = pos.lng
         this.lat = pos.lat;
         this.restaurantdata["loc"] = {type:"Point","coordinates":[this.long,this.lat]}
         this.restaurantdata['location'] = this.restaurantdata['loc']['coordinates'].join(',')
         console.log(this.restaurantdata);
        });
  }
  getMenu(){
    this.restaurantAdminService.getMenuByRestaurant(this.restaurant_id).subscribe((data: any[])=>{
      this.menu = data;
      if(this.currentMenuInd==-1){
        for(let i of this.menu){
          this.currentMenuInd = 0;
          this.menuCategory = this.menu[this.currentMenuInd]["menu"]
          break;
        }
        
      }
      else{
        this.menuCategory = this.menu[this.currentMenuInd]["menu"]
      }
      console.log(this.menu);
      
    })
  }
  check(){
    console.log(this.menu);
  }
  changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
            let csv: string = reader.result as string;
            console.log(csv);
         }
      }
  }
  gg(m){
    var e = window.event;
    e.preventDefault();
    console.log(this.menu);
  }
  trackByFn(index, item) {
    return index;
}
  createRestaurant(){
    console.log(this.restaurantdata)
    this.restaurantdata['loc'] = {
      type:  "Point",
      coordinates: this.restaurantdata['location'].split(",")
    };
    console.log(this.restaurantdata)
    if(!("_id" in this.restaurantdata)){
    this.restaurantAdminService.createRestaurant(this.restaurantdata).subscribe((data: any[])=>{
      this.restaurantdata["_id"] = data['_id'];
      this.restaurant_id = data["_id"];
      this.router.navigate(["/admin/homepage"])
    })  }
    else{
      this.restaurantAdminService.editRestaurant(this.restaurantdata["_id"],this.restaurantdata).subscribe((data: any[])=>{
        console.log(data);
        this.restaurant_id = data["_id"];
      }) 
    }
  }
  createMenu(){
    
    // this.getMenu();
    this.menutemplate['category'] = this.menu[this.currentMenuInd]['_id']
    this.menuCategory.splice(0,0,this.menutemplate);
    // console.log(this.menu);
  }
  edit(m){
    m['edit']=!m['edit'];
  }
  update(m){
    m['restaurant_id'] = this.restaurant_id;
    if("_id" in m){
      this.restaurantAdminService.editMenu(m['_id'],m).subscribe((data: any[])=>{
        this.getMenu();
        
      })
    }
    else{
      this.restaurantAdminService.createMenu(m).subscribe((data: any[])=>{
        this.getMenu();
      })
    }
  }
  delete(m){
    
  }
  changeMenuCategory(item,ind){
    this.currentMenuInd = ind;
    this.menuCategory = item["menu"];
  }
  toggleCategory(){
    // this.menu[""]
    this.addCategorytoggle = !this.addCategorytoggle;
  }
  addCategory(){
    if(this.category){
      this.menu.push({_id:this.category,menu:[]})
      this.category = '';
    }
  }
}
