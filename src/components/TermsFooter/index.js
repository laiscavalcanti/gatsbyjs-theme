import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S  from'./styled';

const LinksTerms = () => (
    <S.WrapperLinksTerms>
        <S.CopyRight>@2020 desertovermelho.com</S.CopyRight> • 
        <S.LinkTerm><AniLink to= "/terms">termos de uso</AniLink></S.LinkTerm>
        <S.DevelopBy>
            Desenvolvido por: <AniLink to="https://github.com/laiscavalcanti">@laiscavalcanti</AniLink>
        </S.DevelopBy>
        <S.Contact>
            Fale aqui: contato@desertovermelho.com.br
        </S.Contact>
    </S.WrapperLinksTerms>
    
    )
export default LinksTerms;
