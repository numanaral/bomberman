import { OnlineGameId, PlayerId } from 'containers/Game/types';
import { useEffect, useState } from 'react';
import useWatchOnlineGame from 'store/firebase/hooks/useWatchOnlineGame';
import { useHistory } from 'react-router-dom';
import { BASE_PATH } from 'routes/constants';
import useOnPlayerExit from 'hooks/useOnPlayerExit';
import PlayerDisplay from './PlayerDisplay';

interface Props {
	// playerId: PlayerId;
	gameId: OnlineGameId;
}

// TODO
const WaitingRoom = ({ gameId }: Props) => {
	const { push } = useHistory();

	const {
		pending,
		error,
		game,
		isReady,
		onPlayerJoin,
		onPlayerExit,
		onStartGame,
	} = useWatchOnlineGame(gameId);

	const [
		currentOnlinePlayerId,
		setCurrentOnlinePlayerId,
	] = useState<PlayerId>();

	useOnPlayerExit(gameId, onPlayerExit, currentOnlinePlayerId);

	useEffect(() => {
		if (!isReady) return;

		const { players } = game;
		const playerKeys = Object.keys(players);
		const playerCount = playerKeys.length;
		if (playerCount > 3) {
			push(`${BASE_PATH}/unauthorized`, { message: 'Game is full!' });
			return;
		}
		// Pick a number that's the smallest from non existing player ids
		// i.e. P1 joins, P2 joins, P1 leaves, P1 joins, he should be assigned
		// P1 and not P2 (because ind + 1 will be 2 at this point)
		const currentPlayerNumbers = playerKeys.map(key => {
			return Number(key.replace('P', ''));
		});
		const openPlayerNumbers = [1, 2, 3, 4].filter(openNumber => {
			return !currentPlayerNumbers.includes(openNumber);
		});
		const newPlayerId = `P${Math.min(...openPlayerNumbers)}` as PlayerId;
		onPlayerJoin(newPlayerId);
		// TODO: error checking?
		setCurrentOnlinePlayerId(newPlayerId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady]);

	useEffect(() => {
		if (!isReady) return;
		if (!game?.started) return;

		push(`${BASE_PATH}/online/${gameId}`, {
			playerId: currentOnlinePlayerId,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady, game?.started]);

	return (
		pending ||
		error || (
			<PlayerDisplay
				players={game.players}
				onStartGame={onStartGame}
				currentOnlinePlayerId={currentOnlinePlayerId}
			/>
		)
	);
};

export default WaitingRoom;
