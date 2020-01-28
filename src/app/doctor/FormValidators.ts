import { AbstractControl, FormGroup } from '@angular/forms';

export function forbiddenPasswordValidator(group: FormGroup){
    if(group){
        var password:string = group.value.password;
        var username:string = group.value.username;
        if(username && password){
            if (password.search(username)!==-1){
                return group.controls["password"].setErrors({passworderror:true});
            }
        } 
        return null;
    }
    return null;
  }