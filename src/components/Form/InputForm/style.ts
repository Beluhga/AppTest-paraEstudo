import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
`;

export const Error = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme}) => theme.fonts.regular};
    color: ${({ theme}) => theme.colors.linecolor};

    margin: 1px;
`;