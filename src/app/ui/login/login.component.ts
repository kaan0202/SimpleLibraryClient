import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CustomToastrService, ToastrType } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService,private toastr:CustomToastrService){}
  model:any ={}

  login(){
    this.auth.login(this.model,()=>{
     this.toastr.showMessage("Giriş Başarılı","",{toastrType:ToastrType.Success})
    })
  }
}
