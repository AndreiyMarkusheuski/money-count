import React from "react";
import { render, RenderResult, fireEvent } from '@testing-library/react';
import StyledInput from '../../../../app/components/modules/StyledInput'

let documentBody: RenderResult;

describe('<StyledInput/>', () => {
    const testData = {
        typeInput: 'number',
        placeholder: 'placeholder',
        valueInput: '250',
        handleChange: () => { console.log('test') }
    }

    beforeEach(() => {
        documentBody = render(<StyledInput {...testData} />);
    });

    it('match snapshot', () => {
        const { baseElement } = documentBody;
        expect(baseElement).toMatchSnapshot();
    })

    it('should render the component onto the screen', () => {
        expect(documentBody.getByTestId('add-word-input')).toBeInTheDocument();
    })

    it('should render the component onto the screen with value "test" and placeholder "placeholder"', () => {
        const input = documentBody.getByTestId('add-word-input') as HTMLInputElement;
        expect(input.value).toBe('250')
    })

    it('should render the component onto the screen and update value', () => {
        const input = documentBody.getByTestId('add-word-input') as HTMLInputElement;

        fireEvent.click(input, {
            target: {
                value: "23"
            }
        })

        expect(input.value).toBe('23')
    })
})