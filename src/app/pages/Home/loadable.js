import * as React from 'react';
import { lazyLoad } from '../../../utils/loadable';
import styled from 'styled-components';
import { LoadingIndicator } from '../../components/LoadingIndicator';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePage = lazyLoad(
  () => import('./index'),
  null,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
