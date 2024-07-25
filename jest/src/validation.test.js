import * as passwordChecker from "./passwordChecker"

import {validatePassword} from "./validation";

describe('validatePassword', () => {
    it('should reject common passwords', () => {
        expect(validatePassword("password")).toEqual(false);
        expect(validatePassword("12345678")).toEqual(false);
    });
});
