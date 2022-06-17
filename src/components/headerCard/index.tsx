import React, { FC }  from "react";

import { CardContainer } from './styles';

export type HeaderCardProps = {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: () => void;
  }


const HeaderCard: FC = (props: HeaderCardProps) => {

    return (
        <CardContainer>
            TESTE
        </CardContainer>
    )
}

export { HeaderCard }