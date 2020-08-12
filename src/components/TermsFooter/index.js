import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S  from'./styled';

const LinksTerms = () => (
    <S.WrapperLinksTerms>
        <S.CopyRight>@2020 desertovermelho.com</S.CopyRight> •
        <S.LinkTerm><AniLink to= "/terms">termos de uso</AniLink></S.LinkTerm>
    </S.WrapperLinksTerms>
)
export default LinksTerms;
