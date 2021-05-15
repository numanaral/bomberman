import Game from 'containers/Game';
import useOnGameEnd from 'hooks/useOnGameEnd';
import useOnPlayerExitOnline from 'hooks/useOnPlayerExitOnline';
import { RouteComponentPropsWithLocationState } from 'routes/types';
import useWatchOnlineGame from 'store/firebase/hooks/useWatchOnlineGame';
import useOnlineGame from 'store/redux/hooks/useOnlineGame';

const Online = ({
	location,
	match: {
		params: { id },
	},
}: RouteComponentPropsWithLocationState<{ id: string }>) => {
	const { pending, error, ...gameProps } = useOnlineGame(id);
	const { game } = useWatchOnlineGame(id);
	const currentOnlinePlayerId = location?.state?.playerId;
	const players = game?.gamePlayers || {};

	useOnPlayerExitOnline(id, currentOnlinePlayerId);
	useOnGameEnd(players, currentOnlinePlayerId, id);

	return (
		pending ||
		error || (
			<Game {...gameProps} playerId={currentOnlinePlayerId} gameId={id} />
		)
	);
};

export default Online;