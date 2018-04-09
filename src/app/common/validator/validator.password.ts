import {AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {

    static passwordConfirmer(controls: AbstractControl) {

        const password = controls.get('password');
        const confirmPassword = controls.get('confirmPassword');

        if (password.value !== confirmPassword.value) {

            return { passwordConfirmer: true};

        } else {

            return { passwordConfirmer: false};
        }
    }
}
