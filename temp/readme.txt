ng g c component_name
ng generate component component_name

cd src/app/child then enter ng g c component_name

if we want the component use as a style component then place the name of the component in the selecter as selecter:"[component_name]" then use as a <div component_name> </div>

if we want the component use as a class then place then name of the component in the selecter as selecter:".component_name" then use as a <div class= "component_name"></div>


disabled hidden checked not working with string interpolation {{}} use it with property binding [disabled]

bind-value or [value] to store dynamic value in input

1atribute binding for binding this [attr.aria-hidden]
2property binding [value]

event binding (click)

threee types of directive
1 component
2 attribute
3 structural (ngIf , ngFor, ngSwitch)