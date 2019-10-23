import React from "react";

import {
    SuggestionsControl,
    PrimaryButton,
    DefaultButton,
    DialogFooter,
    TextField
} from "office-ui-fabric-react";

if (!SuggestionsControl) {
    // Do nothing.
}

/**
 * Main App component.
 */
export default (): JSX.Element => (
    <form>
        <TextField label="Username" autoComplete="username" />
        <TextField
            label="Password"
            autoComplete="current-password"
            type="password"
        />
        <DialogFooter>
            <PrimaryButton text="OK" />
            <DefaultButton text="Cancel" />
        </DialogFooter>
    </form>
);
