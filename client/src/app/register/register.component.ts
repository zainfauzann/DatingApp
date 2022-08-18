import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    //receiving properties from parent
    //import user parent->child
    // @Input() usersFromHomeComponent: any;

    //receiving properties from child
    //cancel register button
    //eventEmitter use to emit something
    @Output() cancelRegister = new EventEmitter();

    model: any = {};

    constructor(private accountService: AccountService) { }

    ngOnInit(): void {
    }

    register() {
        this.accountService.register(this.model).subscribe(response =>{
            console.log(response);
            this.cancel();
        }, error => {
            console.log(error);
        })
    }
    
    //click cancel button, we want to emit value
    //emit = false to turn off
    cancel() {
        this.cancelRegister.emit(false);
    }
}
