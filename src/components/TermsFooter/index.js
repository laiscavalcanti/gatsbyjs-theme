import React from 'react';
import getThemeColor from "../../utils/getThemeColor"
import * as S  from'./styled';

const LinksTerms = () => (
    <S.WrapperLinksTerms>
        <S.CopyRight>@2020 desertovermelho.com</S.CopyRight> • 
        <S.LinkTerm to= "/terms" direction="right" duration={0.5} bg={getThemeColor()}> termos de uso</S.LinkTerm> • 
        <S.DevelopBy to="https://github.com/laiscavalcanti" direction="right" duration={0.5} bg={getThemeColor()}>  
            desenvolvido por @laiscavalcanti
        </S.DevelopBy> • 
        <S.Contact>
            fale aqui: contato@desertovermelho.com.br
        </S.Contact>
    </S.WrapperLinksTerms>
    
    )
export default LinksTerms;
