import { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import theme from 'theme';

interface Props {
	size: number;
	top: number;
	left: number;
	color?: string;
	collisionIndex?: number;
}

type WrapperProps = StyledProps<
	Props,
	'size' | 'top' | 'left' | 'color' | 'collisionIndex'
>;

/** @see https://codepen.io/nelledejones/pen/gOOPWrK#L68 */
const bounceAnimation = keyframes`
 from { transform: scale(0, 0); }
 to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
`;

const Wrapper = styled.div.attrs<WrapperProps>(
	({ $size, $top, $left, $color }) => ({
		style: {
			width: $size,
			height: $size,
			top: $top,
			left: $left,
			...($color && { backgroundColor: $color }),
		},
	})
)<WrapperProps>`
	position: absolute;
	/* background-color: ${theme.palette.background.secondary}; */
	border: 1px solid ${theme.palette.background.primary};
	${({ $color, $collisionIndex }) => {
		return (
			($color &&
				css`
					transform: scale(0, 0);
					z-index: 9999;
					animation: ${bounceAnimation} 0.5s ease
						${($collisionIndex as number) * 0.1}s forwards;
				`) ||
			''
		);
	}}
`;

const Tile = ({ size, top, left, color, collisionIndex }: Props) => {
	return (
		<Wrapper
			$size={size}
			$top={top}
			$left={left}
			$color={color}
			$collisionIndex={collisionIndex}
		/>
	);
};

export default memo(Tile);