import React from 'react'
import otterGIF from './giphy.gif'
import * as S from './styled.js'

const Gif = () => (
    <S.notFoundWrapper>
        <S.gifWrapper>
            <img src={otterGIF} alt="michel scott fazendo cara feia" />
        </S.gifWrapper>
        <S.paragraphNotFound>
            <S.textNotFound>Você está na página errada! Volte para home :)))</S.textNotFound> 
            <S.buttonNotFound to="/">
            <S.textNotFoundButton>Clique aqui para ler mais!</S.textNotFoundButton>
            </S.buttonNotFound>
        </S.paragraphNotFound>

     </S.notFoundWrapper>
)

export default Gif;