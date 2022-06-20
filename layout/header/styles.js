import styled from '@emotion/styled';
import { PALETTE } from './../../lib/constants';

export const Header = styled("header")`
background-color:${PALETTE.white} ;
`
export const Title = styled("p")`
font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 24px;
text-align: center;
color:${PALETTE.blue};
`
export const Name = styled("p")`
font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 24px;
color: ${PALETTE.black};
`

export const JobTitle=styled("p")`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 14px;
color: ${PALETTE.grey200};
`