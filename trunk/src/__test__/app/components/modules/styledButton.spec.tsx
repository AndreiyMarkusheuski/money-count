import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { StyledButton } from '../../../../app/components/modules/StyledButton'

let documentBody: RenderResult;

const testFunc = () => {
    console.log('test')
}

describe('<StyledButton />', () => {
    beforeEach(() => {
      documentBody = render(<StyledButton textButton={'test'} handleClick={testFunc}/>);
    });

    it('shows text message', () => {
      expect(documentBody.getByText('test')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
      const { baseElement } = documentBody;
      expect(baseElement).toMatchSnapshot();
      expect(documentBody.getByText('test')).toBeInTheDocument();
      fireEvent.click(documentBody.getByText('test'))
      expect(baseElement).toMatchSnapshot();
    });
  });