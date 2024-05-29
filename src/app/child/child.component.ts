import { Component } from "@angular/core";

@Component({
    selector:"app-child",
    // template:"<h1>hello from child</h1>",
    templateUrl:"./child.component.html",
    // styles:['h1{color:green ; background-color:blue}']
    styleUrls:['./child.component.css']
})

export class ChildComponent{
    title:string = 'title of the child component';
    payment:number = 299;
    classOfButton:string = 'btn-danger';
    img:string = "/assets/comingsoon.png";
    img1:string = "/assets/evolve-logo-dark.png";
    img2:string = "/assets/evolve-logo-light.png";
    isImg:boolean = true
    myVar:boolean = true
    num:number = 10
    ipvalue:string = 'please input here!!'
    remainvalue:string = ''
    ngModelval:string = ''
    tableContent = [
        {
            first:"Jay",
            last:"Naganeshwala",
            designation:"Junior Software Developer",
        },
        {
            first:"Gaurav",
            last:"Songara",
            designation:"Junior Software Developer",
        },
        {
            first:"Darshan",
            last:"Prajapati",
            designation:"Junior Software Developer",
        },
        {
            first:"Vimal",
            last:"Prajapati",
            designation:"Big Developer",
        },
    ]

    async clickEvent(){
        console.log("called",this.isImg) 
        console.log("called",this.isImg) 
        this.isImg = !this.isImg
        this.num -= 1
    }

    async getValue(e: any){
        console.log('e>>>>>>>>>>>>>>>',e)

        this.remainvalue += e.data
        
        if(e.data == ' '){
            this.ipvalue = this.remainvalue
            this.remainvalue = ''
            e.target.value = ''
        }
    }
    
}