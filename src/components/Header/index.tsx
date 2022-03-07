import { InputHTMLAttributes } from 'react';

import searchIcon from 'assets/searchIcon.svg';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Header({ ...props }: InputProps) {
	return (
		<S.Header>
			<div>
				<h1>Codelândia</h1>
				<span>blog</span>
			</div>

			<S.InputWrapper>
				<img src={searchIcon} alt="Ícone de lupa" />
				<input type="text" placeholder="Pesquisar no blog" {...props} />
			</S.InputWrapper>
		</S.Header>
	);
}

export default Header;
