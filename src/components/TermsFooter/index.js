import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"
import * as S  from'./styled';

const LinksTerms = () => (
    <S.WrapperLinksTerms>
        <AniLink to= "/"> <S.CopyRight>@2020 desertovermelho.com </S.CopyRight></AniLink> • 
        <S.LinkTerm to= "/terms" direction="right" duration={0.5} bg={getThemeColor()}> termos de uso</S.LinkTerm> • 
        <S.DevelopBy to="https://github.com/laiscavalcanti" direction="right" duration={0.5} bg={getThemeColor()}>  
            desenvolvido por @laiscavalcanti
        </S.DevelopBy> • 
        <S.Contact>
            fale aqui: desertovermelho@gmail.com
        </S.Contact>
    </S.WrapperLinksTerms>
    
    )
export default LinksTerms;
