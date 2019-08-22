import { RegisterComponent } from "./register.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    let routerMock: Partial<Router>;
    let authenServiceMock: Partial<AuthenticationService>;

    beforeEach(async(() => {

        routerMock.navigate(['/']);
        TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [BrowserModule, FormsModule, ReactiveFormsModule],
            providers: [{provide: Router, useValue: routerMock },
                        {provide: AuthenticationService, useValue: authenServiceMock}
                    ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(RegisterComponent);
            component = fixture.componentInstance;
            fixture.debugElement.injector.get(Router); 
        });
    }));

    it('should create', () => {
        expect(component).toBeTruthy();

    });

    // it('should submitted to true after submit button is clicked', () => {
    //     // let 
    // });

});