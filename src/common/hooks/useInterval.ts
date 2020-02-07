/**
 * hook version of setInterval
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

import { useRef, useEffect } from 'react';

/**
 * implementation
 */

const NOOP = () => {};

function useInterval(
	callback: () => void,
	delayMs: number,
	leadingCall: boolean = false // whether to immediately call the callback to start
) {
	const callbackRef = useRef<() => void>(NOOP);

	useEffect(() => {
		callbackRef.current = callback;
	});

	// on mount/unmount only
	useEffect(() => {
		if (leadingCall) {
			callbackRef.current();
		}
	}, []);

	// setup/clean-up interval when delayMs changes
	useEffect(() => {
		function tick() {
			callbackRef.current();
		}

		const id = window.setInterval(callbackRef.current, delayMs);
		return () => window.clearInterval(id);
	}, [delayMs]);
}

export default useInterval;
