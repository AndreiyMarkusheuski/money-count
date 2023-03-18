import React from "react";
import { render, RenderResult, fireEvent } from '@testing-library/react';
import Main from "../../../../app/components/pages/main";

let documentBody: RenderResult;

function sleep(ms : number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('<Main />', () => {
    beforeEach(() => {
        documentBody = render(<Main />);
    });

    it('render <Main/> before fetch', () => {
        const { baseElement } = documentBody;
        expect(baseElement).toMatchSnapshot();
    })
})