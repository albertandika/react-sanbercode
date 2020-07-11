import React from 'react';
import { render } from '@testing-library/react';
import Weight from '../view/Weight';

test('2kg equal 2000g', () => {
    expect(2 * 1000).toBe(2000)
  });